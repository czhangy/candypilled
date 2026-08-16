import { StaticImageData } from 'next/image';
import {
    AiFlag,
    BadgeAssetFolder,
    BattleMetadata,
    EncounterMethod,
    FieldCondition,
    GameVersionGroup,
    GrowthRate,
    MapAnchor,
    Nature,
    PokemonStatus,
    TrainerAssetFolder,
} from '@/lib/static/enums';

export type StatValues = {
    atk: number;
    def: number;
    hp: number;
    spa: number;
    spd: number;
    spe: number;
};

// A Pokémon's calculator-relevant details, sufficient to build an
// @smogon/calc Pokemon instance for a damage calculation.
export type CalcPokemonInput = {
    abilityName: string;
    boosts: Partial<Record<Exclude<keyof StatValues, 'hp'>, number>>;
    evs: StatValues;
    gender?: 'male' | 'female';
    heldItem: string;
    ivs: StatValues;
    level: number;
    nature: string;
    species: string;
    status: string;
};

// Every screen/hazard/status @smogon/calc tracks per side of the field.
export type CalcSideConditions = {
    cannonade: boolean;
    isAuroraVeil: boolean;
    isBattery: boolean;
    isFlowerGift: boolean;
    isForesight: boolean;
    isFriendGuard: boolean;
    isHelpingHand: boolean;
    isLightScreen: boolean;
    isPowerSpot: boolean;
    isPowerTrick: boolean;
    isProtected: boolean;
    isReflect: boolean;
    isSaltCured: boolean;
    isSeeded: boolean;
    isSR: boolean;
    isSteelySpirit: boolean;
    isSwitching: boolean;
    isTailwind: boolean;
    spikes: number;
    steelsurge: boolean;
    vinelash: boolean;
    volcalith: boolean;
    wildfire: boolean;
};

// The global (not per-side) conditions @smogon/calc tracks for the field.
export type CalcFieldGlobal = {
    isAuraBreak: boolean;
    isBeadsOfRuin: boolean;
    isCrit: boolean;
    isDarkAura: boolean;
    isFairyAura: boolean;
    isGravity: boolean;
    isMagicRoom: boolean;
    isSwordOfRuin: boolean;
    isTabletsOfRuin: boolean;
    isVesselOfRuin: boolean;
    isWonderRoom: boolean;
    terrain: string;
    weather: string;
};

// The damage calculator's field effects panel state: global conditions plus
// each side's conditions, framed by whose side it is (player vs. trainer)
// rather than by attacker/defender, since which side is attacking flips
// between the two `MoveDamageColumn`s.
export type CalcFieldState = CalcFieldGlobal & {
    playerSide: CalcSideConditions;
    trainerSide: CalcSideConditions;
};

// A `CalcFieldState` resolved to a specific attacker/defender direction,
// ready to build an @smogon/calc Field for one damage calculation.
export type CalcField = CalcFieldGlobal & {
    attackerSide: CalcSideConditions;
    defenderSide: CalcSideConditions;
};

// How a damage calculator Pokémon's Speed stat compares to the opposing
// Pokémon's, used to highlight the faster/slower/tied side in StatsTable.
export type SpeedComparison = 'faster' | 'slower' | 'tie';

export type DropdownOption = {
    label: string;
    value: string;
};

// A stat key affected by nature (all StatValues keys except hp, which
// nature never modifies).
export type NatureGridStat = Exclude<keyof StatValues, 'hp'>;

// A single cell in the nature pivot table rendered on the natures page.
export type NatureGridCell = {
    nature: Nature;
    neutral: boolean;
};

// The increased/decreased stat pair a nature corresponds to in the grid.
// Both fields are the same stat for a neutral nature.
export type NatureStatPair = {
    increased: NatureGridStat;
    decreased: NatureGridStat;
};

// A single global toggle shown on the settings page. `id` is the
// localStorage key it's persisted under (via SettingsHelpers).
export type Setting = {
    id: string;
    title: string;
};

export type BattlePokemon = {
    // The ability's slug, e.g. "overgrow".
    ability: string;
    evs?: StatValues;
    gender?: 'male' | 'female';
    heldItem?: string;
    ivs?: number | StatValues;
    level: number;
    moves?: string[];
    nature?: Nature;
    slug: string;
};

// A trainer class' display name and sprite, keyed by slug in
// TRAINER_CLASSES. Classes fielded by a single named individual (e.g.
// Leader, Commander) get one catalog entry per person rather than a shared
// entry, since their sprite isn't determined by the class alone.
export type TrainerClass = {
    displayName: string;
    spriteSlug: string;
};

