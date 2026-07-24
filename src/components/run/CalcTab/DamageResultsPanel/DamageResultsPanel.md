# DamageResultsPanel

The damage calculator's results section, shown above the attacker/defender
panels: two `MoveDamageColumn`s side by side — the player's Pokémon's moves
against the trainer's Pokémon on the left, and the trainer's Pokémon's moves
against the player's Pokémon on the right.

## Props

| Prop            | Type                       | Required | Default | Description                                                         |
| --------------- | -------------------------- | -------- | ------- | ------------------------------------------------------------------- |
| `attackerMoves` | `string[]`                 | Yes      | -       | The player's Pokémon's move slots                                   |
| `defenderMoves` | `string[]`                 | Yes      | -       | The trainer's Pokémon's canonical move slots                        |
| `generation`    | `number`                   | Yes      | -       | The generation to calculate against                                 |
| `playerInput`   | `CalcPokemonInput \| null` | Yes      | -       | The player's Pokémon's calculator details, or `null` if incomplete  |
| `trainerInput`  | `CalcPokemonInput \| null` | Yes      | -       | The trainer's Pokémon's calculator details, or `null` if incomplete |
