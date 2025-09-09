#!/usr/bin/env python3
"""
Link checker for Markdown files in a digital garden.
Finds all internal markdown links and checks if the referenced files exist.
"""

import os
import re
import sys
from pathlib import Path
from urllib.parse import unquote
import argparse

def find_markdown_files(content_dir):
    """Find all markdown files in the content directory."""
    content_path = Path(content_dir)
    return list(content_path.glob("**/*.md"))

def extract_links(file_path):
    """Extract all markdown links from a file."""
    links = []
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Find markdown links [text](link) - but not image links ![text](link)
        markdown_links = re.findall(r'(?<!\!)\[([^\]]*)\]\(([^\)]+)\)', content)
        
        # Find HTML links href="link" 
        html_links = re.findall(r'href="([^"]+)"', content)
        
        # Process markdown links
        for text, link in markdown_links:
            if (not link.startswith(('http://', 'https://', 'mailto:', '#')) and 
                len(link) < 300):  # Skip extremely long links
                links.append({
                    'text': text,
                    'link': link,
                    'type': 'markdown'
                })
        
        # Process HTML links  
        for link in html_links:
            if (not link.startswith(('http://', 'https://', 'mailto:', '#')) and 
                len(link) < 300):  # Skip extremely long links
                links.append({
                    'text': '',
                    'link': link,
                    'type': 'html'
                })
                
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        
    return links

def resolve_link_path(source_file, link, content_dir):
    """Resolve the actual file path for a link."""
    # URL decode the link
    link = unquote(link)
    
    # Remove any query parameters or anchors
    link = link.split('?')[0].split('#')[0]
    
    source_dir = source_file.parent
    content_path = Path(content_dir)
    
    if link.startswith('/'):
        # Absolute link from content root
        target_path = content_path / link.lstrip('/')
    elif link.startswith('../'):
        # Relative link going up
        target_path = source_dir / link
    else:
        # Relative link in same or child directory
        target_path = source_dir / link
        
    # Resolve to absolute path
    try:
        target_path = target_path.resolve()
    except:
        return None
        
    return target_path

def check_link_exists(target_path):
    """Check if a target file or directory exists."""
    if not target_path:
        return False
        
    # Skip paths that are obviously too long (likely malformed)
    if len(str(target_path)) > 500:
        return False
        
    try:
        # Check if exact path exists
        if target_path.exists():
            return True
            
        # If it's a .md file that doesn't exist, maybe it's a directory
        if target_path.suffix == '.md':
            dir_path = target_path.parent / target_path.stem
            if dir_path.exists() and dir_path.is_dir():
                return True
                
        # If it doesn't end with .md, try adding .md
        if not target_path.suffix:
            md_path = target_path.with_suffix('.md')
            if md_path.exists():
                return True
                
    except (OSError, ValueError):
        # Handle filesystem errors (like filename too long)
        return False
            
    return False

def main():
    parser = argparse.ArgumentParser(description='Check internal links in markdown files')
    parser.add_argument('--content-dir', default='content', help='Content directory path')
    parser.add_argument('--verbose', '-v', action='store_true', help='Verbose output')
    args = parser.parse_args()
    
    content_dir = args.content_dir
    if not os.path.exists(content_dir):
        print(f"Error: Content directory '{content_dir}' does not exist")
        sys.exit(1)
        
    print(f"🔍 Checking internal links in {content_dir}/")
    print("=" * 60)
    
    markdown_files = find_markdown_files(content_dir)
    print(f"Found {len(markdown_files)} markdown files")
    
    broken_links = []
    total_links = 0
    
    for md_file in markdown_files:
        if args.verbose:
            print(f"\n📄 Checking {md_file.relative_to(Path(content_dir))}")
            
        links = extract_links(md_file)
        
        for link_info in links:
            total_links += 1
            link = link_info['link']
            
            target_path = resolve_link_path(md_file, link, content_dir)
            
            if not check_link_exists(target_path):
                broken_links.append({
                    'source_file': md_file.relative_to(Path(content_dir)),
                    'link_text': link_info['text'],
                    'link': link,
                    'type': link_info['type'],
                    'resolved_path': target_path
                })
                
                if args.verbose:
                    print(f"  ❌ BROKEN: [{link_info['text']}]({link})")
            elif args.verbose:
                print(f"  ✅ OK: [{link_info['text']}]({link})")
    
    print("\n" + "=" * 60)
    print(f"📊 SUMMARY:")
    print(f"Total internal links checked: {total_links}")
    print(f"Broken links found: {len(broken_links)}")
    
    if broken_links:
        print(f"\n💥 BROKEN LINKS:")
        print("-" * 60)
        
        for broken in broken_links:
            print(f"📄 File: {broken['source_file']}")
            print(f"🔗 Link: {broken['link']}")
            if broken['link_text']:
                print(f"📝 Text: {broken['link_text']}")
            print(f"🎯 Type: {broken['type']}")
            if broken['resolved_path']:
                print(f"📍 Resolved to: {broken['resolved_path']}")
            print("-" * 60)
            
        sys.exit(1)
    else:
        print("🎉 All internal links are working!")
        sys.exit(0)

if __name__ == "__main__":
    main()