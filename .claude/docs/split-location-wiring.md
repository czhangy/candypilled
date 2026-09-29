## Wiring a location into a split

A `Location` belongs in a `Split`'s `locations` (`src/lib/static/types.ts`) only if the player is **required** to go through it during that split (for example, it has a non-Optional battle, or the story forces them through it). The user curates each split's list by hand. A location that is optional or reference-only is not wired into any split: the Locations tab lists every location in `Game.locations` regardless of split membership.
