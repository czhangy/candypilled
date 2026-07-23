# HofPage

The `/hof` page: lists every saved Hall of Fame entry across all games,
each labeled by game name and attempt number, with its team shown in
full battle-card detail (sprite, types, held item, ability, nature, and
moves), without any of its links. Redirects to the home page if there
are no saved entries.

## Computations

- `sortedEntries` — every saved Hall of Fame entry, sorted by attempt
  number, most recent first

## Effects

- **On `entries.length` change** — redirects to the home page whenever
  there are no saved Hall of Fame entries
