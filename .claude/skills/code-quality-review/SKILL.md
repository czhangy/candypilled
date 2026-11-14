---
name: code-quality-review
description: Strict maintainability review of pending changes, then fix every finding directly. Runs automatically before a commit via the pre-commit hook; also use when asked for a code quality review, simplification pass, or cleanup audit.
---

# Code quality review and fix

Review the pending changes for structural quality, then **edit the code to fix every finding**. Preserve behavior while making the implementation smaller, clearer, more direct and easier to maintain. There is no approval step: act on findings without asking.

## Operating mode

- Review AND edit. Never ask whether to fix something. Ask the user only when a fix is truly controversial: it changes observable behavior, a data model or a public contract, deletes a feature, or needs a large cross-module refactor where reasonable people would disagree.
- Never stage, commit or push on your own. Leave edits unstaged unless the user told you to commit; when they did (the pre-commit hook case), re-stage only the already-staged files the review edited, then commit.
- Never run a build or start a dev server. Validate with the checks below.
- Report only high-confidence findings backed by evidence from the surrounding code. Do not invent problems, and do not churn code that is already fine.
- Follow CLAUDE.md and `.claude/docs/*` — they are the standard this review enforces.

## Scope

1. Pending changes: `git diff HEAD` (staged plus unstaged) and any new untracked files that belong to the change. Compare against the branch's merge base with `master` when more context helps.
2. Data-only changes (everything under `src/lib/data/` or `public/`) are exempt from this review. If that is all that changed, stop and say so.
3. Read the full surrounding implementation, callers and types, not only the hunks.

## Workflow

1. Understand the affected behavior, invariants, ownership boundaries and existing canonical helpers (`src/lib/utils/*`, `src/components/common/*`, shared mixins and tokens).
2. Look for a "code-judo" reframing that deletes concepts, branches, flags, wrappers or layers instead of rearranging them.
3. Verify each suspected issue against callers, types and history.
4. Fix every confirmed finding directly, most structural first.
5. Re-run the validation below and fix anything the edits broke.
6. Print the hook's mark command (see the hook's message) so the commit can proceed, then summarize: findings fixed, anything left for the user, and whether any edits were re-staged for the commit.

## Review standards

- **Delete complexity.** Prefer removing moving parts over redistributing them.
- **Reject spaghetti growth.** Scattered feature checks, nullable modes, one-off booleans and special-case branches in shared flows are design problems. Compute repeated or multi-part conditions once as a named value.
- **Protect boundaries.** Logic belongs in the canonical layer (`src/lib/utils` helper class, the owning component). Feature details must not leak through general-purpose APIs.
- **Demand useful abstractions.** Flag thin wrappers, pass-through helpers and generic machinery hiding a simpler concrete model. Extract shared helpers only when a second consumer exists; a single-use constant, type or helper stays in its file.
- **Keep contracts explicit.** Props and params are required unless they must be optional right now. Remove unnecessary nulls, optionals, casts, `any`, `unknown`, silent fallbacks and ad-hoc object shapes. No backwards-compatibility shims unless asked.
- **Reuse canonical helpers.** Replace bespoke near-duplicates of logic the codebase already owns.
- **Control file growth.** A change that pushes a file from under 1,000 lines to over 1,000 is a presumptive decomposition problem.
- **Prefer boring code.** Direct and explicit beats clever. Prioritize readability first, then performance.
- **No dead code.** Delete props, params, state, exports, imports, styles and comments left unused by the change. Comments are at most 250 characters and explain only why.

## Repo conventions to enforce on touched files

- Components: co-located `.tsx` and `.module.scss`; page and domain directory placement per `architecture.md`; a child used by one parent lives inside that parent.
- Definitions live inside the component function in the right section (CONSTANTS, STATE, COMPUTATIONS, RENDERING, HANDLERS, MARKUP). Arrow functions only; handlers named `handle<Subject><Event>`-style per the existing code; callback params explicitly typed. No `setState` in effect bodies.
- Every public export in `src/lib/utils/` has a JSDoc comment.
- SCSS: tokens and mixins instead of raw values; selector nesting mirrors the JSX; base before modifier; hover wrapped in `@media (hover: hover)`; animations respect `prefers-reduced-motion`; no mobile breakpoints. Nesting cannot be lint-checked, so diff it against the JSX manually.
- Inline styles only for runtime-dynamic values.

## Validation after edits

Run on the files you touched, and fix failures:

- `npx eslint --fix <files>` and `npx prettier --write <files>`
- `npx stylelint <scss files>` for SCSS
- `npx tsc --noEmit -p .` (ignore errors inside the generated `.next/` directory)
- `npm run check:data` only if files under `src/lib/data/` were also touched

## Outcome

Do not stop at "it works". Finish only when no qualifying finding remains. If none were found, say so plainly and note any residual risk or validation gap.
