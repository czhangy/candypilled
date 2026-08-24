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
    PokeRadar = 'poke-radar',
    Starter = 'starter',
    Static = 'static',
    SuperRod = 'super-rod',
    Surf = 'surf',
    Trade = 'trade',
    Walking = 'walking',
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

// A game's PokeAPI version-group slug (Game.version), used to resolve
// which of a Pokémon's per-version-group learnsets applies. Add a member
// here when onboarding a new game/variant group.
export enum GameVersionGroup {
    DiamondPearl = 'diamond-pearl',
    Platinum = 'platinum',
    HeartGoldSoulSilver = 'heartgold-soulsilver',
    RenegadePlatinum = 'renegade-platinum',
}

// The public/badges/<folder>/ a game's gym-badge icons are served from.
export enum BadgeAssetFolder {
    Sinnoh = 'sinnoh',
}

// The public/trainers/<folder>/ a game's trainer battle sprites are served
// from.
export enum TrainerAssetFolder {
    DiamondPearl = 'diamond-pearl',
    Platinum = 'platinum',
}
