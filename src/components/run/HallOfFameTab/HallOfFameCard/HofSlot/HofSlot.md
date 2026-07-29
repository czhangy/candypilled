# HofSlot

A single team slot within a `HallOfFameCard`, showing a caught Pokémon's
sprite, or a dashed placeholder when empty. Clicking it opens the Pokémon
picker, to assign or replace the slot's Pokémon.

## Props

| Prop      | Type                    | Required | Default | Description                                        |
| --------- | ----------------------- | -------- | ------- | -------------------------------------------------- |
| `pokemon` | `CaughtPokemon \| null` | Yes      | -       | The Pokémon assigned to this slot, if any          |
| `variant` | `string`                | Yes      | -       | Game slug used to resolve the correct sprite style |
| `onClick` | `() => void`            | Yes      | -       | Called when the slot is clicked                    |

## Computations

- `displaySlug` — `pokemon`'s species slug, resolved via
  `PokemonHelpers.getDisplaySlug`; differs from `pokemon.slug` for a species
  with a held-item form change (e.g. Giratina holding the Griseous Orb),
  and feeds both `sprite` and `pokemonName`
