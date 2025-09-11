#!/bin/bash

# Script to install git hooks for the digital garden
# Run this after cloning the repository to set up link checking

REPO_ROOT=$(git rev-parse --show-toplevel 2>/dev/null)

if [ -z "$REPO_ROOT" ]; then
    echo "❌ Error: This script must be run from within a git repository"
    exit 1
fi

echo "🔧 Installing git hooks for Digital Garden..."

# Create the pre-commit hook
HOOK_FILE="$REPO_ROOT/.git/hooks/pre-commit"

cat > "$HOOK_FILE" << 'EOF'
#!/bin/bash

# Git pre-commit hook to check for broken internal links
# This hook runs before each commit and prevents commits if broken links are found

echo "🔍 Checking internal links before commit..."

# Get the repository root directory
REPO_ROOT=$(git rev-parse --show-toplevel)

# Check if the link checker script exists
LINK_CHECKER="$REPO_ROOT/scripts/check-links.py"

if [ ! -f "$LINK_CHECKER" ]; then
    echo "⚠️  Warning: Link checker script not found at $LINK_CHECKER"
    echo "   Skipping link check..."
    exit 0
fi

# Run the link checker on the content directory
cd "$REPO_ROOT"

# Capture the output and exit code
LINK_CHECK_OUTPUT=$(python3 "$LINK_CHECKER" --content-dir content 2>&1)
LINK_CHECK_EXIT=$?

if [ $LINK_CHECK_EXIT -eq 0 ]; then
    echo "✅ All internal links are working!"
    # Extract summary info
    echo "$LINK_CHECK_OUTPUT" | grep -E "(Total internal links checked|Broken links found)"
    echo ""
    exit 0
else
    echo "❌ COMMIT BLOCKED: Broken internal links detected!"
    echo ""
    echo "📊 Summary:"
    echo "$LINK_CHECK_OUTPUT" | grep -E "(Total internal links checked|Broken links found)"
    echo ""
    echo "💥 Broken links found in these files:"
    echo "$LINK_CHECK_OUTPUT" | grep "📄 File:" | sed 's/📄 File: /  • /' | sort -u
    echo ""
    echo "🔧 To see detailed broken link information, run:"
    echo "   python3 scripts/check-links.py --content-dir content"
    echo ""
    echo "💡 To bypass this check (NOT recommended), use:"
    echo "   git commit --no-verify"
    echo ""
    echo "🎯 Please fix the broken links before committing."
    
    exit 1
fi
EOF

# Make the hook executable
chmod +x "$HOOK_FILE"

echo "✅ Pre-commit hook installed successfully!"
echo ""
echo "🎯 The hook will now:"
echo "   • Check all internal links before each commit"
echo "   • Block commits if broken links are found"
echo "   • Show you which files contain broken links"
echo ""
echo "💡 To test the hook, try making a commit:"
echo "   git add ."
echo "   git commit -m \"test commit\""
echo ""
echo "🔧 To disable the hook temporarily:"
echo "   git commit --no-verify"