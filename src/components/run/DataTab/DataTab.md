# DataTab

Groups the Pokédex, Moves, and Abilities reference views under a single
tab, switched via a row of buttons rather than the shared `Tabs`
component.

## Props

| Prop                  | Type                         | Required | Default | Description                                                           |
| --------------------- | ---------------------------- | -------- | ------- | --------------------------------------------------------------------- |
| `activeSubtab`        | `string`                     | Yes      | -       | The currently selected subtab id (`pokedex`, `moves`, or `abilities`) |
| `game`                | `Game`                       | Yes      | -       | The game to resolve species, moves, and abilities from                |
| `onSelectAbility`     | `(name: string) => void`     | Yes      | -       | Called when an ability is selected from the Abilities subtab's list   |
| `onSelectAbilityLink` | `(name: string) => void`     | Yes      | -       | Called when an ability is clicked from within the Pokédex subtab      |
| `onSelectLocation`    | `(location: string) => void` | Yes      | -       | Forwarded to the Pokédex subtab, called when a location is clicked    |
| `onSelectMove`        | `(name: string) => void`     | Yes      | -       | Called when a move is selected from the Moves subtab's list           |
| `onSelectMoveLink`    | `(name: string) => void`     | Yes      | -       | Called when a move is clicked from within the Pokédex subtab          |
| `onSelectSpecies`     | `(species: string) => void`  | Yes      | -       | Forwarded to the Pokédex subtab, called when a Pokémon is selected    |
| `onSubtabChange`      | `(id: string) => void`       | Yes      | -       | Called when a subtab button is clicked                                |
| `run`                 | `Run`                        | Yes      | -       | The active run, forwarded to the Pokédex subtab                       |
| `selectedAbility`     | `string`                     | No       | -       | The currently selected ability, if any                                |
| `selectedMove`        | `string`                     | No       | -       | The currently selected move, if any                                   |
| `selectedSpecies`     | `string`                     | No       | -       | The currently selected Pokémon's species, if any                      |

## SCSS Variable Dependencies

- `--accent-color` — used as the active subtab button's background and
  border, and the inactive subtab button's border on hover
- `--button-text-color` — used as the active subtab button's text color,
  falling back to `$background` when unset