// A condition gating whether a BattleTeam applies to the current run. Add a
// new variant here for a new kind of run-dependent team, matching
// SplitSaveCondition's discriminated-union shape.
export type BattleTeamCondition = { type: 'starter'; starter: string };

// One possible roster for a trainer. A team with no condition always
// applies; a team with a condition only applies when that condition is met
// (e.g. matching the run's starter). Every team that survives filtering is
// rendered together — a trainer can have several genuinely independent,
// unconditioned team options (e.g. a randomized roster), and there's no way
// to know from a run alone which one a given playthrough actually has.
export type BattleTeam = {
    condition?: BattleTeamCondition;
    team: BattlePokemon[];
};

// One trainer's own slice of a battle: their TRAINER_CLASSES slug, name, and
// every team that survived condition filtering for the current run. A
// non-tag battle has a single group; a tag battle has one per trainer, in
// trainerClass/secondTrainer order.
export type BattleTeamGroup = {
    items?: BattleItem[];
    name: string;
    teams: BattlePokemon[][];
    trainerClass: string;
};

// A caught Pokémon as tracked for Nuzlocke rule enforcement: one catch per
// location (not subarea), and no more than one catch per evolution line.
export type CaughtPokemon = Omit<BattlePokemon, 'moves'> & {
    location: string;
    moves: string[];
    status: PokemonStatus;
};

// The two views of the box tab's caught Pokémon grid: living Pokémon
// ("box") or dead ones ("graveyard").
export type BoxView = 'alive' | 'dead';

// A save file import's parse failure, keyed by its file name so the user
// can locate which file it came from.
export type SaveImportError = {
    fileName: string;
    message: string;
};

export type BattleItem = {
    count: number;
    name: string;
};

// A Gen IV save's general block contents are game-specific (see
// src/lib/parsers/gen4/gen4-save-layouts.ts for the derivation and per-game
// values), so every offset a Gen4 parser needs is looked up through one of
// these rather than hardcoded.
export type Gen4SaveLayout = {
    generalBlockSize: number;
    storageBlockSize: number;
    partyOffset: number;
    badgeMaskOffset: number;
    mainStoryClearedOffset: number;
};

// The second trainer in a tag battle: a distinct trainer merged into the
// same battles.json entry (one map marker, one defeat toggle) as the
// primary trainerClass/team, so each trainer's Pokémon can still be
// attributed to the trainer that owns them.
export type BattleTrainer = {
    name: string;
    teams: BattleTeam[];
    // TRAINER_CLASSES slug.
    trainerClass: string;
};

// One battle's full trainer info — team(s), items, and (for a tag battle)
// the second trainer — keyed by battle key (BattleHelpers.getBattleKey)
// in Game.battles. Split out from the Location-owned Battle (placement +
// metadata) so a battle's team data has one home regardless of where
// it's fought.
export type BattleData = {
    name: string;
    teams: BattleTeam[];
    items?: BattleItem[];
    secondTrainer?: BattleTrainer;
    // TRAINER_CLASSES slug.
    trainerClass: string;
    aiFlags: AiFlag[];
};

export type Battle = {
    // Looks up this battle's trainer info in Game.battles.
    battleKey: string;
    customHeight?: number;
    customWidth?: number;
    fieldCondition?: FieldCondition;
    // Restricts this marker to runs of the matching gender (Game.
    // hasGenderSelection) — e.g. a location where the trainer/team fought
    // is entirely different by gender gets two Battle entries here, each
    // pointing at its own independent Game.battles entry, rather than one
    // entry with gender-conditioned team content (that's what
    // BattleTeamCondition is for — a shared trainer with a divergent
    // roster — not a wholesale different trainer).
    gender?: 'male' | 'female';
    metadata: BattleMetadata[];
    x: number;
    y: number;
};

export type Encounter = {
    species: string;
    method: EncounterMethod;
    minLevel: number | null;
    maxLevel: number | null;
    chance: number | null;
    conditions?: string[];
    // The species the player must hand over to receive this encounter.
    // Only set on EncounterMethod.Trade encounters.
    tradeFor?: string;
    // The item slug this encounter is holding when received. Only set on
    // EncounterMethod.Trade encounters that come with a held item.
    heldItem?: string;
};

