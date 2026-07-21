# PokemonPickerModal

A modal listing a run's available caught Pokémon as sprite tiles, for
assigning one to a Hall of Fame team slot.

## Props

| Prop       | Type                               | Required | Default | Description                                        |
| ---------- | ---------------------------------- | -------- | ------- | -------------------------------------------------- |
| `pokemon`  | `CaughtPokemon[]`                  | Yes      | -       | The Pokémon available to choose from               |
| `variant`  | `string`                           | Yes      | -       | Game slug used to resolve the correct sprite style |
| `onSelect` | `(pokemon: CaughtPokemon) => void` | Yes      | -       | Called with the chosen Pokémon                     |
| `onClose`  | `() => void`                       | Yes      | -       | Called when the modal is dismissed                 |
