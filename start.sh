#!/bin/bash
set -e
cd "$(dirname "$0")"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
  echo "Installing mobile app dependencies..."
  npm install --legacy-peer-deps
fi

# Start Expo in tunnel mode for Replit compatibility
npx expo start --web --port 8081
