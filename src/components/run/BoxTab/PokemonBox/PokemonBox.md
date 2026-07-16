# PokemonBox

A grid of every Pokemon caught during the current run, showing each one's
sprite. Clicking a slot selects that Pokemon.

## Props

| Prop              | Type                         | Required | Default | Description                                                   |
| ----------------- | ---------------------------- | -------- | ------- | ------------------------------------------------------------- |
| `caughtPokemon`   | `CaughtPokemon[]`            | Yes      | -       | The Pokemon caught during the run, one per box slot           |
| `onSelectPokemon` | `(location: string) => void` | Yes      | -       | Called with a Pokemon's location when its slot is clicked     |
| `selectedPokemon` | `string`                     | No       | -       | The location of the currently selected caught Pokemon, if any |
| `variant`         | `string`                     | Yes      | -       | The game slug used to resolve each Pokemon's sprite art       |
