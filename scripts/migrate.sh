#!/bin/bash

# Define source directory
SRC_DIR="$HOME/Dropbox/Emil"
AUTO_CONFIRM=$1  # Get the first argument


# Determine the root directory of the GitHub repository
# Assuming the script is in <repo-root>/scripts and you run it from there
REPO_ROOT="$(dirname "$PWD")"  # This will move one directory up from 'scripts' to the repo root

# Function to check and copy a directory
copy_directory() {
    local src=$1
    local dest=$2

    echo "Copying $src to $dest..."
    cp -R "$src" "$dest"
    echo "Copy complete."
}
# Check and copy 'blog' folder
copy_directory "$SRC_DIR/Blog/" "$REPO_ROOT/blog/"

# Check and copy 'static/images' folder
copy_directory "$SRC_DIR/static/images/" "$REPO_ROOT/static/images/"

# Check and copy 'personal' folder to 'docs'
copy_directory "$SRC_DIR/Personal/" "$REPO_ROOT/docs/"

        # Perform a dry run with rsync to check changes
        rsync -avun --delete "$src" "$dest"
        if [[ $AUTO_CONFIRM == "-y" ]]; then
            choice="y"
        else
            choice="y"
        fi

        if [[ $choice == [Yy]* ]]; then
            echo "Copying $src to $dest..."
            cp -R "$src" "$dest"
            echo "Copy complete."
        else
            echo "Copy skipped."
        fi

    # Check and copy 'personal' folder to 'docs'
copy_directory "$SRC_DIR/Personal/" "$REPO_ROOT/docs/"

# Check and copy 'blog' folder
copy_directory "$SRC_DIR/Blog/" "$REPO_ROOT/blog/"

# Check and copy 'static/images' folder
copy_directory "$SRC_DIR/static/images/" "$REPO_ROOT/static/images/"
