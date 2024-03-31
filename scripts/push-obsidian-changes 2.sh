#!/bin/bash

# directory is above scripts
# relative to the directory of this script
cd "$(dirname "$0")"/..

"./scripts/migrate.sh" -y
"./scripts/commit-obsidian.sh"