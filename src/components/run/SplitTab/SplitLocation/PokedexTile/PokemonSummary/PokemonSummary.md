# PokemonSummary

The Pokédex tile's top section for a single Pokémon, split into a
left half showing its sprite, name, and type badges, and a right half
divided into an upper section (two-thirds height) listing its
abilities via `AbilitiesList` and a lower section (one-third height)
showing its catch rate. If no Pokémon is selected, `placeholder` is
shown instead. When `catchRateChanged` is set, the catch rate's label
and value are colored pink instead of their normal colors, to flag a
value that diverges from vanilla for a game whose data is a
vanilla-plus-overrides diff.

## Props

| Prop               | Type                     | Required | Default | Description                                                                    |
| ------------------ | ------------------------ | -------- | ------- | ------------------------------------------------------------------------------ |
| `abilityEntries`   | `AbilityEntry[]`         | Yes      | -       | The selected Pokémon's abilities, passed to `AbilitiesList`                    |
| `catchRate`        | `number`                 | No       | -       | The selected Pokémon's catch rate; the catch rate section is hidden when unset |
| `catchRateChanged` | `boolean`                | No       | -       | Whether `catchRate` differs from vanilla; highlights it in pink when true      |
| `interactive`      | `boolean`                | Yes      | -       | Forwarded to `AbilitiesList`, controlling whether its entries are clickable    |
| `onSelectAbility`  | `(slug: string) => void` | Yes      | -       | Forwarded to `AbilitiesList`, called when an ability is clicked                |
| `placeholder`      | `string`                 | No       | -       | The message shown in place of the summary when no Pokémon is selected          |
| `pokemon`          | `PokemonData`            | No       | -       | The selected Pokémon's data; when unset, `placeholder` is shown instead        |
| `sprite`           | `string`                 | No       | -       | The selected Pokémon's sprite, matching the game's sprite variant              |
| `types`            | `string[]`               | Yes      | -       | The selected Pokémon's types, rendered as badges beneath its name              |
