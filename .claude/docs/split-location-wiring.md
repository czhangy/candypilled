## Wiring a location into a split

A `Location` belongs in a `Split` (`src/lib/static/types.ts`) if the player enters that location during that split **and does something significant there** — an encounter, a battle, a story event, etc. A location the player merely passes through with nothing to do there is not wired into that split.

**Battles that are inaccessible, or that were necessarily already fought at an earlier point, are hidden rather than omitted** — set `hideBattles: true` on the `Location` (or the specific `Subarea`) rather than leaving the location out of the split or deleting its `battles` array. This keeps the location's map/encounters visible while suppressing battle markers that don't apply to this pass through it.

**Subarea order**: within a `Location`'s `subareas` array, order subareas by relevance to the split currently being wired — the subarea most relevant to what the player is doing in this split comes first, not necessarily the subarea's in-game/geographic order.
