# AddPokemonModal

A modal form for recording the details of a Pokemon as it's caught. Thin
wrapper around `Modal` and `PokemonForm`, which does the actual work.

## Props

| Prop             | Type                                                                                                     | Required | Default | Description                                                                         |
| ---------------- | -------------------------------------------------------------------------------------------------------- | -------- | ------- | ----------------------------------------------------------------------------------- |
| `accentColor`    | `string`                                                                                                 | No       | -       | The game's accent color, forwarded to `Modal`                                       |
| `allSpecies`     | `string[]`                                                                                               | Yes      | -       | Every catchable species name, offered in the Pokemon dropdown                       |
| `defaultSpecies` | `string`                                                                                                 | Yes      | -       | The species the Pokemon dropdown defaults to                                        |
| `generation`     | `number`                                                                                                 | Yes      | -       | The game's generation, used to resolve the selected species' abilities and learnset |
| `onClose`        | `() => void`                                                                                             | Yes      | -       | Called when the modal requests to close                                             |
| `onSubmit`       | `(details: Pick<BattlePokemon, 'ability' \| 'ivs' \| 'level' \| 'moves' \| 'name' \| 'nature'>) => void` | Yes      | -       | Called with the selected details when the form is submitted                         |
