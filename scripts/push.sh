#!/bin/bash

# Get current date in YYYY-MM-DD format
CURRENT_DATE=$(date +"%Y-%m-%d")

# Add all changes
git add .

# Commit with the specified message format
git commit -m "updated content: $CURRENT_DATE"

# Push to the main branch (change to your default branch if different)
git push origin main

echo "Successfully pushed changes with commit message: 'updated content: $CURRENT_DATE'"
