#!/bin/bash

# Change to the parent directory of the script
cd "$(dirname "$0")"/..

# Get today's date in YYYY-MM-DD format
today=$(date +%Y-%m-%d)

# Add all markdown, png, jpg, and jpeg files
git add *.md
git add *.png
git add *.jpg
git add *.jpeg

# Commit the changes with a custom message
git commit -m "Transfer from obsidian vault at $today"
