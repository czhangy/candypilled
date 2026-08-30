## Battle metadata

`BattleMetadata` (`src/lib/static/enums.ts`) is a `metadata: BattleMetadata[]` array on a placed `Battle`. It's purely presentational — driving badges in `TrainerPanel`, the header label in `BattleCard`, and map-marker icon/sizing in `TrainerMarker` — and has no effect on damage calc or battle ordering/filtering.

- **Boss** — Major required story boss (Gym Leader, Elite Four member). "BOSS" badge, "Boss" `BattleCard` header, double-exclamation map marker.
- **Miniboss** — Sub-boss-tier trainer (rival, Team Galactic admin/commander) below Boss but still story-significant. "MINIBOSS" badge, "Miniboss" header and single-exclamation marker (only when Boss isn't also present).
- **Optional** — Avoidable, not required to progress. Auto-applied by the battle generator to anything that's neither Boss/Miniboss nor explicitly `--required`.
- **Choice** — One of a group of trainers where fighting at least one of the group is required, but not all of them (a fork/either-or encounter).
- **Double** — The player sends out 2 Pokémon on their own side against a combined two-trainer opposing side (`BattleData.secondTrainer` holds the second opposing trainer). Renders as "X and Y" and a two-trainer stacked layout in `BattleCard`.
- **TrueDouble** — A double battle where the opposing side is a single team (no `secondTrainer` split), as opposed to `Double`/`Tag` which combine two separate trainers' teams. Takes precedence over the "DOUBLE" badge, and typically pairs with `GEN_4_TRUE_DOUBLE_WIDTH`/`HEIGHT` marker sizing to fit two sprites (e.g. a duo trainer class like Twins, Young Couple, Belle & Pa, whose two Pokémon just happen to live in one team).
- **Tag** — The player has an NPC ally fighting alongside them against a single opposing trainer — `secondTrainer` here is the player's ally, not a second opponent.
- **BackToBack** — Multiple fights fought consecutively with no break in between — not necessarily the same trainer twice. Modeled as multiple `teams` entries with no `condition`, so all are always active and rendered as consecutive stacked rows.
- **Gauntlet** — Part of a consecutive multi-battle sequence with no chance to heal between fights (e.g. Elite Four rooms carry `[Boss, Gauntlet]` together, but the trainer doesn't have to be a Boss).
