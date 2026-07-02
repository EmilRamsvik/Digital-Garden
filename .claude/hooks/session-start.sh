#!/bin/bash
set -euo pipefail

cd "$CLAUDE_PROJECT_DIR"

# Install deps only when missing so warm sessions skip this entirely.
if [ ! -d node_modules ]; then
  echo "node_modules missing - running npm ci..."
  npm ci --no-audit --no-fund
fi
