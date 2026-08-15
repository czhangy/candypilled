export enum EncounterMethod {
    Binoculars = 'binoculars',
    Cave = 'cave',
    Egg = 'egg',
    FeebasTile = 'feebas-tile',
    Fossil = 'fossil',
    Gift = 'gift',
    GoodRod = 'good-rod',
    Grass = 'grass',
    HoneyTree = 'honey-tree',
    OldRod = 'old-rod',
    Starter = 'starter',
    Static = 'static',
    Surf = 'surf',
    Trade = 'trade',
    Walking = 'walking',
}

export enum AiFlag {
    Basic = 'Basic',
    DamagePriority = 'Damage Priority',
    EvaluateAttack = 'Evaluate Attack',
    Expert = 'Expert',
    Risk = 'Risk',
    Status = 'Status',
}

export enum BattleMetadata {
    BackToBack = 'Back To Back',
    Boss = 'Boss',
    Double = 'Double',
    Gauntlet = 'Gauntlet',
    Miniboss = 'Miniboss',
    Optional = 'Optional',
    Tag = 'Tag',
    TrueDouble = 'True Double',
}

export enum MapAnchor {
    Bottom = 'Bottom',
    BottomLeft = 'Bottom Left',
    BottomRight = 'Bottom Right',
    Center = 'Center',
    Left = 'Left',
    Right = 'Right',
    Top = 'Top',
    TopLeft = 'Top Left',
    TopRight = 'Top Right',
}

export enum FieldCondition {
    // Fog that can't be cleared with Defog, as opposed to Fog — they share
    // an icon, but only Fog gets the tooltip noting it's removable.
    DeepFog = 'Deep Fog',
    Fog = 'Fog',
    Hail = 'Hail',
    Rain = 'Rain',
    Sandstorm = 'Sandstorm',
    Sun = 'Sun',
}

export enum PokemonStatus {
    Alive = 'Alive',
    Dead = 'Dead',
}

export enum PokemonType {
    Bug = 'bug',
    Dark = 'dark',
    Dragon = 'dragon',
    Electric = 'electric',
    Fairy = 'fairy',
    Fighting = 'fighting',
    Fire = 'fire',
    Flying = 'flying',
    Ghost = 'ghost',
    Grass = 'grass',
    Ground = 'ground',
    Ice = 'ice',
    Normal = 'normal',
    Poison = 'poison',
    Psychic = 'psychic',
    Rock = 'rock',
    Steel = 'steel',
    Water = 'water',
}

export enum Nature {
    Adamant = 'Adamant',
    Bashful = 'Bashful',
    Bold = 'Bold',
    Brave = 'Brave',
    Calm = 'Calm',
    Careful = 'Careful',
    Docile = 'Docile',
    Gentle = 'Gentle',
    Hardy = 'Hardy',
    Hasty = 'Hasty',
    Impish = 'Impish',
    Jolly = 'Jolly',
    Lax = 'Lax',
    Lonely = 'Lonely',
    Mild = 'Mild',
    Modest = 'Modest',
    Naive = 'Naive',
    Naughty = 'Naughty',
    Quiet = 'Quiet',
    Quirky = 'Quirky',
    Rash = 'Rash',
    Relaxed = 'Relaxed',
    Sassy = 'Sassy',
    Serious = 'Serious',
    Timid = 'Timid',
    // Assigned to Pokémon (e.g. starters) whose actual nature hasn't been
    // determined yet.
    Unknown = 'Unknown',
}

export enum GrowthRate {
    Erratic = 'erratic',
    Fast = 'fast',
    Fluctuating = 'fluctuating',
    MediumFast = 'medium-fast',
    MediumSlow = 'medium-slow',
    Slow = 'slow',
}
