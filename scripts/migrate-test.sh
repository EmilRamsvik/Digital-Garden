#!/bin/bash

# Test script to verify migration logic without actually migrating
# This creates a test environment to verify the index.md preservation works

echo "🧪 Testing migration script logic..."

# Create a temporary test environment
TEST_DIR="/tmp/digital-garden-test"
TEST_SOURCE="$TEST_DIR/source"
TEST_TARGET="$TEST_DIR/target"

# Clean up any existing test directory
rm -rf "$TEST_DIR"

# Create test directories
mkdir -p "$TEST_SOURCE" "$TEST_TARGET"

echo "📁 Setting up test environment..."

# Create some test source files
echo "# Test File 1" > "$TEST_SOURCE/file1.md"
echo "# Test File 2" > "$TEST_SOURCE/file2.md"
mkdir -p "$TEST_SOURCE/subfolder"
echo "# Subfolder File" > "$TEST_SOURCE/subfolder/subfile.md"
echo "# Source Index" > "$TEST_SOURCE/index.md"

# Create test target with our custom index.md
echo "# Target File" > "$TEST_TARGET/existing.md"
echo "# Custom Index with Cards" > "$TEST_TARGET/index.md"
echo "<div class=\"card-grid\">" >> "$TEST_TARGET/index.md"

echo "📋 Original target index.md content:"
cat "$TEST_TARGET/index.md"

echo -e "\n🔄 Running migration logic..."

# Apply the same logic as the migration script
INDEX_BACKUP="/tmp/test-index.md.backup"

# Backup current index.md
if [ -f "$TEST_TARGET/index.md" ]; then
    echo "📋 Backing up current index.md..."
    cp "$TEST_TARGET/index.md" "$INDEX_BACKUP"
fi

# Remove all files except index.md
echo "🗑️  Removing old content (preserving index.md)..."
find "$TEST_TARGET" -mindepth 1 -maxdepth 1 ! -name 'index.md' -exec rm -rf {} +

# Copy source files
echo "📂 Copying source files..."
cp -a "$TEST_SOURCE"/* "$TEST_TARGET/"

# Restore backed up index.md
if [ -f "$INDEX_BACKUP" ]; then
    echo "📋 Restoring custom index.md..."
    cp "$INDEX_BACKUP" "$TEST_TARGET/index.md"
    rm "$INDEX_BACKUP"
    echo "✅ Custom index.md preserved!"
fi

echo -e "\n📋 Final target index.md content:"
cat "$TEST_TARGET/index.md"

echo -e "\n📁 Final directory structure:"
find "$TEST_TARGET" -type f | sort

# Verify the test
if grep -q "Custom Index with Cards" "$TEST_TARGET/index.md"; then
    echo -e "\n✅ TEST PASSED: Custom index.md was preserved!"
    echo "✅ Migration logic works correctly"
else
    echo -e "\n❌ TEST FAILED: Custom index.md was not preserved!"
    exit 1
fi

# Clean up
rm -rf "$TEST_DIR"
echo "🧹 Test environment cleaned up"