echo "Node $(node -v), npm $(npm -v)"
npm config get registry
npm config list --location=project
npm ping || true
[ -z "$WEB_APP_TOKEN_1" ] && echo "WEB_APP_TOKEN_1 is EMPTY" || echo "WEB_APP_TOKEN_1 is SET"
