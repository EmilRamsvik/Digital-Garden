#!/bin/bash
# Quick link check summary script

echo "🔍 Digital Garden Link Health Check"
echo "==================================="

# Run the Python script and capture output
result=$(python3 "$(dirname "$0")/check-links.py" --content-dir content 2>&1)
exit_code=$?

if [ $exit_code -eq 0 ]; then
    echo "✅ All links are working perfectly!"
    echo "$result" | grep -E "(Total internal links checked|Broken links found)"
else
    echo "❌ Found broken links that need attention!"
    echo ""
    echo "$result" | grep -E "(Total internal links checked|Broken links found)"
    echo ""
    echo "📋 Common issues found:"
    echo "$result" | grep "📄 File:" | sed 's/📄 File: /  - /' | head -10
    
    if [ $(echo "$result" | grep -c "📄 File:") -gt 10 ]; then
        echo "  ... and $(( $(echo "$result" | grep -c "📄 File:") - 10 )) more"
    fi
    
    echo ""
    echo "💡 Run './scripts/check-links.py --verbose' for detailed analysis"
fi

echo ""
echo "🏃‍♂️ Quick fixes you can try:"
echo "  1. Update relative path references"
echo "  2. Check for moved/renamed files" 
echo "  3. Remove links to deleted content"
echo "  4. Fix malformed URLs"