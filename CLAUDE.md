# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> Note: If I repeat an instruction more than once, suggest adding it to this file.

> If a code style change is requested multiple times, recommend writing a new ESLint rule in `.eslint-rules/` to enforce the convention automatically, if appropriate.

> Build verification is not necessary for any change.

> Never start a dev server (`npm run dev`) to perform end-to-end verification, especially when implementing or changing API routes. Rely on type-checking, linting, and static review instead. If live/browser verification is genuinely needed, ask the user to run it themselves rather than starting a server directly.

> Never run `git add` / stage changes on your own. Leave changes unstaged and let the user stage and commit them.

> ALWAYS ALWAYS ALWAYS prefer making props or params required. NEVER assume future use cases for making something optional. Only make something optional if it needs to be optional right now.

> Comments can only be a maximum of 250 characters long.

> Never account for backwards compatibility (e.g. old localStorage data missing a newly added field) unless explicitly told to do so.

> A constant, type, or helper used by only one file belongs in that file (module-level for scripts, inside the component function for components per the rule below). Only promote it to a shared location (`constants.ts`, `types.ts`, `src/lib/utils/`) once a second file actually needs it — don't pre-emptively centralize.

@.claude/docs/commands.md

@.claude/docs/architecture.md

@.claude/docs/code-style.md

@.claude/docs/battle-metadata.md
