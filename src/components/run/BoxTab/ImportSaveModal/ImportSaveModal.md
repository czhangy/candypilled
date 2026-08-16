# ImportSaveModal

A modal wrapping `ImportSaveForm` for uploading a `.sav` file and
merging its party/PC box Pokémon and finished splits into the run.

## Props

| Prop              | Type                                                            | Required | Default | Description                                                                        |
| ----------------- | --------------------------------------------------------------- | -------- | ------- | ---------------------------------------------------------------------------------- |
| `accentColor`     | `string`                                                        | No       | -       | The game's accent color, forwarded to `Modal`                                      |
| `buttonTextColor` | `string`                                                        | No       | -       | The game's button text contrast color, forwarded to `Modal`                        |
| `game`            | `Game`                                                          | Yes      | -       | The current game; forwarded to `ImportSaveForm`                                    |
| `onClose`         | `() => void`                                                    | Yes      | -       | Called when the modal requests to close                                            |
| `onSubmit`        | `(pokemon: CaughtPokemon[], completedSplits: string[]) => void` | Yes      | -       | Called with the parsed Pokémon and completed split names after a successful import |
