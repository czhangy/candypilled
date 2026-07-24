# StatsTable

The damage calculator's shared stat spread table (Base/IV/EV/Stage/Total),
used by both `PokemonPanel` and `TrainerPokemonPanel`. IV/EV cells render as
editable number inputs when their respective `onIvChange`/`onEvChange`
callback is provided, otherwise as plain read-only text — letting the
attacker side (fully editable) and defender side (fixed IVs/EVs) share the
same table.

## Props

| Prop            | Type                                                                           | Required | Default | Description                                                                |
| --------------- | ------------------------------------------------------------------------------ | -------- | ------- | -------------------------------------------------------------------------- |
| `baseStats`     | `StatValues`                                                                   | No       | -       | The species' base stats                                                    |
| `boosts`        | `Record<Exclude<keyof StatValues, 'hp'>, number>`                              | Yes      | -       | The current stat stage boosts (-6..6), always editable                     |
| `evs`           | `StatValues`                                                                   | No       | -       | The current EVs                                                            |
| `hideEvs`       | `boolean`                                                                      | Yes      | -       | Whether to omit the EV column entirely (the global "Hide EVs" setting)     |
| `ivs`           | `StatValues`                                                                   | No       | -       | The current IVs                                                            |
| `onBoostChange` | `(stat: Exclude<keyof StatValues, 'hp'>, value: string) => void`               | Yes      | -       | Called when a stat's stage dropdown changes                                |
| `onEvChange`    | `(stat: keyof StatValues, event: React.ChangeEvent<HTMLInputElement>) => void` | No       | -       | Called when an EV input changes; omitting it renders EVs as read-only text |
| `onIvChange`    | `(stat: keyof StatValues, event: React.ChangeEvent<HTMLInputElement>) => void` | No       | -       | Called when an IV input changes; omitting it renders IVs as read-only text |
| `totalStats`    | `StatValues`                                                                   | No       | -       | The computed final stats, shown in the Total column                        |
