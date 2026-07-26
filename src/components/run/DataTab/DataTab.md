# DataTab

Groups the Pokédex, Moves, Abilities, and Items reference views under a
single tab, switched via a row of buttons rather than the shared `Tabs`
component.

## Props

| Prop                  | Type                         | Required | Default | Description                                                                    |
| --------------------- | ---------------------------- | -------- | ------- | ------------------------------------------------------------------------------ |
| `activeSubtab`        | `string`                     | Yes      | -       | The currently selected subtab id (`pokedex`, `moves`, `abilities`, or `items`) |
| `game`                | `Game`                       | Yes      | -       | The game to resolve species, moves, abilities, and items from                  |
| `onSelectAbility`     | `(slug: string) => void`     | Yes      | -       | Called when an ability is selected from the Abilities subtab's list            |
| `onSelectAbilityLink` | `(slug: string) => void`     | Yes      | -       | Called when an ability is clicked from within the Pokédex subtab               |
| `onSelectItem`        | `(slug: string) => void`     | Yes      | -       | Called when an item is selected from the Items subtab's list                   |
| `onSelectLocation`    | `(location: string) => void` | Yes      | -       | Forwarded to the Pokédex subtab, called when a location is clicked             |
| `onSelectMove`        | `(slug: string) => void`     | Yes      | -       | Called when a move is selected from the Moves subtab's list                    |
| `onSelectMoveLink`    | `(slug: string) => void`     | Yes      | -       | Called when a move is clicked from within the Pokédex subtab                   |
| `onSelectSpecies`     | `(species: string) => void`  | Yes      | -       | Forwarded to the Pokédex subtab, called when a Pokémon is selected             |
| `onSubtabChange`      | `(id: string) => void`       | Yes      | -       | Called when a subtab button is clicked                                         |
| `run`                 | `Run`                        | Yes      | -       | The active run, forwarded to the Pokédex subtab                                |
| `selectedAbility`     | `string`                     | No       | -       | The currently selected ability's slug, if any                                  |
| `selectedItem`        | `string`                     | No       | -       | The currently selected item's slug, if any                                     |
| `selectedMove`        | `string`                     | No       | -       | The currently selected move's slug, if any                                     |
| `selectedSpecies`     | `string`                     | No       | -       | The currently selected Pokémon's species, if any                               |

## SCSS Variable Dependencies

- `--accent-color` — used as the active subtab button's background and
  border, and the inactive subtab button's border on hover
- `--button-text-color` — used as the active subtab button's text color,
  falling back to `$background` when unset