// Everything EncounterHelpers' ENCOUNTER_HIDE_RULEs need to decide whether a
// single encounter is permanently hidden (as opposed to hidden by the
// currently selected time of day, which is a separate, non-permanent
// filter). `settings` is the same id -> value snapshot
// SettingsHelpers.getSnapshot returns, so a new setting-driven rule can read
// its own id straight out of it without any signature changes.
export type EncounterVisibilityContext = {
    caughtHere?: string;
    dataSource: GameDataSource;
    dupes: string[];
    generation: number;
    settings: Record<string, boolean>;
};

export type MethodOverride = {
    location: string;
    species: string;
    method: EncounterMethod;
};

export type LocationMerge = {
    from: string;
    into: string;
    // 'sum' (default) adds chances together, for combining areas that each
    // contribute a distinct slice of the same overall pool. 'dedupe' keeps
    // the highest chance instead, for areas whose encounter tables are
    // already-complete duplicates of one another (e.g. disconnected rooms
    // on the same floor with identical wild encounters). 'replace' discards
    // whatever is already accumulated under `into` and takes `from`
    // verbatim, for picking one subarea's table as authoritative over a
    // group of near-duplicate rooms (the last 'replace' entry for a given
    // `into` wins).
    mode?: 'sum' | 'dedupe' | 'replace';
};

export type LocationSplitGroup = {
    key: string;
    // Encounters using one of these methods go into this group. Omit on
    // one group per split to make it the catch-all for methods not claimed
    // by any other group.
    methods?: EncounterMethod[];
};

export type LocationSplit = {
    location: string;
    groups: LocationSplitGroup[];
};

export type GameVersion = {
    id: string;
    label: string;
    version: string;
    region: string;
    generation: number;
    excludedLocations?: string[];
    excludedAreas?: string[];
    excludedSpecies?: string[];
    caveLocations?: string[];
    methodOverrides?: MethodOverride[];
    excludedMethods?: string[];
    excludedConditions?: string[];
    excludedConditionPrefixes?: string[];
    strippedConditions?: string[];
    strippedConditionPrefixes?: string[];
    mergedLocations?: LocationMerge[];
    locationSplits?: LocationSplit[];
    // Hand-authored encounters (e.g. NPC trades) with no PokeAPI equivalent,
    // appended to whatever a location key already has after fetching.
    manualEncounters?: Record<string, Encounter[]>;
};

export type EncounterLocation = {
    name: string;
    encounter: Encounter;
};

export type Subarea = {
    name: string;
    encountersKey?: string;
    hideBattles?: boolean;
    map: StaticImageData;
    // Where the map is panned to by default, when no battle is selected.
    mapAnchor: MapAnchor;
    battles?: Battle[];
};

export type Location = {
    name: string;
    encountersKey?: string;
    hideBattles?: boolean;
    battles?: Battle[];
} & (
    | {
          map: StaticImageData;
          // Where the map is panned to by default, when no battle is
          // selected.
          mapAnchor: MapAnchor;
          subareas?: never;
      }
    | { map?: never; mapAnchor?: never; subareas: Subarea[] }
);

// The condition determining whether a split is finished, resolved against a
// decrypted save file (generation-specific parsers, e.g.
// src/lib/parsers/gen4/Gen4SplitParser.ts, know how to evaluate one of these
// against their own save format). A gym split is done once its badge bit is
// set; the final split (the champion) is done once the main story is marked
// cleared.
export type SplitSaveCondition =
    { type: 'badge'; bit: number } | { type: 'gameClear' };

export type Split = {
    name: string;
    locations: Location[];
    // Resolved against pret/pokediamond -- the condition determining
    // whether a decrypted save reports this split as finished.
    saveCondition: SplitSaveCondition;
};

// The species/move/ability/item records a game's data pulls from. Every
// unmodified game shares the same vanilla PokeAPI-sourced records; a game
// whose data diverges from vanilla (e.g. a ROM hack) points at its own
// independent set instead.
export type GameDataSource = {
    pokemon: Record<string, PokemonData>;
    moves: Record<string, MoveData>;
    abilities: Record<string, AbilityData>;
    items: Record<string, ItemData>;
};

