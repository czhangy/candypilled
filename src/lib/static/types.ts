import { StaticImageData } from 'next/image';
import {
    EncounterMethod,
    FieldCondition,
    Nature,
    PokemonStatus,
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

// Identifies which of a species' abilities is set: 1 = slot1, 2 = slot2,
// 3 = hidden. Callers resolve the name via PokemonHelpers.getAbilityName.
export type AbilitySlot = 1 | 2 | 3;

export type BattlePokemon = {
    ability: AbilitySlot;
    evs?: StatValues;
    heldItem?: string;
    ivs?: number | StatValues;
    level: number;
    moves?: string[];
    name: string;
    nature?: Nature;
};

// A caught Pokémon as tracked for Nuzlocke rule enforcement: one catch per
// location (not subarea), and no more than one catch per evolution line.
export type CaughtPokemon = Omit<BattlePokemon, 'moves'> & {
    location: string;
    moves: string[];
    status: PokemonStatus;
    // Freeform labels the player assigns to organize their box (e.g. "Ace",
    // "Trade").
    tags: string[];
};

// The two views of the box tab's caught Pokémon grid: living Pokémon
// ("box") or dead ones ("graveyard").
export type BoxView = 'box' | 'graveyard';

type BattleItem = {
    count: number;
    name: string;
};

export type Battle = {
    fieldCondition?: FieldCondition;
    isBackToBack?: boolean;
    isBoss?: boolean;
    isDouble?: boolean;
    isDoubleHeightMarker?: boolean;
    isDoubleWidthMarker?: boolean;
    isGauntlet?: boolean;
    isMiniboss?: boolean;
    isOptional?: boolean;
    isTag?: boolean;
    isTrueDouble?: boolean;
    items?: BattleItem[];
    name: string;
    team?: BattlePokemon[];
    teamsByStarter?: Partial<Record<string, BattlePokemon[]>>;
    trainerClass: string;
    x: number;
    y: number;
};

export type Encounter = {
    species: string;
    method: EncounterMethod;
    minLevel: number;
    maxLevel: number;
    chance: number | null;
    conditions?: string[];
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
};

export type EncounterLocation = {
    name: string;
    encounter: Encounter;
};

export type Subarea = {
    name: string;
    encountersKey?: string;
    hideBattles?: boolean;
    map?: StaticImageData;
    battles?: Battle[];
};

export type Location = {
    name: string;
    encountersKey?: string;
    hideBattles?: boolean;
    map?: StaticImageData;
    battles?: Battle[];
    subareas?: Subarea[];
    // Overrides for `map`/`encountersKey` once Team Galactic's
    // interference at the lakes has occurred (e.g. Lake Verity's map and
    // wild encounters change after Mars appears there).
    postGalacticMap?: StaticImageData;
    postGalacticEncountersKey?: string;
};

export type Split = {
    name: string;
    locations: Location[];
};

export type Game = {
    name: string;
    logo: string;
    generation: number;
    // PokeAPI version group slug for this game, e.g. "platinum". Used to
    // resolve which of a Pokémon's per-version-group learnsets applies,
    // since level-up movesets can differ between versions within the same
    // generation.
    version: string;
    splits: Split[];
    starters: string[];
    accentColor: string;
    // Text color for the starter select modal's submit buttons; falls back
    // to their current default color when not provided.
    textContrastColor?: string;
    encounters: Record<string, Encounter[]>;
    // Game-specific messages shown at random on the run page when a run is
    // marked as a wipe, alongside the run page's default messages.
    wipeMessages: string[];
};

export type Run = {
    attempt: number;
    // Battle keys (BattleHelpers.getBattleKey), not names — trainerClass + name is
    // the unique identifier since name alone can repeat within a game.
    defeatedBattles: string[];
    personalBest: string;
    hallOfFameCount: number;
    starter: string;
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
    name: string;
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
    name: string;
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
    name: string;
    introducedInGeneration: number;
    // PokeAPI has no concept of "dangerous" abilities, so this is curated
    // separately rather than derived from any API field.
    isDangerous: boolean;
    valuesByGeneration: AbilityValuesByGeneration[];
};

export type LearnsetMethod = 'level-up' | 'machine' | 'tutor';

export type LearnsetMove = {
    name: string;
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
    name: string;
};

export type PokemonData = {
    name: string;
    introducedInGeneration: number;
    // PokeAPI's is_battle_only form flag doesn't cover every form that
    // can't actually persist in a box (e.g. Shaymin's Sky Forme reverts to
    // Land Forme on deposit), so this is curated separately rather than
    // derived from any single API field.
    isTemporaryForm: boolean;
    sprites: Record<string, string>;
    types: TypesByGeneration[];
    abilities: AbilitiesByGeneration[];
    stats: StatsByGeneration[];
    catchRate: number;
    evolutionLine: EvolutionLineByGeneration[];
    learnset: LearnsetByVersionGroup[];
};
