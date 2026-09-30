## Commands

```bash
npm run dev        # Start dev server (localhost:3000)
npm run build      # Production build
npm run lint       # Run ESLint
npm run format     # Run Prettier
```

Code generators (TypeScript, run via `tsx` from project root):

```bash
npm run gen:component   # Scaffold a new React component
npm run gen:icon        # Scaffold a new icon component
npm run gen:class       # Scaffold a new utility class
```

Data checks and the split audit (see `split-audit.md`):

```bash
npm run check:data                          # validate every game's data
npm run audit:sheet -- <Game> [count]       # next locations to audit
npm run audit:apply -- <Game> <answers>     # apply a filled-in sheet
npm run audit:trim-sheet -- <Game>          # next split's locations to trim
npm run audit:trim-apply -- <Game> <file>   # apply a trim (remove/move/done)
```

Pre-commit hooks via Husky/lint-staged automatically run ESLint, Prettier, and Stylelint on staged files.
