# SplitLocation

A collapsible card for a single location within a split. The header is
always visible and toggles the collapsed content. The content is only
rendered when the location has a map; locations without one show no
expanded content. Selecting a trainer marker on the map surfaces its
battle details in a battle card alongside the map.

## Props

| Prop       | Type       | Required | Default | Description                                            |
| ---------- | ---------- | -------- | ------- | ------------------------------------------------------ |
| `location` | `Location` | Yes      | -       | The location this card displays                        |
| `variant`  | `string`   | Yes      | -       | The sprite variant to prefer, matching the game's slug |

## State

| State            | Type      | Initial value | Description                                      |
| ---------------- | --------- | ------------- | ------------------------------------------------ |
| `isOpen`         | `boolean` | `false`       | Whether the location's content is expanded       |
| `selectedBattle` | `Battle`  | `undefined`   | The battle currently selected on the map, if any |

## Handlers

- **On header click** — toggles `isOpen`
- **On trainer marker click** — selects that battle, or deselects it if
  already selected
