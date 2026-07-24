# MoveDamageColumn

A column listing an attacking Pokémon's moves, each paired with the min/max
damage percentage it would deal to the opposing Pokémon. Used twice by
`DamageResultsPanel`, once per side of the exchange.

## Props

| Prop         | Type                       | Required | Default | Description                                                         |
| ------------ | -------------------------- | -------- | ------- | ------------------------------------------------------------------- |
| `attacker`   | `CalcPokemonInput \| null` | Yes      | -       | The attacking Pokémon's calculator details, or `null` if incomplete |
| `defender`   | `CalcPokemonInput \| null` | Yes      | -       | The defending Pokémon's calculator details, or `null` if incomplete |
| `generation` | `number`                   | Yes      | -       | The generation to calculate against                                 |
| `moveNames`  | `string[]`                 | Yes      | -       | The attacker's move slots (empty slots are skipped)                 |

## Computations

- `moves` — `moveNames` with empty slots filtered out
- Each row's percentage range comes from
  `DamageCalcHelpers.getDamagePercentRange`, showing `-` when `attacker`/
  `defender` is `null` or the calculation can't resolve
