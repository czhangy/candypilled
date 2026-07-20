# PokemonSummary

The Pokédex tile's top section for a single Pokémon, split into a
left half showing its sprite, name, and type badges, and a right half
divided into an upper section (two-thirds height) listing its
abilities via `AbilitiesList` and a lower section (one-third height)
showing its catch rate. If no Pokémon is selected, `placeholder` is
shown instead.

## Props

| Prop              | Type                     | Required | Default | Description                                                                    |
| ----------------- | ------------------------ | -------- | ------- | ------------------------------------------------------------------------------ |
| `abilityEntries`  | `AbilityEntry[]`         | Yes      | -       | The selected Pokémon's abilities, passed to `AbilitiesList`                    |
| `catchRate`       | `number`                 | No       | -       | The selected Pokémon's catch rate; the catch rate section is hidden when unset |
| `interactive`     | `boolean`                | Yes      | -       | Forwarded to `AbilitiesList`, controlling whether its entries are clickable    |
| `onSelectAbility` | `(name: string) => void` | Yes      | -       | Forwarded to `AbilitiesList`, called when an ability is clicked                |
| `placeholder`     | `string`                 | Yes      | -       | The message shown in place of the summary when no Pokémon is selected          |
| `pokemon`         | `PokemonData`            | No       | -       | The selected Pokémon's data; when unset, `placeholder` is shown instead        |
| `sprite`          | `string`                 | No       | -       | The selected Pokémon's sprite, matching the game's sprite variant              |
| `types`           | `string[]`               | Yes      | -       | The selected Pokémon's types, rendered as badges beneath its name              |