export type Game = {
    name: string;
    logo: string;
    generation: number;
    // PokeAPI version group slug for this game. Used to resolve which of a
    // Pokémon's per-version-group learnsets applies, since level-up
    // movesets can differ between versions within the same generation.
    version: GameVersionGroup;
    dataSource: GameDataSource;
    // public/badges/<folder>/ this game's gym-badge icons are served from.
    // A game that reuses another game's badge art (e.g. a shared region)
    // points at that game's folder instead of duplicating the files.
    badgeAssetFolder: BadgeAssetFolder;
    // public/trainers/<folder>/ this game's trainer battle sprites are
    // served from, under the same sharing convention as badgeAssetFolder
    // — kept independent of it since trainer and badge art don't
    // necessarily reuse together (e.g. a variant could share one but not
    // the other).
    trainerAssetFolder: TrainerAssetFolder;
    // Whether choosing the protagonist's gender matters for this game (it
    // can change more than cosmetics, e.g. which trainer/team a battle
    // resolves to — see BattleTeamCondition's 'gender' variant). Most games
    // don't model this; it's only true for a game whose content actually
    // diverges by gender.
    hasGenderSelection: boolean;
    splits: Split[];
    starters: string[];
    accentColor: string;
    // Text color for the starter select modal's submit buttons; falls back
    // to their current default color when not provided.
    textContrastColor?: string;
    encounters: Record<string, Encounter[]>;
    // Every battle's trainer info, keyed by battle key
    // (BattleHelpers.getBattleKey).
    battles: Record<string, BattleData>;
    // Game-specific messages shown at random on the run page when a run is
    // marked as a wipe, alongside the run page's default messages.
    wipeMessages: string[];
    // This game's region-specific met-location index -> display name
    // table (e.g. Sinnoh's for Platinum), since met-location IDs are
    // assigned per region rather than shared across every game.
    metLocationById: Record<number, string>;
};

export type Run = {
    attempt: number;
    // Names of splits (Split.name) the player has marked as finished.
    completedSplits: string[];
    hallOfFameCount: number;
    starter: string;
    // Only set when Game.hasGenderSelection is true for this run's game.
    gender?: 'male' | 'female';
    caughtPokemon: CaughtPokemon[];
    // Locations whose encounter was used up without catching anything (the
    // Pokémon fled, fainted, etc.), by location name — same key space as
    // CaughtPokemon.location, and mutually exclusive with it.
    missedLocations: string[];
    // Whether the player has given up on this run (a wipe). Once true, the
    // run page shows a "Run it back" message instead of its tabs.
    wipe: boolean;
};

// A snapshot of a run's team at the moment it entered the Hall of Fame,
// stored independently of the run itself (keyed by game slug + attempt)
// so it survives the run's box being edited or wiped on a later attempt.
export type HallOfFameEntry = {
    attempt: number;
    game: string;
    team: CaughtPokemon[];
};

export type TypesByGeneration = {
    fromGeneration: number;
    types: string[];
};

export type Abilities = {
    slot1: string;
    slot2?: string;
    hidden?: string;
};

export type AbilitiesByGeneration = {
    fromGeneration: number;
    abilities: Abilities;
};

export type StatsByGeneration = {
    fromGeneration: number;
    stats: StatValues;
};

export type EvolutionMethod = {
    trigger: string;
    item?: string;
    heldItem?: string;
    minLevel?: number;
    minHappiness?: number;
    minBeauty?: number;
    minAffection?: number;
    gender?: string;
    timeOfDay?: string;
    knownMove?: string;
    knownMoveType?: string;
    location?: string;
    tradeSpecies?: string;
    needsOverworldRain?: boolean;
    turnUpsideDown?: boolean;
    partyType?: string;
    partySpecies?: string;
    relativePhysicalStats?: number;
};

// A single Pokémon within an evolution line, as known from the perspective of
// the Pokémon the line was built for: ancestors leading up to it are a single
// path, but its own descendants preserve any branches (e.g. Eevee's split
// into multiple eeveelutions).
export type EvolutionStep = {
    slug: string;
    // How this step is reached from its predecessor. Omitted for the
    // topmost visible step, which has no visible predecessor.
    methods?: EvolutionMethod[];
    evolvesTo: EvolutionStep[];
};

export type EvolutionLineByGeneration = {
    fromGeneration: number;
    line: EvolutionStep;
};

// A method label split into its primary text and an optional condition
// (e.g. a trade evolution's held item), so callers can render the
// condition on its own line.
export type EvolutionMethodLabel = {
    label: string;
    condition?: string;
    conditionIcon?: string;
    icon?: string;
    gender?: 'male' | 'female';
};

export type MoveValuesByGeneration = {
    fromGeneration: number;
    type: string;
    power: number | null;
    accuracy: number | null;
    pp: number;
    effect: string;
    effectChance: number | null;
    description: string;
};

