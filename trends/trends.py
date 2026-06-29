#!/usr/bin/env python3
"""
Google Trends research for the stylishnames niche (via pytrends).

Outputs three CSVs into trends/out/:
  - interest_over_time.csv  : 0-100 normalized interest per seed keyword over the timeframe
  - rising_queries.csv      : "breakout" / fast-rising related searches per seed (the gold for new pages)
  - top_queries.csv         : established top related searches per seed

NOTE: pytrends scrapes Google's unofficial endpoint. Numbers are RELATIVE (0-100),
not absolute search volume. Google rate-limits hard (HTTP 429); the delays below
keep us under the radar. If you still hit 429, raise SLEEP_BETWEEN or rerun later.

Usage:
    trends/.venv/bin/python trends/trends.py                 # default seeds + settings
    trends/.venv/bin/python trends/trends.py --geo US        # restrict to a country
    trends/.venv/bin/python trends/trends.py --timeframe "today 3-m"
    trends/.venv/bin/python trends/trends.py --keywords "stylish name,fancy text,nickname generator"
"""

import argparse
import os
import sys
import time

import pandas as pd
from pytrends.request import TrendReq

# --- Seed keywords: the head terms your site competes for -------------------
# Trends compares max 5 terms per request, so seeds are batched in groups of 5.
DEFAULT_KEYWORDS = [
    "stylish name",
    "fancy text generator",
    "nickname generator",
    "cool fonts",
    "name generator",
    "stylish text",
    "free fire name",
    "pubg name",
    "instagram bio fonts",
    "discord name",
    "attitude name",
    "cute fonts",
]

SLEEP_BETWEEN = 8        # seconds between Trends requests (429 avoidance)
OUT_DIR = os.path.join(os.path.dirname(__file__), "out")


def chunked(items, size=5):
    for i in range(0, len(items), size):
        yield items[i:i + size]


def main():
    ap = argparse.ArgumentParser(description="Google Trends research for stylishnames")
    ap.add_argument("--geo", default="", help="Country code (e.g. US, IN, PK). Empty = worldwide.")
    ap.add_argument("--timeframe", default="today 12-m",
                    help="Trends timeframe, e.g. 'today 12-m', 'today 3-m', 'now 7-d'.")
    ap.add_argument("--keywords", default="",
                    help="Comma-separated seeds. Overrides the built-in list.")
    args = ap.parse_args()

    keywords = (
        [k.strip() for k in args.keywords.split(",") if k.strip()]
        if args.keywords else DEFAULT_KEYWORDS
    )

    os.makedirs(OUT_DIR, exist_ok=True)
    geo_label = args.geo or "worldwide"
    print(f"→ {len(keywords)} seeds | geo={geo_label} | timeframe={args.timeframe}")

    # hl=display language, tz=timezone offset in minutes (360 = US Central; harmless default)
    pytrends = TrendReq(hl="en-US", tz=360)

    iot_frames = []      # interest over time
    rising_rows = []     # rising related queries
    top_rows = []        # top related queries

    for batch_i, batch in enumerate(chunked(keywords, 5), start=1):
        print(f"\n[batch {batch_i}] {batch}")
        try:
            pytrends.build_payload(batch, timeframe=args.timeframe, geo=args.geo)
        except Exception as e:
            print(f"  ! build_payload failed: {e}")
            time.sleep(SLEEP_BETWEEN)
            continue

        # 1) interest over time for the whole batch
        try:
            iot = pytrends.interest_over_time()
            if not iot.empty:
                if "isPartial" in iot.columns:
                    iot = iot.drop(columns=["isPartial"])
                iot_frames.append(iot)
                latest = iot.iloc[-1].to_dict()
                print("  interest (latest point):",
                      ", ".join(f"{k}={int(v)}" for k, v in latest.items()))
        except Exception as e:
            print(f"  ! interest_over_time failed: {e}")
        time.sleep(SLEEP_BETWEEN)

        # 2) related queries (rising = breakout opportunities, top = established)
        try:
            related = pytrends.related_queries()
            for kw in batch:
                data = related.get(kw) or {}
                rising = data.get("rising")
                top = data.get("top")
                if rising is not None and not rising.empty:
                    for _, r in rising.iterrows():
                        rising_rows.append({"seed": kw, "query": r["query"], "value": r["value"]})
                    print(f"  rising['{kw}']: {len(rising)} terms (top: {rising.iloc[0]['query']})")
                if top is not None and not top.empty:
                    for _, r in top.iterrows():
                        top_rows.append({"seed": kw, "query": r["query"], "value": r["value"]})
        except Exception as e:
            print(f"  ! related_queries failed: {e}")
        time.sleep(SLEEP_BETWEEN)

    # --- write outputs ------------------------------------------------------
    wrote = []
    if iot_frames:
        iot_all = pd.concat(iot_frames, axis=1)
        iot_all = iot_all.loc[:, ~iot_all.columns.duplicated()]
        path = os.path.join(OUT_DIR, "interest_over_time.csv")
        iot_all.to_csv(path)
        wrote.append(path)

    if rising_rows:
        df = pd.DataFrame(rising_rows).sort_values(["value"], ascending=False)
        path = os.path.join(OUT_DIR, "rising_queries.csv")
        df.to_csv(path, index=False)
        wrote.append(path)

    if top_rows:
        df = pd.DataFrame(top_rows)
        path = os.path.join(OUT_DIR, "top_queries.csv")
        df.to_csv(path, index=False)
        wrote.append(path)

    print("\n" + "=" * 50)
    if wrote:
        print("Wrote:")
        for p in wrote:
            print("  ", p)
        if rising_rows:
            print("\nTop 15 RISING queries (your best new-page ideas):")
            top15 = pd.DataFrame(rising_rows).sort_values("value", ascending=False).head(15)
            for _, r in top15.iterrows():
                print(f"  {str(r['value']):>6}  {r['query']}   (from: {r['seed']})")
    else:
        print("No data returned — likely rate-limited (429). Wait a few minutes and rerun,")
        print("or raise SLEEP_BETWEEN at the top of this script.")
        sys.exit(2)


if __name__ == "__main__":
    main()
