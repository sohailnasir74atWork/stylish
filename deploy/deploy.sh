#!/bin/bash
# ============================================================
# Deploy Script — Push latest code to Hetzner
# Run from your LOCAL machine: ./deploy/deploy.sh
# ============================================================

set -e

# ── CONFIG ──
SERVER_USER="root"
SERVER_IP="89.167.102.60"
DOMAIN="stylish-names.com"
APP_DIR="/var/www/stylishnames"

echo "🚀 Deploying $DOMAIN to $SERVER_IP..."

# ── 1. Build locally (faster than building on server) ──
echo "📦 Building production bundle..."
npm run build

# ── 2. Sync files to server (exclude dev caches & unnecessary files) ──
echo "📤 Uploading to server..."
rsync -avz --delete \
    --exclude='node_modules' \
    --exclude='.git' \
    --exclude='.env.local' \
    --exclude='deploy' \
    --exclude='.next/cache' \
    --exclude='.next/dev' \
    --exclude='.gemini' \
    --exclude='.agents' \
    --exclude='*.log' \
    ./ ${SERVER_USER}@${SERVER_IP}:${APP_DIR}/

# ── 3. Install deps & restart on server ──
echo "🔄 Installing dependencies & restarting..."
ssh ${SERVER_USER}@${SERVER_IP} << 'REMOTE'
    cd /var/www/stylishnames
    npm install --production --ignore-scripts
    pm2 reload ecosystem.config.js --env production 2>/dev/null || pm2 start ecosystem.config.js --env production
    echo "✅ App restarted"
REMOTE

echo ""
echo "════════════════════════════════════════════"
echo "  ✅ Deployed! Site live at https://$DOMAIN"
echo "════════════════════════════════════════════"
