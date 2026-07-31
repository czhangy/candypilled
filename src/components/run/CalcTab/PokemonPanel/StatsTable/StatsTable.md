# StatsTable

The damage calculator's stat spread table (Base/IV/EV/Stage/Total), used by
`PokemonPanel` for both the attacker and defender sides, both fully
editable. IV/EV cells render as editable number inputs; the EV column is
omitted entirely when `hideEvs` is set. The Total column's Speed cell is
highlighted red/blue/gold when `speedComparison` indicates this Pokémon is
faster/slower/tied against the opposing Pokémon, with a matching `Tooltip`
on hover.

## Props

| Prop              | Type                                                                           | Required | Default | Description                                                                    |
| ----------------- | ------------------------------------------------------------------------------ | -------- | ------- | ------------------------------------------------------------------------------ |
| `baseStats`       | `StatValues`                                                                   | No       | -       | The species' base stats                                                        |
| `boosts`          | `Record<Exclude<keyof StatValues, 'hp'>, number>`                              | Yes      | -       | The current stat stage boosts (-6..6), always editable                         |
| `evs`             | `StatValues`                                                                   | Yes      | -       | The current EVs                                                                |
| `hideEvs`         | `boolean`                                                                      | Yes      | -       | Whether to omit the EV column entirely (the global "Hide EVs" setting)         |
| `ivs`             | `StatValues`                                                                   | Yes      | -       | The current IVs                                                                |
| `onBoostChange`   | `(stat: Exclude<keyof StatValues, 'hp'>, value: string) => void`               | Yes      | -       | Called when a stat's stage dropdown changes                                    |
| `onEvChange`      | `(stat: keyof StatValues, event: React.ChangeEvent<HTMLInputElement>) => void` | Yes      | -       | Called when an EV input changes                                                |
| `onIvChange`      | `(stat: keyof StatValues, event: React.ChangeEvent<HTMLInputElement>) => void` | Yes      | -       | Called when an IV input changes                                                |
| `speedComparison` | `SpeedComparison \| undefined`                                                 | Yes      | -       | How this Pokémon's Speed compares to the opponent's, or `undefined` if unknown |
| `totalStats`      | `StatValues`                                                                   | No       | -       | The computed final stats, shown in the Total column                            |

## Computations

- `SPEED_TOOLTIPS` — maps each `SpeedComparison` value to its hover tooltip
  text ("Higher Speed"/"Lower Speed"/"Speed Tie")
