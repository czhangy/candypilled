# HofPage

The `/hof` page: lists every saved Hall of Fame entry across all games,
each labeled by game name and attempt number, with its team shown via
`HofTeam` in full battle-card detail (sprite, types, held item,
ability, nature, and moves), with its held item and moves editable.
Redirects to the home page if there are no saved entries.

## Computations

- `sortedEntries` — every saved Hall of Fame entry, sorted by attempt
  number, most recent first

## Handlers

- `handleUpdateTeam` — persists an entry's updated team via
  `HallOfFameHelpers.updateEntryTeam`, keyed by the entry's game and
  attempt

## Effects

- **On `entries.length` change** — redirects to the home page whenever
  there are no saved Hall of Fame entries