export type MoveData = {
    slug: string;
    name: string;
    // PokeAPI's numeric move ID, which matches the raw move index stored
    // in-game (e.g. in a Generation IV save file's Pokémon data). Verified
    // stable across every standard move from Generation I through IX (Z-Moves
    // aren't in PokeAPI's move list at all, so they're untested — Platinum
    // predates them anyway).
    id: number;
    // PokeAPI doesn't track historical changes for these two fields, so
    // unlike the rest of a move's values they aren't split by generation.
    category: string;
    priority: number;
    introducedInGeneration: number;
    // PokeAPI has no concept of "dangerous" moves, so this is curated
    // separately rather than derived from any API field.
    isDangerous: boolean;
    valuesByGeneration: MoveValuesByGeneration[];
};

export type AbilityValuesByGeneration = {
    fromGeneration: number;
    effect: string;
};

export type AbilityData = {
    slug: string;
    name: string;
    // PokeAPI's numeric ability ID, which matches the raw ability index
    // stored in-game (e.g. in a Generation IV save file's Pokémon data).
    // Verified stable from Generation III (when Abilities were introduced)
    // through Generation VIII; a handful of Generation IX abilities added in
    // a later DLC wave (e.g. Hospitality, Mind's Eye) are known to NOT match
    // their in-game index, so don't rely on this field for Gen IX+ without
    // re-verifying against that generation's actual index numbers first.
    id: number;
    introducedInGeneration: number;
    // PokeAPI has no concept of "dangerous" abilities, so this is curated
    // separately rather than derived from any API field.
    isDangerous: boolean;
    valuesByGeneration: AbilityValuesByGeneration[];
};

export type ItemValuesByGeneration = {
    fromGeneration: number;
    description: string;
};

export type ItemData = {
    slug: string;
    name: string;
    category: string;
    // PokeAPI doesn't track historical changes to an item's effect text, so
    // unlike its per-generation description this isn't split by generation.
    effect: string;
    introducedInGeneration: number;
    // PokeAPI has no concept of an item being discontinued (e.g. Elemental
    // Gems, cut after generation VI), so this is curated separately rather
    // than derived from any API field. Only set for the handful of items
    // that were actually removed from later games.
    removedInGeneration?: number;
    sprite: string;
    valuesByGeneration: ItemValuesByGeneration[];
};

export type LearnsetMethod = 'level-up' | 'machine' | 'tutor';

export type LearnsetMove = {
    slug: string;
    method: LearnsetMethod;
    // Only set for level-up moves.
    level?: number;
};

export type LearnsetByVersionGroup = {
    // PokeAPI version group slug, e.g. "diamond-pearl", "platinum",
    // "heartgold-soulsilver". Learnsets are kept per version group rather
    // than per generation because level-up movesets commonly differ between
    // versions within the same generation (e.g. Onix's moveset changed
    // between Diamond/Pearl/Platinum and HeartGold/SoulSilver).
    versionGroup: string;
    fromGeneration: number;
    moves: LearnsetMove[];
};

export type AbilityEntry = {
    hidden?: boolean;
    slug: string;
};

export type PokemonData = {
    slug: string;
    name: string;
    dexNumber: number;
    introducedInGeneration: number;
    // PokeAPI's is_battle_only form flag doesn't cover every form that
    // can't actually persist in a box (e.g. Shaymin's Sky Forme reverts to
    // Land Forme on deposit), so this is curated separately rather than
    // derived from any single API field.
    isTemporaryForm: boolean;
    // PokeAPI has no concept of a held item swapping which form's data
    // displays (e.g. Giratina holding the Griseous Orb), so this is curated
    // separately rather than derived from any API field. Only set on the
    // base form; `form` is the slug of the PokemonData entry to display
    // instead while a caught Pokémon holds `item`.
    formChangeItem?: { item: string; form: string };
    // Item slugs this species can hold when encountered in the wild.
    // Absent for the majority of species, which hold nothing.
    wildHeldItems?: string[];
    // PokeAPI's species-level is_legendary/is_mythical flags, combined.
    // Used to filter legendaries out of features that shouldn't offer them
    // (e.g. wild encounters).
    isLegendary: boolean;
    sprites: Record<string, string>;
    types: TypesByGeneration[];
    abilities: AbilitiesByGeneration[];
    stats: StatsByGeneration[];
    catchRate: number;
    genderRate: number;
    growthRate: GrowthRate;
    evolutionLine: EvolutionLineByGeneration[];
    learnset: LearnsetByVersionGroup[];
};
