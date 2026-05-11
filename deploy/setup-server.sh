#!/bin/bash
# ============================================================
# Hetzner Server Setup Script — Next.js Production Deployment
# Run this ONCE on a fresh Ubuntu 24.04 Hetzner server
# Usage: ssh root@YOUR_SERVER_IP 'bash -s' < setup-server.sh
# ============================================================

set -e

DOMAIN="stylish-names.com"
APP_DIR="/var/www/stylishnames"
NODE_VERSION="22"
PORT=3000

echo "🚀 Starting server setup for $DOMAIN..."

# ── 1. System Updates ──
apt update && apt upgrade -y
apt install -y curl git ufw fail2ban

# ── 2. Install Node.js ──
curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash -
apt install -y nodejs
echo "✅ Node $(node -v) installed"

# ── 3. Install PM2 (process manager) ──
npm install -g pm2
echo "✅ PM2 installed"

# ── 4. Install Nginx ──
apt install -y nginx
systemctl enable nginx
echo "✅ Nginx installed"

# ── 5. Install Certbot (free SSL) ──
apt install -y certbot python3-certbot-nginx
echo "✅ Certbot installed"

# ── 6. Firewall — only allow SSH, HTTP, HTTPS ──
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable
echo "✅ Firewall configured"

# ── 7. Create app directory ──
mkdir -p $APP_DIR
echo "✅ App directory ready: $APP_DIR"

# ── 8. Create deploy user (optional but recommended) ──
if ! id "deploy" &>/dev/null; then
    adduser --disabled-password --gecos "" deploy
    usermod -aG sudo deploy
    mkdir -p /home/deploy/.ssh
    cp /root/.ssh/authorized_keys /home/deploy/.ssh/
    chown -R deploy:deploy /home/deploy/.ssh
    chown -R deploy:deploy $APP_DIR
    echo "✅ Deploy user created"
fi

# ── 9. Nginx config for Next.js ──
cat > /etc/nginx/sites-available/$DOMAIN <<'NGINX'
# Redirect www → non-www
server {
    listen 80;
    server_name www.stylish-names.com;
    return 301 https://stylish-names.com$request_uri;
}

server {
    listen 80;
    server_name stylish-names.com;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # Gzip compression — huge for SEO (page speed)
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml text/javascript image/svg+xml;

    # Static file caching — critical for performance & cost
    location /_next/static/ {
        alias /var/www/stylishnames/.next/static/;
        expires 365d;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    location /public/ {
        alias /var/www/stylishnames/public/;
        expires 30d;
        add_header Cache-Control "public";
        access_log off;
    }

    # Favicon, robots, sitemap — no proxy needed
    location = /robots.txt { alias /var/www/stylishnames/public/robots.txt; access_log off; }
    location = /sitemap.xml { proxy_pass http://127.0.0.1:3000; }
    location = /favicon.ico { alias /var/www/stylishnames/public/site_logo.webp; access_log off; }

    # Proxy everything else to Next.js
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 60s;
    }
}
NGINX

# Enable site
ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx
echo "✅ Nginx configured"

# ── 10. PM2 ecosystem file ──
cat > $APP_DIR/ecosystem.config.js <<'PM2'
module.exports = {
  apps: [{
    name: 'stylishnames',
    cwd: '/var/www/stylishnames',
    script: 'node_modules/.bin/next',
    args: 'start -p 3000',
    instances: 'max',       // Use all CPU cores
    exec_mode: 'cluster',   // Cluster mode for zero-downtime
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
    },
    max_memory_restart: '500M',
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    error_file: '/var/log/pm2/stylishnames-error.log',
    out_file: '/var/log/pm2/stylishnames-out.log',
  }]
};
PM2

mkdir -p /var/log/pm2
echo "✅ PM2 ecosystem config created"

echo ""
echo "════════════════════════════════════════════"
echo "  ✅ Server setup complete!"
echo "════════════════════════════════════════════"
echo ""
echo "  Next steps:"
echo "  1. Point your domain DNS A records to this server's IP"
echo "  2. Deploy your code: ./deploy.sh"
echo "  3. Get SSL: sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN"
echo ""
