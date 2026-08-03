# StatsTable

The damage calculator's stat spread table (Base/IV/EV/Stage/Total), used by
`PokemonPanel` for both the attacker and defender sides, both fully
editable. IV/EV cells render as editable digit-only text inputs; the EV
column is omitted entirely unless `showEvs` is set. The Speed row's label
shows a red rabbit icon or a blue snail icon next to it when
`speedComparison` indicates this Pokémon is faster or slower than the
opposing Pokémon, with a matching `Tooltip` on hover.

## Props

| Prop              | Type                                                                           | Required | Default | Description                                                                    |
| ----------------- | ------------------------------------------------------------------------------ | -------- | ------- | ------------------------------------------------------------------------------ |
| `baseStats`       | `StatValues`                                                                   | No       | -       | The species' base stats                                                        |
| `boosts`          | `Record<Exclude<keyof StatValues, 'hp'>, number>`                              | Yes      | -       | The current stat stage boosts (-6..6), always editable                         |
| `evs`             | `StatValues`                                                                   | Yes      | -       | The current EVs                                                                |
| `ivs`             | `StatValues`                                                                   | Yes      | -       | The current IVs                                                                |
| `onBoostChange`   | `(stat: Exclude<keyof StatValues, 'hp'>, value: string) => void`               | Yes      | -       | Called when a stat's stage dropdown changes                                    |
| `onEvChange`      | `(stat: keyof StatValues, event: React.ChangeEvent<HTMLInputElement>) => void` | Yes      | -       | Called when an EV input changes                                                |
| `onIvChange`      | `(stat: keyof StatValues, event: React.ChangeEvent<HTMLInputElement>) => void` | Yes      | -       | Called when an IV input changes                                                |
| `showEvs`         | `boolean`                                                                      | Yes      | -       | Whether to show the EV column (the global "Use EVs" setting)                   |
| `speedComparison` | `SpeedComparison \| undefined`                                                 | Yes      | -       | How this Pokémon's Speed compares to the opponent's, or `undefined` if unknown |
| `totalStats`      | `StatValues`                                                                   | No       | -       | The computed final stats, shown in the Total column                            |

## Computations

- `SPEED_TOOLTIPS` — maps each `SpeedComparison` value to its hover tooltip
  text ("Higher Speed"/"Lower Speed"/"Speed Tie")
