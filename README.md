# Digital Garden

Personal digital garden published at [tinyknowledge.com](https://www.tinyknowledge.com), built with a vendored copy of [Quartz 4](https://quartz.jzhao.xyz) (v4.5.1). Notes live in `content/` and are synced one-way from an Obsidian vault; the site deploys via Vercel on push to `main`.

## Prerequisites

- Node.js 22 (see `.nvmrc`)
- npm >= 10.9.2
- Python 3 (only for the link-checker scripts)

## Setup

```bash
npm ci
```

## Commands

| Command                                                | What it does                                            |
| ------------------------------------------------------ | ------------------------------------------------------- |
| `npm run dev`                                          | Build and serve locally at http://localhost:8080        |
| `npm run build`                                        | Production build into `public/`                         |
| `npm run check`                                        | Typecheck (`tsc --noEmit`) + Prettier check (code only) |
| `npm run format`                                       | Format code with Prettier (`content/` is excluded)      |
| `npm test`                                             | Run the Quartz framework tests                          |
| `python3 scripts/check-links.py --content-dir content` | Check internal markdown links                           |

## Content workflow (owner's machine only)

Notes are authored in an Obsidian vault (`$HOME/Dropbox/Emil/Personal`) and synced into `content/`:

1. `./scripts/migrate.sh` — wipes `content/` (preserving `index.md`) and copies the vault in. Refuses to run if the vault path doesn't exist.
2. `./scripts/push.sh` — stages `content/`, commits, and pushes to `main`.
3. Vercel builds and deploys automatically.

Optional: `./scripts/install-git-hooks.sh` installs a pre-commit hook that blocks commits with broken internal links.

## Configuration

- `quartz.config.ts` — site URL, theme, plugins
- `quartz.layout.ts` — page layout and components
- `quartz/` — vendored Quartz framework source (avoid editing; complicates upstream upgrades)

## For AI agents

See [CLAUDE.md](CLAUDE.md) for the agent workflow, repo invariants, and hard rules. Implementation plans live in [docs/plans/](docs/plans/).
