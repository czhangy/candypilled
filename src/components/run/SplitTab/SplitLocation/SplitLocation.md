# SplitLocation

A collapsible card for a single location within a split. The header is
always visible and toggles the collapsed content. The content is only
rendered when the location has a map or wild encounters; locations with
neither show no expanded content. Selecting a trainer marker on the map
surfaces its battle details in a battle card alongside the map. Defeated
trainers are tracked in the run's storage and reflected on both the map
and the battle card. A location's wild encounters, if any, are shown in
a table below the map and battle card.

## Props

| Prop       | Type       | Required | Default | Description                                            |
| ---------- | ---------- | -------- | ------- | ------------------------------------------------------ |
| `game`     | `Game`     | Yes      | -       | The game the run belongs to, for saving defeat state   |
| `location` | `Location` | Yes      | -       | The location this card displays                        |
| `run`      | `Run`      | Yes      | -       | The run whose defeated battles are shown               |
| `variant`  | `string`   | Yes      | -       | The sprite variant to prefer, matching the game's slug |

## State

| State            | Type      | Initial value | Description                                      |
| ---------------- | --------- | ------------- | ------------------------------------------------ |
| `isOpen`         | `boolean` | `false`       | Whether the location's content is expanded       |
| `selectedBattle` | `Battle`  | `undefined`   | The battle currently selected on the map, if any |

## Computations

- `defeatedBattles` — the run's list of defeated battle (trainer) names
- `nextPersonalBestBattleName` — the next required battle after the run's
  personal best, in split/location/battle order
- `isBattleDefeated` — whether a given battle's name is present in
  `defeatedBattles`
- `isBattleNextPersonalBest` — whether a given battle's name matches
  `nextPersonalBestBattleName`
- `encounters` — the location's wild encounters, looked up from generated
  PokeAPI data via the location's `encountersKey`, if set

## Handlers

- **On header click** — toggles `isOpen`
- **On trainer marker click** — selects that battle, or deselects it if
  already selected
- **On battle toggle defeated** — adds or removes the battle's name from
  the run's defeated battles in storage. Defeating a required (non-optional)
  battle also updates the run's personal best if it is farther along than
  the current one
