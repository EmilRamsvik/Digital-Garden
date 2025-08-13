
SOURCE_DIR="$HOME/Dropbox/Emil/Personal"
TARGET_DIR="content"

# Remove all files and directories in the target directory
rm -rf "${TARGET_DIR:?}/"*

# Copy all files and directories from the source to the target
cp -a "$SOURCE_DIR"/* content/

find "$TARGET_DIR" -type f -name '*conflicted copy*' -exec rm -f {} +

echo "All files from '$SOURCE_DIR' have replaced the contents of '$TARGET_DIR'."
