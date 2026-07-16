# EvolveModal

A confirmation modal for evolving a caught Pokemon. Always presents its possible evolutions as a row of centered sprites; when there's more than one, the user picks which to evolve into before confirming. An evolution step whose name is ambiguous between multiple forms (e.g. Burmy evolving into Wormadam, whose cloak/form isn't tracked by evolution data) is expanded into one selectable option per form, rather than silently resolving to a single arbitrary form.

## Props

| Prop          | Type                        | Required | Default | Description                                                                         |
| ------------- | --------------------------- | -------- | ------- | ----------------------------------------------------------------------------------- |
| `accentColor` | `string`                    | Yes      |         | Game accent color applied to the modal (not inherited through the portal boundary)  |
| `evolutions`  | `EvolutionStep[]`           | Yes      |         | The evolutions the Pokemon can become                                               |
| `onClose`     | `() => void`                | Yes      |         | Called when the modal is dismissed without confirming                               |
| `onConfirm`   | `(newName: string) => void` | Yes      |         | Called with the chosen evolution's (or specific form's) species slug when confirmed |
| `pokemonName` | `string`                    | Yes      |         | The Pokemon's current species name                                                  |
| `variant`     | `string`                    | Yes      |         | Game slug used to resolve species sprites                                           |

## State

| State      | Type                  | Initial value                                                                            | Description                                    |
| ---------- | --------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------- |
| `selected` | `string \| undefined` | The single resolved form's slug if `formNames` has only one entry, otherwise `undefined` | The evolution/form currently chosen to confirm |

## Computations

- `displayName` — title-cased display name of the Pokemon's current species, used in the modal title
- `formNames` — `evolutions` expanded via `PokemonHelpers.getFormOptions`, resolving each step's name to every matching form key (one, unless the step's name is ambiguous between multiple forms); one selectable option is rendered per entry
