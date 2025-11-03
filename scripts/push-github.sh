#!/bin/bash

# Get current date in yy-mm-dd format
current_date=$(date +"%y-%m-%d")

# Stage all changes
git add .

# Commit with the specified message format
git commit -m "updating content, $current_date"

# Push changes to remote repository
git push