# EvolveModal

A confirmation modal for evolving a caught Pokemon. Always presents its possible evolutions as a row of centered sprites; when there's more than one, the user picks which to evolve into before confirming.

## Props

| Prop          | Type                        | Required | Default | Description                                                                        |
| ------------- | --------------------------- | -------- | ------- | ---------------------------------------------------------------------------------- |
| `accentColor` | `string`                    | Yes      |         | Game accent color applied to the modal (not inherited through the portal boundary) |
| `evolutions`  | `EvolutionStep[]`           | Yes      |         | The evolutions the Pokemon can become                                              |
| `onClose`     | `() => void`                | Yes      |         | Called when the modal is dismissed without confirming                              |
| `onConfirm`   | `(newName: string) => void` | Yes      |         | Called with the chosen evolution's species slug when confirmed                     |
| `pokemonName` | `string`                    | Yes      |         | The Pokemon's current species name                                                 |
| `variant`     | `string`                    | Yes      |         | Game slug used to resolve species sprites                                          |

## State

| State      | Type                  | Initial value                                                          | Description                               |
| ---------- | --------------------- | ---------------------------------------------------------------------- | ----------------------------------------- |
| `selected` | `string \| undefined` | The single evolution's name if there's only one, otherwise `undefined` | The evolution currently chosen to confirm |

## Computations

- `displayName` — title-cased display name of the Pokemon's current species, used in the modal title
