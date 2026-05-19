#!/usr/bin/env bash
set -e
trap 'kill 0' EXIT

ROOT="$(cd "$(dirname "$0")" && pwd)"

echo ">>> Iniciando backend (json-server)..."
node "$ROOT/backend/server.js" &

echo ">>> Iniciando frontend (Angular)..."
cd "$ROOT/site" && npx ng serve --open &

wait
