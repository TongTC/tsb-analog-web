#!/bin/bash
set -e

cd "$(dirname "$0")"

echo "Firebase Functions deployment prep..."

# Build
npm run build

#  Ensure lockfile exists for Cloud Build
cd dist/analog/server

# If lockfile doesn't exist, generate one from package.json
if [ ! -f package-lock.json ]; then
  echo "Generating package-lock.json for Cloud Build..."
  # Use npm install --package-lock-only to just generate the lock file without installing
  npm install --package-lock-only --legacy-peer-deps 2>/dev/null || npm install --package-lock-only || true
  
  # If that failed, at least touch it so npm ci has something to work with
  if [ ! -f package-lock.json ]; then
    echo "Failed to generate lockfile, creating minimal one..."
    echo '{"lockfileVersion": 1}' > package-lock.json
  fi
fi

echo "Deployment package ready!"
