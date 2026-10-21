# AGENTS.md

## Project overview

Schemantic — engine-agnostic schemas for TypeScript: fields, attributes and behaviors.
The core has no validation engine; adapters plug one in (TypeBox first).
Monorepo, packages in `packages/`: `core`, `typebox`, `config`, `protoc-gen`.

## Setup and commands

- Install: `bun install`
- Lint: `bunx biome ci .`
- Typecheck: `bun run typecheck`
- Tests: `bun test`, `bun run test:node`, `bun run test:types`
- Build: `bun run build`

## Code style

- TypeScript only, ESM only
- TSDoc on every public export
- Max nesting 2, max 4 params, no nested ternaries
- Details: docs/contributing/

## Testing

- Tests live in packages/<name>/tests/ and mirror src/
- Run `bun test` and `bun run test:types` before committing

## Commits and PRs

- Conventional Commits: `<type>(<scope>): <summary>`
- PR title becomes the squash commit in main

## Security

- Never commit secrets; report vulnerabilities privately, see SECURITY.md
