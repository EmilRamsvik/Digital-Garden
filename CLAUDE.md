# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a digital garden built with Quartz 4, a static site generator that transforms Markdown files into a searchable web garden. The site is deployed to https://www.tinyknowledge.com and contains extensive personal knowledge notes covering topics from AI/ML, programming, books, recipes, travel, and more.

## Architecture

### Core Structure
- **`content/`**: All Markdown content files organized by topic (AI, Books, Programming, etc.)
- **`quartz/`**: Core Quartz framework files including components, plugins, and build system
- **`scripts/`**: Automation scripts for content migration and publishing
- **`public/`**: Generated static site files

### Content Management Workflow
The content originates from an Obsidian vault and follows this workflow:
1. `scripts/migrate.sh` - Copies content from `$HOME/Dropbox/Emil/Personal` to `content/`, removing conflicted copies
2. `scripts/push-obsidian-changes.sh` - Adds content changes, commits with date format "Updated content: yy/mm/dd", and pushes to git

### Quartz Configuration
- **Site**: Configured for https://www.tinyknowledge.com with ocean-themed colors
- **Features**: SPA enabled, popovers, Plausible analytics, Git-based timestamps
- **Plugins**: Full Obsidian and GitHub Flavored Markdown support, LaTeX rendering, table of contents
- **Ignore Patterns**: `["private", "templates", ".obsidian"]`

## Common Commands

### Development
```bash
# Build and serve locally
npm run docs

# Check TypeScript and formatting
npm run check

# Format code
npm run format

# Run tests
npm run test

# Build site
npx quartz build

# Serve built site
npx quartz serve
```

### Content Management
```bash
# Migrate content from Obsidian vault
./scripts/migrate.sh

# Publish content changes (migrate + commit + push)
./scripts/push-obsidian-changes.sh
```

## Key Technical Details

### Package Management
- Requires Node.js >=22 and npm >=10.9.2
- Uses Quartz 4.5.1 as the core static site generator

### Content Processing
- Supports Obsidian-style wikilinks and markdown extensions
- LaTeX math rendering via KaTeX
- Syntax highlighting with GitHub themes
- Automatic backlinks and graph visualization

### Deployment
- Configured for Vercel deployment (vercel.json present)
- Dockerfile available for containerized builds
- Static assets and search index generated during build

## Content Organization

The `content/` directory follows a hierarchical topic-based structure:
- **AI/**: Machine learning, data science, language models
- **Books/**: Book reviews organized by category, reading lists
- **Programming/**: Languages, frameworks, tools
- **Working/**: Career, management, consulting
- And many more specialized topic areas

Each topic area maintains its own index file and subdirectory structure for better organization and navigation.