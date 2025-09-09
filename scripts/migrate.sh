
#!/bin/bash

SOURCE_DIR="$HOME/Dropbox/Emil/Personal"
TARGET_DIR="content"

echo "🔄 Starting migration from Obsidian to Digital Garden..."

# Backup the current index.md file to preserve our custom card layout
INDEX_BACKUP="/tmp/index.md.backup"
if [ -f "$TARGET_DIR/index.md" ]; then
    echo "📋 Backing up current index.md..."
    cp "$TARGET_DIR/index.md" "$INDEX_BACKUP"
fi

# Remove all files and directories in the target directory EXCEPT index.md
echo "🗑️  Removing old content (preserving index.md)..."
find "${TARGET_DIR}" -mindepth 1 -maxdepth 1 ! -name 'index.md' -exec rm -rf {} +

# Copy all files and directories from the source to the target
echo "📂 Copying files from Obsidian vault..."
cp -a "$SOURCE_DIR"/* content/

# Remove any conflicted copy files
echo "🧹 Cleaning up conflicted copies..."
find "$TARGET_DIR" -type f -name '*conflicted copy*' -exec rm -f {} +

# Restore the backed up index.md if it exists
if [ -f "$INDEX_BACKUP" ]; then
    echo "📋 Restoring custom index.md..."
    cp "$INDEX_BACKUP" "$TARGET_DIR/index.md"
    rm "$INDEX_BACKUP"
    echo "✅ Custom index.md preserved!"
else
    echo "⚠️  No index.md backup found to restore"
fi

echo "✅ Migration completed! All files from '$SOURCE_DIR' have been synced to '$TARGET_DIR'."
echo "🎯 Your custom index.md with card layout has been preserved."
