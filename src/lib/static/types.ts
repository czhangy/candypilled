import { StaticImageData } from 'next/image';
import {
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
    ability: AbilitySlug;
    evs?: StatValues;
    gender: 'male' | 'female' | 'genderless';
    heldItem?: ItemSlug;
    ivs?: number | StatValues;
    level: number;
    moves?: MoveSlug[];
    nature?: Nature;
    slug: PokemonSlug;
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
export type BattleTeamCondition = { type: 'starter'; starter: PokemonSlug };

// One possible roster for a trainer. A team with no condition always
// applies; a team with a condition only applies when that condition is met
// (e.g. matching the run's starter). Every team that survives filtering is
// rendered together — a trainer can have several genuinely independent,
// unconditioned team options (e.g. a randomized roster), and there's no way
// to know from a run alone which one a given playthrough actually has.
// `trainerClass` overrides the battle's own sprite for this one team only —
// for a BackToBack sequence whose consecutive fights are different named
// trainers (not one trainer's escalating roster), so each fight can show its
// own sprite despite sharing the battle's single display name.
export type BattleTeam = {
    condition?: BattleTeamCondition;
    team: BattlePokemon[];
    trainerClass?: string;
};

// One trainer's own slice of a battle: their TRAINER_CLASSES slug, name, and
// every team that survived condition filtering for the current run, each
// carrying its own resolved trainerClass (falling back to the group's own
// when a team doesn't override it). A non-tag battle has a single group; a
// tag battle has one per trainer, in trainerClass/secondTrainer order.
export type BattleTeamGroup = {
    items?: BattleItem[];
    name: string;
    teams: { team: BattlePokemon[]; trainerClass: string }[];
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
    slug: ItemSlug;
};

// A Gen IV save's general block contents are game-specific (see
// src/lib/parsers/gen4/gen4-save-layouts.ts for the derivation and per-game
// values), so every offset a Gen4 parser needs is looked up through one of
// these rather than hardcoded.
export type Gen4SaveLayout = {
    generalBlockSize: number;
    storageBlockSize: number;
    partyOffset: number;
    genderOffset: number;
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
// in Game.battles. Split out from the Location-owned Battle (bare
// placement) so a battle's team data/metadata has one home regardless of
// where it's fought.
export type BattleData = {
    name: string;
    teams: BattleTeam[];
    items?: BattleItem[];
    metadata: BattleMetadata[];
    // When true, this battle's display name (BattleHelpers.getFullName) is
    // `name` verbatim, skipping the usual "<TRAINER_CLASSES displayName>
    // <name>" prefix -- for a name that already reads as a complete title
    // (e.g. a family/group name for a BackToBack sequence) rather than a
    // person's own name paired with their class.
    plainName?: boolean;
    secondTrainer?: BattleTrainer;
    // Restricts this battle's marker to the named split (Split.name) or any
    // split after it in game order — for a location placed in more than
    // one split whose battle set differs between them, rather than
    // showing this battle's marker before the player has reached it.
    split?: string;
    // TRAINER_CLASSES slug.
    trainerClass: string;
};

export type Battle = {
    // Looks up this battle's trainer info in Game.battles.
    battleKey: string;
    customHeight?: number;
    customWidth?: number;
    fieldCondition?: FieldCondition;
    // Restricts this marker to runs of the matching gender (Game.genders)
    // — e.g. a location where the trainer/team fought is entirely
    // different by gender gets two Battle entries here, each
    // pointing at its own independent Game.battles entry, rather than one
    // entry with gender-conditioned team content (that's what
    // BattleTeamCondition is for — a shared trainer with a divergent
    // roster — not a wholesale different trainer).
    gender?: 'male' | 'female';
    // Restricts this marker to the matching Game.name — e.g. a location
    // where the trainer fought is entirely different by game version
    // (Game.name, not Game.version's shared version-group) gets two Battle
    // entries here, each pointing at its own independent Game.battles
    // entry, mirroring how `gender` splits a wholesale different trainer.
    game?: string;
    split?: string;
    x: number;
    y: number;
};

// A location-level ally trainer shown as a fixed corner button on the map,
// not placed by x/y like a Battle and not tied to any one fight. Points into
// the same Game.battles map as a normal Battle, reusing its existing
// team/roster resolution.
export type TagPartner = {
    battleKey: string;
    // Restricts this partner to runs of the matching gender — e.g. a
    // partner whose identity differs by gender (Dawn/Lucas) gets two
    // TagPartner entries here, each pointing at its own independent
    // Game.battles entry, mirroring Battle.gender.
    gender?: 'male' | 'female';
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
    // The item slug this encounter is holding when received.
    heldItem?: string;
};

// Everything EncounterHelpers' ENCOUNTER_HIDE_RULEs need to decide whether a
// single encounter is permanently hidden (as opposed to hidden by the
// currently selected time of day, which is a separate, non-permanent
// filter). `settings` is the same id -> value snapshot
// SettingsHelpers.getSnapshot returns, so a new setting-driven rule can read
// its own id straight out of it without any signature changes.
export type EncounterVisibilityContext = {
    dataSource: GameDataSource;
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

// A single map; two maps to pick between by the run's gender (e.g. a
// location whose layout differs by which protagonist sprite passes
// through it); or a map keyed by Game.name, for content that differs by
// which specific game version is being played (e.g. a location where a
// version-exclusive team's member appears) rather than by run gender.
export type LocationMapImage =
    | StaticImageData
    | { male: StaticImageData; female: StaticImageData }
    | Record<string, StaticImageData>;

export type Subarea = {
    name: string;
    encountersKey?: string;
    map: LocationMapImage;
    // Where this subarea's map autoscrolls to on load, lower priority
    // than a selected battle marker.
    mapAnchor: MapAnchor;
    battles?: Battle[];
    // Usually one entry; two when the partner's identity is gender-split
    // (e.g. Dawn for a male run, Lucas for a female run).
    tagPartner?: TagPartner[];
};

export type Location = {
    name: string;
    encountersKey?: string;
    battles?: Battle[];
    // Only meaningful for a location with no subareas — a subarea-based
    // location sets tagPartner per-subarea instead (Subarea.tagPartner),
    // since a partner's company is usually confined to one area. Usually
    // one entry; two when the partner's identity is gender-split.
    tagPartner?: TagPartner[];
} & (
    | {
          map: LocationMapImage;
          // Where this location's map autoscrolls to on load, lower
          // priority than a selected battle marker.
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

// A sparse, field-level patch keyed by slug — only entries that actually
// differ from the base dataset are present, and only their changed fields.
// Shared across every ROM-hack-style game that rebalances a subset of
// species/moves rather than replacing the whole dataset (e.g. Renegade
// Platinum), so the same override table doubles as both the input to
// DataSourceHelpers.applyOverrides and the source of truth for a "what did
// this game change" UI feature — the override's own keys are the diff.
export type DataOverrides<T> = Record<string, Partial<T>>;

// The species/move/item records a game's data pulls from. Every
// unmodified game shares the same vanilla PokeAPI-sourced records; a game
// whose data diverges from vanilla (e.g. a ROM hack) points at its own
// independent set instead. Abilities aren't overridden per-game yet —
// AbilityHelpers reads the global ABILITIES constant directly.
export type GameDataSource = {
    pokemon: Record<string, PokemonData>;
    moves: Record<string, MoveData>;
    items: Record<string, ItemData>;
    // Set only for a game whose pokemon/moves are vanilla data patched by a
    // sparse diff (e.g. a ROM hack rebalance) — lets the UI surface
    // exactly what this game changed, species/move by species/move, field
    // by field. `pokemon`/`moves` above already reflect the *merged*
    // result (every existing consumer keeps working unchanged); this is
    // the same patch data kept around unmerged, purely for diff display.
    // Omitted for every game whose dataset isn't derived this way.
    overrides?: {
        pokemon?: DataOverrides<PokemonData>;
        moves?: DataOverrides<MoveData>;
    };
};

// A single entry in a game's optional Resources tab -- opens url in a new tab.
export type GameResource = {
    text: string;
    description: string;
    url: string;
};

// A roaming legendary that isn't tied to any one Location — it can be
// encountered on whichever route the player happens to be on, so it's
// tracked on the run page itself rather than wired into a Split.
export type Roamer = {
    species: PokemonSlug;
    level: number;
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
    // public/pokemon/<folder>/ this game's own Pokémon sprites should
    // resolve from, under the same sharing convention as
    // badgeAssetFolder/trainerAssetFolder, for a game whose own dataset
    // doesn't carry real per-species sprite paths (e.g. an independent
    // ROM-hack dataset reusing its base game's art verbatim). Omitted for
    // every game whose own PokemonData entries carry real sprites keyed by
    // `version` — only set this when sprites should be resolved
    // formulaically from another game's folder instead.
    pokemonAssetFolder?: GameVersionGroup;
    // The protagonist sprite shown for each gender option at run creation
    // (it can change more than cosmetics, e.g. which trainer/team a
    // battle resolves to — see BattleTeamCondition's 'gender' variant).
    genders: { male: string; female: string };
    splits: Split[];
    starters: PokemonSlug[];
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
    // External resources shown in the run page's Resources tab, e.g. a
    // guide or resource pack. Omitted for a game with no associated links.
    resources?: GameResource[];
    // Roaming legendaries available somewhere in this game. Omitted for a
    // game with none.
    roamers?: Roamer[];
};

export type Run = {
    attempt: number;
    // Names of splits (Split.name) the player has marked as finished.
    completedSplits: string[];
    hallOfFameCount: number;
    starter: PokemonSlug;
    gender: 'male' | 'female';
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
    slot1: AbilitySlug;
    slot2?: AbilitySlug;
    hidden?: AbilitySlug;
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
    slug: PokemonSlug;
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
    slug: MoveSlug;
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

// One field-level difference between a move's or Pokémon's vanilla and
// game-specific values, for display in a "what changed" UI (e.g. a ROM
// hack's rebalance). `before` is omitted when `after` already stands
// alone (e.g. a stat's signed delta), rendered without a "before -> after"
// pair.
export type DataChange = {
    label: string;
    before?: string;
    after: string;
};

export type AbilityValuesByGeneration = {
    fromGeneration: number;
    effect: string;
};

export type AbilityData = {
    slug: AbilitySlug;
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
    slug: ItemSlug;
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
    // PokeAPI has no concept of "dangerous" items, so this is curated
    // separately rather than derived from any API field.
    isDangerous: boolean;
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
    changed?: boolean;
    hidden?: boolean;
    slug: string;
};

export type PokemonData = {
    slug: PokemonSlug;
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

// GENERATED-SLUGS:PokemonSlug:BEGIN -- regenerated by this dataset's own pokeapi/*.ts fetch script, do not edit by hand.
export type PokemonSlug =
    | 'abomasnow'
    | 'abra'
    | 'absol'
    | 'accelgor'
    | 'aerodactyl'
    | 'aggron'
    | 'aipom'
    | 'alakazam'
    | 'alomomola'
    | 'altaria'
    | 'ambipom'
    | 'amoonguss'
    | 'ampharos'
    | 'anorith'
    | 'arbok'
    | 'arcanine'
    | 'arceus'
    | 'archen'
    | 'archeops'
    | 'ariados'
    | 'armaldo'
    | 'aron'
    | 'articuno'
    | 'audino'
    | 'axew'
    | 'azelf'
    | 'azumarill'
    | 'azurill'
    | 'bagon'
    | 'baltoy'
    | 'banette'
    | 'barboach'
    | 'basculin-blue-striped'
    | 'basculin-red-striped'
    | 'basculin-white-striped'
    | 'bastiodon'
    | 'bayleef'
    | 'beartic'
    | 'beautifly'
    | 'beedrill'
    | 'beheeyem'
    | 'beldum'
    | 'bellossom'
    | 'bellsprout'
    | 'bibarel'
    | 'bidoof'
    | 'bisharp'
    | 'blastoise'
    | 'blaziken'
    | 'blissey'
    | 'blitzle'
    | 'boldore'
    | 'bonsly'
    | 'bouffalant'
    | 'braviary'
    | 'breloom'
    | 'bronzong'
    | 'bronzor'
    | 'budew'
    | 'buizel'
    | 'bulbasaur'
    | 'buneary'
    | 'burmy'
    | 'butterfree'
    | 'cacnea'
    | 'cacturne'
    | 'camerupt'
    | 'carnivine'
    | 'carracosta'
    | 'carvanha'
    | 'cascoon'
    | 'castform'
    | 'castform-rainy'
    | 'castform-snowy'
    | 'castform-sunny'
    | 'caterpie'
    | 'celebi'
    | 'chandelure'
    | 'chansey'
    | 'charizard'
    | 'charmander'
    | 'charmeleon'
    | 'chatot'
    | 'cherrim'
    | 'cherubi'
    | 'chikorita'
    | 'chimchar'
    | 'chimecho'
    | 'chinchou'
    | 'chingling'
    | 'cinccino'
    | 'clamperl'
    | 'claydol'
    | 'clefable'
    | 'clefairy'
    | 'cleffa'
    | 'cloyster'
    | 'cobalion'
    | 'cofagrigus'
    | 'combee'
    | 'combusken'
    | 'conkeldurr'
    | 'corphish'
    | 'corsola'
    | 'cottonee'
    | 'cradily'
    | 'cranidos'
    | 'crawdaunt'
    | 'cresselia'
    | 'croagunk'
    | 'crobat'
    | 'croconaw'
    | 'crustle'
    | 'cryogonal'
    | 'cubchoo'
    | 'cubone'
    | 'cyndaquil'
    | 'darkrai'
    | 'darmanitan-standard'
    | 'darmanitan-zen'
    | 'darumaka'
    | 'deerling'
    | 'deino'
    | 'delcatty'
    | 'delibird'
    | 'deoxys-attack'
    | 'deoxys-defense'
    | 'deoxys-normal'
    | 'deoxys-speed'
    | 'dewgong'
    | 'dewott'
    | 'dialga'
    | 'diglett'
    | 'ditto'
    | 'dodrio'
    | 'doduo'
    | 'donphan'
    | 'dragonair'
    | 'dragonite'
    | 'drapion'
    | 'dratini'
    | 'drifblim'
    | 'drifloon'
    | 'drilbur'
    | 'drowzee'
    | 'druddigon'
    | 'ducklett'
    | 'dugtrio'
    | 'dunsparce'
    | 'duosion'
    | 'durant'
    | 'dusclops'
    | 'dusknoir'
    | 'duskull'
    | 'dustox'
    | 'dwebble'
    | 'eelektrik'
    | 'eelektross'
    | 'eevee'
    | 'ekans'
    | 'electabuzz'
    | 'electivire'
    | 'electrike'
    | 'electrode'
    | 'elekid'
    | 'elgyem'
    | 'emboar'
    | 'emolga'
    | 'empoleon'
    | 'entei'
    | 'escavalier'
    | 'espeon'
    | 'excadrill'
    | 'exeggcute'
    | 'exeggutor'
    | 'exploud'
    | 'farfetchd'
    | 'fearow'
    | 'feebas'
    | 'feraligatr'
    | 'ferroseed'
    | 'ferrothorn'
    | 'finneon'
    | 'flaaffy'
    | 'flareon'
    | 'floatzel'
    | 'flygon'
    | 'foongus'
    | 'forretress'
    | 'fraxure'
    | 'frillish-male'
    | 'froslass'
    | 'furret'
    | 'gabite'
    | 'gallade'
    | 'galvantula'
    | 'garbodor'
    | 'garchomp'
    | 'gardevoir'
    | 'gastly'
    | 'gastrodon'
    | 'genesect'
    | 'gengar'
    | 'geodude'
    | 'gible'
    | 'gigalith'
    | 'girafarig'
    | 'giratina-altered'
    | 'giratina-origin'
    | 'glaceon'
    | 'glalie'
    | 'glameow'
    | 'gligar'
    | 'gliscor'
    | 'gloom'
    | 'golbat'
    | 'goldeen'
    | 'golduck'
    | 'golem'
    | 'golett'
    | 'golurk'
    | 'gorebyss'
    | 'gothita'
    | 'gothitelle'
    | 'gothorita'
    | 'granbull'
    | 'graveler'
    | 'grimer'
    | 'grotle'
    | 'groudon'
    | 'groudon-primal'
    | 'grovyle'
    | 'growlithe'
    | 'grumpig'
    | 'gulpin'
    | 'gurdurr'
    | 'gyarados'
    | 'happiny'
    | 'hariyama'
    | 'haunter'
    | 'haxorus'
    | 'heatmor'
    | 'heatran'
    | 'heracross'
    | 'herdier'
    | 'hippopotas'
    | 'hippowdon'
    | 'hitmonchan'
    | 'hitmonlee'
    | 'hitmontop'
    | 'ho-oh'
    | 'honchkrow'
    | 'hoothoot'
    | 'hoppip'
    | 'horsea'
    | 'houndoom'
    | 'houndour'
    | 'huntail'
    | 'hydreigon'
    | 'hypno'
    | 'igglybuff'
    | 'illumise'
    | 'infernape'
    | 'ivysaur'
    | 'jellicent-male'
    | 'jigglypuff'
    | 'jirachi'
    | 'jolteon'
    | 'joltik'
    | 'jumpluff'
    | 'jynx'
    | 'kabuto'
    | 'kabutops'
    | 'kadabra'
    | 'kakuna'
    | 'kangaskhan'
    | 'karrablast'
    | 'kecleon'
    | 'keldeo-ordinary'
    | 'keldeo-resolute'
    | 'kingdra'
    | 'kingler'
    | 'kirlia'
    | 'klang'
    | 'klink'
    | 'klinklang'
    | 'koffing'
    | 'krabby'
    | 'kricketot'
    | 'kricketune'
    | 'krokorok'
    | 'krookodile'
    | 'kyogre'
    | 'kyogre-primal'
    | 'kyurem'
    | 'kyurem-black'
    | 'kyurem-white'
    | 'lairon'
    | 'lampent'
    | 'landorus-incarnate'
    | 'landorus-therian'
    | 'lanturn'
    | 'lapras'
    | 'larvesta'
    | 'larvitar'
    | 'latias'
    | 'latios'
    | 'leafeon'
    | 'leavanny'
    | 'ledian'
    | 'ledyba'
    | 'lickilicky'
    | 'lickitung'
    | 'liepard'
    | 'lileep'
    | 'lilligant'
    | 'lillipup'
    | 'linoone'
    | 'litwick'
    | 'lombre'
    | 'lopunny'
    | 'lotad'
    | 'loudred'
    | 'lucario'
    | 'ludicolo'
    | 'lugia'
    | 'lumineon'
    | 'lunatone'
    | 'luvdisc'
    | 'luxio'
    | 'luxray'
    | 'machamp'
    | 'machoke'
    | 'machop'
    | 'magby'
    | 'magcargo'
    | 'magikarp'
    | 'magmar'
    | 'magmortar'
    | 'magnemite'
    | 'magneton'
    | 'magnezone'
    | 'makuhita'
    | 'mamoswine'
    | 'manaphy'
    | 'mandibuzz'
    | 'manectric'
    | 'mankey'
    | 'mantine'
    | 'mantyke'
    | 'maractus'
    | 'mareep'
    | 'marill'
    | 'marowak'
    | 'marshtomp'
    | 'masquerain'
    | 'mawile'
    | 'medicham'
    | 'meditite'
    | 'meganium'
    | 'meloetta-aria'
    | 'meloetta-pirouette'
    | 'meowth'
    | 'mesprit'
    | 'metagross'
    | 'metang'
    | 'metapod'
    | 'mew'
    | 'mewtwo'
    | 'mienfoo'
    | 'mienshao'
    | 'mightyena'
    | 'milotic'
    | 'miltank'
    | 'mime-jr'
    | 'minccino'
    | 'minun'
    | 'misdreavus'
    | 'mismagius'
    | 'moltres'
    | 'monferno'
    | 'mothim'
    | 'mr-mime'
    | 'mudkip'
    | 'muk'
    | 'munchlax'
    | 'munna'
    | 'murkrow'
    | 'musharna'
    | 'natu'
    | 'nidoking'
    | 'nidoqueen'
    | 'nidoran-f'
    | 'nidoran-m'
    | 'nidorina'
    | 'nidorino'
    | 'nincada'
    | 'ninetales'
    | 'ninjask'
    | 'noctowl'
    | 'nosepass'
    | 'numel'
    | 'nuzleaf'
    | 'octillery'
    | 'oddish'
    | 'omanyte'
    | 'omastar'
    | 'onix'
    | 'oshawott'
    | 'pachirisu'
    | 'palkia'
    | 'palpitoad'
    | 'panpour'
    | 'pansage'
    | 'pansear'
    | 'paras'
    | 'parasect'
    | 'patrat'
    | 'pawniard'
    | 'pelipper'
    | 'persian'
    | 'petilil'
    | 'phanpy'
    | 'phione'
    | 'pichu'
    | 'pidgeot'
    | 'pidgeotto'
    | 'pidgey'
    | 'pidove'
    | 'pignite'
    | 'pikachu'
    | 'piloswine'
    | 'pineco'
    | 'pinsir'
    | 'piplup'
    | 'plusle'
    | 'politoed'
    | 'poliwag'
    | 'poliwhirl'
    | 'poliwrath'
    | 'ponyta'
    | 'poochyena'
    | 'porygon'
    | 'porygon-z'
    | 'porygon2'
    | 'primeape'
    | 'prinplup'
    | 'probopass'
    | 'psyduck'
    | 'pupitar'
    | 'purrloin'
    | 'purugly'
    | 'quagsire'
    | 'quilava'
    | 'qwilfish'
    | 'raichu'
    | 'raikou'
    | 'ralts'
    | 'rampardos'
    | 'rapidash'
    | 'raticate'
    | 'rattata'
    | 'rayquaza'
    | 'regice'
    | 'regigigas'
    | 'regirock'
    | 'registeel'
    | 'relicanth'
    | 'remoraid'
    | 'reshiram'
    | 'reuniclus'
    | 'rhydon'
    | 'rhyhorn'
    | 'rhyperior'
    | 'riolu'
    | 'roggenrola'
    | 'roselia'
    | 'roserade'
    | 'rotom'
    | 'rotom-fan'
    | 'rotom-frost'
    | 'rotom-heat'
    | 'rotom-mow'
    | 'rotom-wash'
    | 'rufflet'
    | 'sableye'
    | 'salamence'
    | 'samurott'
    | 'sandile'
    | 'sandshrew'
    | 'sandslash'
    | 'sawk'
    | 'sawsbuck'
    | 'sceptile'
    | 'scizor'
    | 'scolipede'
    | 'scrafty'
    | 'scraggy'
    | 'scyther'
    | 'seadra'
    | 'seaking'
    | 'sealeo'
    | 'seedot'
    | 'seel'
    | 'seismitoad'
    | 'sentret'
    | 'serperior'
    | 'servine'
    | 'seviper'
    | 'sewaddle'
    | 'sharpedo'
    | 'shaymin-land'
    | 'shaymin-sky'
    | 'shedinja'
    | 'shelgon'
    | 'shellder'
    | 'shellos'
    | 'shelmet'
    | 'shieldon'
    | 'shiftry'
    | 'shinx'
    | 'shroomish'
    | 'shuckle'
    | 'shuppet'
    | 'sigilyph'
    | 'silcoon'
    | 'simipour'
    | 'simisage'
    | 'simisear'
    | 'skarmory'
    | 'skiploom'
    | 'skitty'
    | 'skorupi'
    | 'skuntank'
    | 'slaking'
    | 'slakoth'
    | 'slowbro'
    | 'slowking'
    | 'slowpoke'
    | 'slugma'
    | 'smeargle'
    | 'smoochum'
    | 'sneasel'
    | 'snivy'
    | 'snorlax'
    | 'snorunt'
    | 'snover'
    | 'snubbull'
    | 'solosis'
    | 'solrock'
    | 'spearow'
    | 'spheal'
    | 'spinarak'
    | 'spinda'
    | 'spiritomb'
    | 'spoink'
    | 'squirtle'
    | 'stantler'
    | 'staraptor'
    | 'staravia'
    | 'starly'
    | 'starmie'
    | 'staryu'
    | 'steelix'
    | 'stoutland'
    | 'stunfisk'
    | 'stunky'
    | 'sudowoodo'
    | 'suicune'
    | 'sunflora'
    | 'sunkern'
    | 'surskit'
    | 'swablu'
    | 'swadloon'
    | 'swalot'
    | 'swampert'
    | 'swanna'
    | 'swellow'
    | 'swinub'
    | 'swoobat'
    | 'taillow'
    | 'tangela'
    | 'tangrowth'
    | 'tauros'
    | 'teddiursa'
    | 'tentacool'
    | 'tentacruel'
    | 'tepig'
    | 'terrakion'
    | 'throh'
    | 'thundurus-incarnate'
    | 'thundurus-therian'
    | 'timburr'
    | 'tirtouga'
    | 'togekiss'
    | 'togepi'
    | 'togetic'
    | 'torchic'
    | 'torkoal'
    | 'tornadus-incarnate'
    | 'tornadus-therian'
    | 'torterra'
    | 'totodile'
    | 'toxicroak'
    | 'tranquill'
    | 'trapinch'
    | 'treecko'
    | 'tropius'
    | 'trubbish'
    | 'turtwig'
    | 'tympole'
    | 'tynamo'
    | 'typhlosion'
    | 'tyranitar'
    | 'tyrogue'
    | 'umbreon'
    | 'unfezant'
    | 'unown'
    | 'ursaring'
    | 'uxie'
    | 'vanillish'
    | 'vanillite'
    | 'vanilluxe'
    | 'vaporeon'
    | 'venipede'
    | 'venomoth'
    | 'venonat'
    | 'venusaur'
    | 'vespiquen'
    | 'vibrava'
    | 'victini'
    | 'victreebel'
    | 'vigoroth'
    | 'vileplume'
    | 'virizion'
    | 'volbeat'
    | 'volcarona'
    | 'voltorb'
    | 'vullaby'
    | 'vulpix'
    | 'wailmer'
    | 'wailord'
    | 'walrein'
    | 'wartortle'
    | 'watchog'
    | 'weavile'
    | 'weedle'
    | 'weepinbell'
    | 'weezing'
    | 'whimsicott'
    | 'whirlipede'
    | 'whiscash'
    | 'whismur'
    | 'wigglytuff'
    | 'wingull'
    | 'wobbuffet'
    | 'woobat'
    | 'wooper'
    | 'wormadam-plant'
    | 'wormadam-sandy'
    | 'wormadam-trash'
    | 'wurmple'
    | 'wynaut'
    | 'xatu'
    | 'yamask'
    | 'yanma'
    | 'yanmega'
    | 'zangoose'
    | 'zapdos'
    | 'zebstrika'
    | 'zekrom'
    | 'zigzagoon'
    | 'zoroark'
    | 'zorua'
    | 'zubat'
    | 'zweilous';
// GENERATED-SLUGS:PokemonSlug:END

// GENERATED-SLUGS:MoveSlug:BEGIN -- regenerated by this dataset's own pokeapi/*.ts fetch script, do not edit by hand.
export type MoveSlug =
    | 'absorb'
    | 'accelerock'
    | 'acid'
    | 'acid-armor'
    | 'acid-spray'
    | 'acrobatics'
    | 'acupressure'
    | 'aerial-ace'
    | 'aeroblast'
    | 'after-you'
    | 'agility'
    | 'air-cutter'
    | 'air-slash'
    | 'alluring-voice'
    | 'ally-switch'
    | 'amnesia'
    | 'anchor-shot'
    | 'ancient-power'
    | 'apple-acid'
    | 'aqua-cutter'
    | 'aqua-jet'
    | 'aqua-ring'
    | 'aqua-step'
    | 'aqua-tail'
    | 'arm-thrust'
    | 'armor-cannon'
    | 'aromatherapy'
    | 'aromatic-mist'
    | 'assist'
    | 'assurance'
    | 'astonish'
    | 'astral-barrage'
    | 'attack-order'
    | 'attract'
    | 'aura-sphere'
    | 'aura-wheel'
    | 'aurora-beam'
    | 'aurora-veil'
    | 'autotomize'
    | 'avalanche'
    | 'axe-kick'
    | 'baby-doll-eyes'
    | 'baddy-bad'
    | 'baneful-bunker'
    | 'barb-barrage'
    | 'barrage'
    | 'barrier'
    | 'baton-pass'
    | 'beak-blast'
    | 'beat-up'
    | 'behemoth-bash'
    | 'behemoth-blade'
    | 'belch'
    | 'belly-drum'
    | 'bestow'
    | 'bide'
    | 'bind'
    | 'bite'
    | 'bitter-blade'
    | 'bitter-malice'
    | 'blast-burn'
    | 'blaze-kick'
    | 'blazing-torque'
    | 'bleakwind-storm'
    | 'blizzard'
    | 'block'
    | 'blood-moon'
    | 'blue-flare'
    | 'body-press'
    | 'body-slam'
    | 'bolt-beak'
    | 'bolt-strike'
    | 'bone-club'
    | 'bone-rush'
    | 'bonemerang'
    | 'boomburst'
    | 'bounce'
    | 'bouncy-bubble'
    | 'branch-poke'
    | 'brave-bird'
    | 'breaking-swipe'
    | 'brick-break'
    | 'brine'
    | 'brutal-swing'
    | 'bubble'
    | 'bubble-beam'
    | 'bug-bite'
    | 'bug-buzz'
    | 'bulk-up'
    | 'bulldoze'
    | 'bullet-punch'
    | 'bullet-seed'
    | 'burn-up'
    | 'burning-bulwark'
    | 'burning-jealousy'
    | 'buzzy-buzz'
    | 'calm-mind'
    | 'camouflage'
    | 'captivate'
    | 'ceaseless-edge'
    | 'celebrate'
    | 'charge'
    | 'charge-beam'
    | 'charm'
    | 'chatter'
    | 'chilling-water'
    | 'chilly-reception'
    | 'chip-away'
    | 'chloroblast'
    | 'circle-throw'
    | 'clamp'
    | 'clanging-scales'
    | 'clangorous-soul'
    | 'clear-smog'
    | 'close-combat'
    | 'coaching'
    | 'coil'
    | 'collision-course'
    | 'combat-torque'
    | 'comet-punch'
    | 'comeuppance'
    | 'confide'
    | 'confuse-ray'
    | 'confusion'
    | 'constrict'
    | 'conversion'
    | 'conversion-2'
    | 'copycat'
    | 'core-enforcer'
    | 'corrosive-gas'
    | 'cosmic-power'
    | 'cotton-guard'
    | 'cotton-spore'
    | 'counter'
    | 'court-change'
    | 'covet'
    | 'crabhammer'
    | 'crafty-shield'
    | 'cross-chop'
    | 'cross-poison'
    | 'crunch'
    | 'crush-claw'
    | 'crush-grip'
    | 'curse'
    | 'cut'
    | 'dark-pulse'
    | 'dark-void'
    | 'darkest-lariat'
    | 'dazzling-gleam'
    | 'decorate'
    | 'defend-order'
    | 'defense-curl'
    | 'defog'
    | 'destiny-bond'
    | 'detect'
    | 'diamond-storm'
    | 'dig'
    | 'dire-claw'
    | 'disable'
    | 'disarming-voice'
    | 'discharge'
    | 'dive'
    | 'dizzy-punch'
    | 'doodle'
    | 'doom-desire'
    | 'double-edge'
    | 'double-hit'
    | 'double-iron-bash'
    | 'double-kick'
    | 'double-shock'
    | 'double-slap'
    | 'double-team'
    | 'draco-meteor'
    | 'dragon-ascent'
    | 'dragon-breath'
    | 'dragon-cheer'
    | 'dragon-claw'
    | 'dragon-dance'
    | 'dragon-darts'
    | 'dragon-energy'
    | 'dragon-hammer'
    | 'dragon-pulse'
    | 'dragon-rage'
    | 'dragon-rush'
    | 'dragon-tail'
    | 'drain-punch'
    | 'draining-kiss'
    | 'dream-eater'
    | 'drill-peck'
    | 'drill-run'
    | 'drum-beating'
    | 'dual-chop'
    | 'dual-wingbeat'
    | 'dynamax-cannon'
    | 'dynamic-punch'
    | 'earth-power'
    | 'earthquake'
    | 'echoed-voice'
    | 'eerie-impulse'
    | 'eerie-spell'
    | 'egg-bomb'
    | 'electric-terrain'
    | 'electrify'
    | 'electro-ball'
    | 'electro-drift'
    | 'electro-shot'
    | 'electroweb'
    | 'embargo'
    | 'ember'
    | 'encore'
    | 'endeavor'
    | 'endure'
    | 'energy-ball'
    | 'entrainment'
    | 'eruption'
    | 'esper-wing'
    | 'eternabeam'
    | 'expanding-force'
    | 'explosion'
    | 'extrasensory'
    | 'extreme-speed'
    | 'facade'
    | 'fairy-lock'
    | 'fairy-wind'
    | 'fake-out'
    | 'fake-tears'
    | 'false-surrender'
    | 'false-swipe'
    | 'feather-dance'
    | 'feint'
    | 'feint-attack'
    | 'fell-stinger'
    | 'fickle-beam'
    | 'fiery-dance'
    | 'fiery-wrath'
    | 'fillet-away'
    | 'final-gambit'
    | 'fire-blast'
    | 'fire-fang'
    | 'fire-lash'
    | 'fire-pledge'
    | 'fire-punch'
    | 'fire-spin'
    | 'first-impression'
    | 'fishious-rend'
    | 'fissure'
    | 'flail'
    | 'flame-burst'
    | 'flame-charge'
    | 'flame-wheel'
    | 'flamethrower'
    | 'flare-blitz'
    | 'flash'
    | 'flash-cannon'
    | 'flatter'
    | 'fleur-cannon'
    | 'fling'
    | 'flip-turn'
    | 'floaty-fall'
    | 'floral-healing'
    | 'flower-shield'
    | 'flower-trick'
    | 'fly'
    | 'flying-press'
    | 'focus-blast'
    | 'focus-energy'
    | 'focus-punch'
    | 'follow-me'
    | 'force-palm'
    | 'foresight'
    | 'forests-curse'
    | 'foul-play'
    | 'freeze-dry'
    | 'freeze-shock'
    | 'freezing-glare'
    | 'freezy-frost'
    | 'frenzy-plant'
    | 'frost-breath'
    | 'frustration'
    | 'fury-attack'
    | 'fury-cutter'
    | 'fury-swipes'
    | 'fusion-bolt'
    | 'fusion-flare'
    | 'future-sight'
    | 'gastro-acid'
    | 'gear-grind'
    | 'gear-up'
    | 'geomancy'
    | 'giga-drain'
    | 'giga-impact'
    | 'gigaton-hammer'
    | 'glacial-lance'
    | 'glaciate'
    | 'glaive-rush'
    | 'glare'
    | 'glitzy-glow'
    | 'grass-knot'
    | 'grass-pledge'
    | 'grass-whistle'
    | 'grassy-glide'
    | 'grassy-terrain'
    | 'grav-apple'
    | 'gravity'
    | 'growl'
    | 'growth'
    | 'grudge'
    | 'guard-split'
    | 'guard-swap'
    | 'guillotine'
    | 'gunk-shot'
    | 'gust'
    | 'gyro-ball'
    | 'hail'
    | 'hammer-arm'
    | 'happy-hour'
    | 'hard-press'
    | 'harden'
    | 'haze'
    | 'head-charge'
    | 'head-smash'
    | 'headbutt'
    | 'headlong-rush'
    | 'heal-bell'
    | 'heal-block'
    | 'heal-order'
    | 'heal-pulse'
    | 'healing-wish'
    | 'heart-stamp'
    | 'heart-swap'
    | 'heat-crash'
    | 'heat-wave'
    | 'heavy-slam'
    | 'helping-hand'
    | 'hex'
    | 'hidden-power'
    | 'high-horsepower'
    | 'high-jump-kick'
    | 'hold-back'
    | 'hold-hands'
    | 'hone-claws'
    | 'horn-attack'
    | 'horn-drill'
    | 'horn-leech'
    | 'howl'
    | 'hurricane'
    | 'hydro-cannon'
    | 'hydro-pump'
    | 'hydro-steam'
    | 'hyper-beam'
    | 'hyper-drill'
    | 'hyper-fang'
    | 'hyper-voice'
    | 'hyperspace-fury'
    | 'hyperspace-hole'
    | 'hypnosis'
    | 'ice-ball'
    | 'ice-beam'
    | 'ice-burn'
    | 'ice-fang'
    | 'ice-hammer'
    | 'ice-punch'
    | 'ice-shard'
    | 'ice-spinner'
    | 'icicle-crash'
    | 'icicle-spear'
    | 'icy-wind'
    | 'imprison'
    | 'incinerate'
    | 'infernal-parade'
    | 'inferno'
    | 'infestation'
    | 'ingrain'
    | 'instruct'
    | 'ion-deluge'
    | 'iron-defense'
    | 'iron-head'
    | 'iron-tail'
    | 'ivy-cudgel'
    | 'jaw-lock'
    | 'jet-punch'
    | 'judgment'
    | 'jump-kick'
    | 'jungle-healing'
    | 'karate-chop'
    | 'kinesis'
    | 'kings-shield'
    | 'knock-off'
    | 'kowtow-cleave'
    | 'lands-wrath'
    | 'laser-focus'
    | 'lash-out'
    | 'last-resort'
    | 'last-respects'
    | 'lava-plume'
    | 'leaf-blade'
    | 'leaf-storm'
    | 'leaf-tornado'
    | 'leafage'
    | 'leech-life'
    | 'leech-seed'
    | 'leer'
    | 'lick'
    | 'life-dew'
    | 'light-of-ruin'
    | 'light-screen'
    | 'liquidation'
    | 'lock-on'
    | 'lovely-kiss'
    | 'low-kick'
    | 'low-sweep'
    | 'lucky-chant'
    | 'lumina-crash'
    | 'lunar-blessing'
    | 'lunar-dance'
    | 'lunge'
    | 'luster-purge'
    | 'mach-punch'
    | 'magic-coat'
    | 'magic-powder'
    | 'magic-room'
    | 'magical-leaf'
    | 'magical-torque'
    | 'magma-storm'
    | 'magnet-bomb'
    | 'magnet-rise'
    | 'magnetic-flux'
    | 'magnitude'
    | 'make-it-rain'
    | 'malignant-chain'
    | 'mat-block'
    | 'matcha-gotcha'
    | 'max-airstream'
    | 'max-darkness'
    | 'max-flare'
    | 'max-flutterby'
    | 'max-geyser'
    | 'max-guard'
    | 'max-hailstorm'
    | 'max-knuckle'
    | 'max-lightning'
    | 'max-mindstorm'
    | 'max-ooze'
    | 'max-overgrowth'
    | 'max-phantasm'
    | 'max-quake'
    | 'max-rockfall'
    | 'max-starfall'
    | 'max-steelspike'
    | 'max-strike'
    | 'max-wyrmwind'
    | 'me-first'
    | 'mean-look'
    | 'meditate'
    | 'mega-drain'
    | 'mega-kick'
    | 'mega-punch'
    | 'megahorn'
    | 'memento'
    | 'metal-burst'
    | 'metal-claw'
    | 'metal-sound'
    | 'meteor-assault'
    | 'meteor-beam'
    | 'meteor-mash'
    | 'metronome'
    | 'mighty-cleave'
    | 'milk-drink'
    | 'mimic'
    | 'mind-blown'
    | 'mind-reader'
    | 'minimize'
    | 'miracle-eye'
    | 'mirror-coat'
    | 'mirror-move'
    | 'mirror-shot'
    | 'mist'
    | 'mist-ball'
    | 'misty-explosion'
    | 'misty-terrain'
    | 'moonblast'
    | 'moongeist-beam'
    | 'moonlight'
    | 'morning-sun'
    | 'mortal-spin'
    | 'mountain-gale'
    | 'mud-bomb'
    | 'mud-shot'
    | 'mud-slap'
    | 'mud-sport'
    | 'muddy-water'
    | 'multi-attack'
    | 'mystical-fire'
    | 'mystical-power'
    | 'nasty-plot'
    | 'natural-gift'
    | 'nature-power'
    | 'natures-madness'
    | 'needle-arm'
    | 'night-daze'
    | 'night-shade'
    | 'night-slash'
    | 'nightmare'
    | 'no-retreat'
    | 'noble-roar'
    | 'noxious-torque'
    | 'nuzzle'
    | 'oblivion-wing'
    | 'obstruct'
    | 'octazooka'
    | 'octolock'
    | 'odor-sleuth'
    | 'ominous-wind'
    | 'order-up'
    | 'origin-pulse'
    | 'outrage'
    | 'overdrive'
    | 'overheat'
    | 'pain-split'
    | 'parabolic-charge'
    | 'parting-shot'
    | 'pay-day'
    | 'payback'
    | 'peck'
    | 'perish-song'
    | 'petal-blizzard'
    | 'petal-dance'
    | 'phantom-force'
    | 'photon-geyser'
    | 'pika-papow'
    | 'pin-missile'
    | 'plasma-fists'
    | 'play-nice'
    | 'play-rough'
    | 'pluck'
    | 'poison-fang'
    | 'poison-gas'
    | 'poison-jab'
    | 'poison-powder'
    | 'poison-sting'
    | 'poison-tail'
    | 'pollen-puff'
    | 'poltergeist'
    | 'population-bomb'
    | 'pounce'
    | 'pound'
    | 'powder'
    | 'powder-snow'
    | 'power-gem'
    | 'power-shift'
    | 'power-split'
    | 'power-swap'
    | 'power-trick'
    | 'power-trip'
    | 'power-up-punch'
    | 'power-whip'
    | 'precipice-blades'
    | 'present'
    | 'prismatic-laser'
    | 'protect'
    | 'psybeam'
    | 'psyblade'
    | 'psych-up'
    | 'psychic'
    | 'psychic-fangs'
    | 'psychic-noise'
    | 'psychic-terrain'
    | 'psycho-boost'
    | 'psycho-cut'
    | 'psycho-shift'
    | 'psyshield-bash'
    | 'psyshock'
    | 'psystrike'
    | 'psywave'
    | 'punishment'
    | 'purify'
    | 'pursuit'
    | 'pyro-ball'
    | 'quash'
    | 'quick-attack'
    | 'quick-guard'
    | 'quiver-dance'
    | 'rage'
    | 'rage-fist'
    | 'rage-powder'
    | 'raging-bull'
    | 'raging-fury'
    | 'rain-dance'
    | 'rapid-spin'
    | 'razor-leaf'
    | 'razor-shell'
    | 'razor-wind'
    | 'recover'
    | 'recycle'
    | 'reflect'
    | 'reflect-type'
    | 'refresh'
    | 'relic-song'
    | 'rest'
    | 'retaliate'
    | 'return'
    | 'revelation-dance'
    | 'revenge'
    | 'reversal'
    | 'rising-voltage'
    | 'roar'
    | 'roar-of-time'
    | 'rock-blast'
    | 'rock-climb'
    | 'rock-polish'
    | 'rock-slide'
    | 'rock-smash'
    | 'rock-throw'
    | 'rock-tomb'
    | 'rock-wrecker'
    | 'role-play'
    | 'rolling-kick'
    | 'rollout'
    | 'roost'
    | 'rototiller'
    | 'round'
    | 'ruination'
    | 'sacred-fire'
    | 'sacred-sword'
    | 'safeguard'
    | 'salt-cure'
    | 'sand-attack'
    | 'sand-tomb'
    | 'sandsear-storm'
    | 'sandstorm'
    | 'sappy-seed'
    | 'scald'
    | 'scale-shot'
    | 'scary-face'
    | 'scorching-sands'
    | 'scratch'
    | 'screech'
    | 'searing-shot'
    | 'secret-power'
    | 'secret-sword'
    | 'seed-bomb'
    | 'seed-flare'
    | 'seismic-toss'
    | 'self-destruct'
    | 'shadow-ball'
    | 'shadow-bone'
    | 'shadow-claw'
    | 'shadow-force'
    | 'shadow-punch'
    | 'shadow-sneak'
    | 'sharpen'
    | 'shed-tail'
    | 'sheer-cold'
    | 'shell-side-arm'
    | 'shell-smash'
    | 'shell-trap'
    | 'shelter'
    | 'shift-gear'
    | 'shock-wave'
    | 'shore-up'
    | 'signal-beam'
    | 'silk-trap'
    | 'silver-wind'
    | 'simple-beam'
    | 'sing'
    | 'sizzly-slide'
    | 'sketch'
    | 'skill-swap'
    | 'skitter-smack'
    | 'skull-bash'
    | 'sky-attack'
    | 'sky-drop'
    | 'sky-uppercut'
    | 'slack-off'
    | 'slam'
    | 'slash'
    | 'sleep-powder'
    | 'sleep-talk'
    | 'sludge'
    | 'sludge-bomb'
    | 'sludge-wave'
    | 'smack-down'
    | 'smart-strike'
    | 'smelling-salts'
    | 'smog'
    | 'smokescreen'
    | 'snap-trap'
    | 'snarl'
    | 'snatch'
    | 'snipe-shot'
    | 'snore'
    | 'snowscape'
    | 'soak'
    | 'soft-boiled'
    | 'solar-beam'
    | 'solar-blade'
    | 'sonic-boom'
    | 'spacial-rend'
    | 'spark'
    | 'sparkling-aria'
    | 'sparkly-swirl'
    | 'spectral-thief'
    | 'speed-swap'
    | 'spicy-extract'
    | 'spider-web'
    | 'spike-cannon'
    | 'spikes'
    | 'spiky-shield'
    | 'spin-out'
    | 'spirit-break'
    | 'spirit-shackle'
    | 'spit-up'
    | 'spite'
    | 'splash'
    | 'splishy-splash'
    | 'spore'
    | 'spotlight'
    | 'springtide-storm'
    | 'stealth-rock'
    | 'steam-eruption'
    | 'steamroller'
    | 'steel-beam'
    | 'steel-roller'
    | 'steel-wing'
    | 'sticky-web'
    | 'stockpile'
    | 'stomp'
    | 'stomping-tantrum'
    | 'stone-axe'
    | 'stone-edge'
    | 'stored-power'
    | 'storm-throw'
    | 'strange-steam'
    | 'strength'
    | 'strength-sap'
    | 'string-shot'
    | 'struggle-bug'
    | 'stuff-cheeks'
    | 'stun-spore'
    | 'submission'
    | 'substitute'
    | 'sucker-punch'
    | 'sunny-day'
    | 'sunsteel-strike'
    | 'super-fang'
    | 'supercell-slam'
    | 'superpower'
    | 'supersonic'
    | 'surf'
    | 'surging-strikes'
    | 'swagger'
    | 'swallow'
    | 'sweet-kiss'
    | 'sweet-scent'
    | 'swift'
    | 'switcheroo'
    | 'swords-dance'
    | 'synchronoise'
    | 'synthesis'
    | 'syrup-bomb'
    | 'tachyon-cutter'
    | 'tackle'
    | 'tail-glow'
    | 'tail-slap'
    | 'tail-whip'
    | 'tailwind'
    | 'take-down'
    | 'take-heart'
    | 'tar-shot'
    | 'taunt'
    | 'tearful-look'
    | 'teatime'
    | 'techno-blast'
    | 'teeter-dance'
    | 'telekinesis'
    | 'teleport'
    | 'temper-flare'
    | 'tera-blast'
    | 'tera-starstorm'
    | 'terrain-pulse'
    | 'thief'
    | 'thousand-arrows'
    | 'thousand-waves'
    | 'thrash'
    | 'throat-chop'
    | 'thunder'
    | 'thunder-cage'
    | 'thunder-fang'
    | 'thunder-punch'
    | 'thunder-shock'
    | 'thunder-wave'
    | 'thunderbolt'
    | 'thunderclap'
    | 'thunderous-kick'
    | 'tickle'
    | 'tidy-up'
    | 'topsy-turvy'
    | 'torch-song'
    | 'torment'
    | 'toxic'
    | 'toxic-spikes'
    | 'toxic-thread'
    | 'trailblaze'
    | 'transform'
    | 'tri-attack'
    | 'trick'
    | 'trick-or-treat'
    | 'trick-room'
    | 'triple-arrows'
    | 'triple-axel'
    | 'triple-dive'
    | 'triple-kick'
    | 'trop-kick'
    | 'trump-card'
    | 'twin-beam'
    | 'twineedle'
    | 'twister'
    | 'u-turn'
    | 'upper-hand'
    | 'uproar'
    | 'v-create'
    | 'vacuum-wave'
    | 'veevee-volley'
    | 'venom-drench'
    | 'venoshock'
    | 'vice-grip'
    | 'victory-dance'
    | 'vine-whip'
    | 'vital-throw'
    | 'volt-switch'
    | 'volt-tackle'
    | 'wake-up-slap'
    | 'water-gun'
    | 'water-pledge'
    | 'water-pulse'
    | 'water-shuriken'
    | 'water-sport'
    | 'water-spout'
    | 'waterfall'
    | 'wave-crash'
    | 'weather-ball'
    | 'whirlpool'
    | 'whirlwind'
    | 'wicked-blow'
    | 'wicked-torque'
    | 'wide-guard'
    | 'wild-charge'
    | 'wildbolt-storm'
    | 'will-o-wisp'
    | 'wing-attack'
    | 'wish'
    | 'withdraw'
    | 'wonder-room'
    | 'wood-hammer'
    | 'work-up'
    | 'worry-seed'
    | 'wrap'
    | 'wring-out'
    | 'x-scissor'
    | 'yawn'
    | 'zap-cannon'
    | 'zen-headbutt'
    | 'zing-zap'
    | 'zippy-zap';
// GENERATED-SLUGS:MoveSlug:END

// GENERATED-SLUGS:AbilitySlug:BEGIN -- regenerated by this dataset's own pokeapi/*.ts fetch script, do not edit by hand.
export type AbilitySlug =
    | 'adaptability'
    | 'aerilate'
    | 'aftermath'
    | 'air-lock'
    | 'analytic'
    | 'anger-point'
    | 'anger-shell'
    | 'anticipation'
    | 'arena-trap'
    | 'armor-tail'
    | 'aroma-veil'
    | 'as-one-glastrier'
    | 'as-one-spectrier'
    | 'aura-break'
    | 'bad-dreams'
    | 'ball-fetch'
    | 'battery'
    | 'battle-armor'
    | 'battle-bond'
    | 'beads-of-ruin'
    | 'beast-boost'
    | 'berserk'
    | 'big-pecks'
    | 'blaze'
    | 'bulletproof'
    | 'cheek-pouch'
    | 'chilling-neigh'
    | 'chlorophyll'
    | 'clear-body'
    | 'cloud-nine'
    | 'color-change'
    | 'comatose'
    | 'commander'
    | 'competitive'
    | 'compound-eyes'
    | 'contrary'
    | 'corrosion'
    | 'costar'
    | 'cotton-down'
    | 'cud-chew'
    | 'curious-medicine'
    | 'cursed-body'
    | 'cute-charm'
    | 'damp'
    | 'dancer'
    | 'dark-aura'
    | 'dauntless-shield'
    | 'dazzling'
    | 'defeatist'
    | 'defiant'
    | 'delta-stream'
    | 'desolate-land'
    | 'disguise'
    | 'download'
    | 'dragonize'
    | 'dragons-maw'
    | 'drizzle'
    | 'drought'
    | 'dry-skin'
    | 'early-bird'
    | 'earth-eater'
    | 'eelevate'
    | 'effect-spore'
    | 'electric-surge'
    | 'electromorphosis'
    | 'embody-aspect'
    | 'emergency-exit'
    | 'fairy-aura'
    | 'filter'
    | 'fire-mane'
    | 'flame-body'
    | 'flare-boost'
    | 'flash-fire'
    | 'flower-gift'
    | 'flower-veil'
    | 'fluffy'
    | 'forecast'
    | 'forewarn'
    | 'friend-guard'
    | 'frisk'
    | 'full-metal-body'
    | 'fur-coat'
    | 'gale-wings'
    | 'galvanize'
    | 'gluttony'
    | 'good-as-gold'
    | 'gooey'
    | 'gorilla-tactics'
    | 'grass-pelt'
    | 'grassy-surge'
    | 'grim-neigh'
    | 'guard-dog'
    | 'gulp-missile'
    | 'guts'
    | 'hadron-engine'
    | 'harvest'
    | 'healer'
    | 'heatproof'
    | 'heavy-metal'
    | 'honey-gather'
    | 'hospitality'
    | 'huge-power'
    | 'hunger-switch'
    | 'hustle'
    | 'hydration'
    | 'hyper-cutter'
    | 'ice-body'
    | 'ice-face'
    | 'ice-scales'
    | 'illuminate'
    | 'illusion'
    | 'immunity'
    | 'imposter'
    | 'infiltrator'
    | 'innards-out'
    | 'inner-focus'
    | 'insomnia'
    | 'intimidate'
    | 'intrepid-sword'
    | 'iron-barbs'
    | 'iron-fist'
    | 'justified'
    | 'keen-eye'
    | 'klutz'
    | 'leaf-guard'
    | 'levitate'
    | 'libero'
    | 'light-metal'
    | 'lightning-rod'
    | 'limber'
    | 'lingering-aroma'
    | 'liquid-ooze'
    | 'liquid-voice'
    | 'long-reach'
    | 'magic-bounce'
    | 'magic-guard'
    | 'magician'
    | 'magma-armor'
    | 'magnet-pull'
    | 'marvel-scale'
    | 'mega-launcher'
    | 'mega-sol'
    | 'merciless'
    | 'mimicry'
    | 'minds-eye'
    | 'minus'
    | 'mirror-armor'
    | 'misty-surge'
    | 'mold-breaker'
    | 'moody'
    | 'motor-drive'
    | 'moxie'
    | 'multiscale'
    | 'multitype'
    | 'mummy'
    | 'mycelium-might'
    | 'natural-cure'
    | 'neuroforce'
    | 'neutralizing-gas'
    | 'no-guard'
    | 'normalize'
    | 'oblivious'
    | 'opportunist'
    | 'orichalcum-pulse'
    | 'overcoat'
    | 'overgrow'
    | 'own-tempo'
    | 'parental-bond'
    | 'pastel-veil'
    | 'perish-body'
    | 'pickpocket'
    | 'pickup'
    | 'piercing-drill'
    | 'pixilate'
    | 'plus'
    | 'poison-heal'
    | 'poison-point'
    | 'poison-puppeteer'
    | 'poison-touch'
    | 'power-construct'
    | 'power-of-alchemy'
    | 'power-spot'
    | 'prankster'
    | 'pressure'
    | 'primordial-sea'
    | 'prism-armor'
    | 'propeller-tail'
    | 'protean'
    | 'protosynthesis'
    | 'psychic-surge'
    | 'punk-rock'
    | 'pure-power'
    | 'purifying-salt'
    | 'quark-drive'
    | 'queenly-majesty'
    | 'quick-draw'
    | 'quick-feet'
    | 'rain-dish'
    | 'rattled'
    | 'receiver'
    | 'reckless'
    | 'refrigerate'
    | 'regenerator'
    | 'ripen'
    | 'rivalry'
    | 'rks-system'
    | 'rock-head'
    | 'rocky-payload'
    | 'rough-skin'
    | 'run-away'
    | 'sand-force'
    | 'sand-rush'
    | 'sand-spit'
    | 'sand-stream'
    | 'sand-veil'
    | 'sap-sipper'
    | 'schooling'
    | 'scrappy'
    | 'screen-cleaner'
    | 'seed-sower'
    | 'serene-grace'
    | 'shadow-shield'
    | 'shadow-tag'
    | 'sharpness'
    | 'shed-skin'
    | 'sheer-force'
    | 'shell-armor'
    | 'shield-dust'
    | 'shields-down'
    | 'simple'
    | 'skill-link'
    | 'slow-start'
    | 'slush-rush'
    | 'sniper'
    | 'snow-cloak'
    | 'snow-warning'
    | 'solar-power'
    | 'solid-rock'
    | 'soul-heart'
    | 'soundproof'
    | 'speed-boost'
    | 'spicy-spray'
    | 'stakeout'
    | 'stall'
    | 'stalwart'
    | 'stamina'
    | 'stance-change'
    | 'static'
    | 'steadfast'
    | 'steam-engine'
    | 'steelworker'
    | 'steely-spirit'
    | 'stench'
    | 'sticky-hold'
    | 'storm-drain'
    | 'strong-jaw'
    | 'sturdy'
    | 'suction-cups'
    | 'super-luck'
    | 'supersweet-syrup'
    | 'supreme-overlord'
    | 'surge-surfer'
    | 'swarm'
    | 'sweet-veil'
    | 'swift-swim'
    | 'sword-of-ruin'
    | 'symbiosis'
    | 'synchronize'
    | 'tablets-of-ruin'
    | 'tangled-feet'
    | 'tangling-hair'
    | 'technician'
    | 'telepathy'
    | 'tera-shell'
    | 'tera-shift'
    | 'teraform-zero'
    | 'teravolt'
    | 'thermal-exchange'
    | 'thick-fat'
    | 'tinted-lens'
    | 'torrent'
    | 'tough-claws'
    | 'toxic-boost'
    | 'toxic-chain'
    | 'toxic-debris'
    | 'trace'
    | 'transistor'
    | 'triage'
    | 'truant'
    | 'turboblaze'
    | 'unaware'
    | 'unburden'
    | 'unnerve'
    | 'unseen-fist'
    | 'vessel-of-ruin'
    | 'victory-star'
    | 'vital-spirit'
    | 'volt-absorb'
    | 'wandering-spirit'
    | 'water-absorb'
    | 'water-bubble'
    | 'water-compaction'
    | 'water-veil'
    | 'weak-armor'
    | 'well-baked-body'
    | 'white-smoke'
    | 'wimp-out'
    | 'wind-power'
    | 'wind-rider'
    | 'wonder-guard'
    | 'wonder-skin'
    | 'zen-mode'
    | 'zero-to-hero';
// GENERATED-SLUGS:AbilitySlug:END

// GENERATED-SLUGS:ItemSlug:BEGIN -- regenerated by this dataset's own pokeapi/*.ts fetch script, do not edit by hand.
export type ItemSlug =
    | 'absorb-bulb'
    | 'adamant-orb'
    | 'aguav-berry'
    | 'air-balloon'
    | 'air-mail'
    | 'amulet-coin'
    | 'antidote'
    | 'apicot-berry'
    | 'aspear-berry'
    | 'awakening'
    | 'babiri-berry'
    | 'balm-mushroom'
    | 'bead-mail'
    | 'berry-juice'
    | 'big-mushroom'
    | 'big-nugget'
    | 'big-pearl'
    | 'big-root'
    | 'binding-band'
    | 'black-belt'
    | 'black-glasses'
    | 'black-sludge'
    | 'bloom-mail'
    | 'blue-scarf'
    | 'brick-mail'
    | 'bridge-mail-d'
    | 'bridge-mail-m'
    | 'bridge-mail-s'
    | 'bridge-mail-t'
    | 'bridge-mail-v'
    | 'bright-powder'
    | 'bubble-mail'
    | 'bug-gem'
    | 'burn-drive'
    | 'burn-heal'
    | 'casteliacone'
    | 'cell-battery'
    | 'charcoal'
    | 'charti-berry'
    | 'cheri-berry'
    | 'chesto-berry'
    | 'chilan-berry'
    | 'chill-drive'
    | 'choice-band'
    | 'choice-scarf'
    | 'choice-specs'
    | 'chople-berry'
    | 'cleanse-tag'
    | 'coba-berry'
    | 'colbur-berry'
    | 'comet-shard'
    | 'custap-berry'
    | 'damp-rock'
    | 'dark-gem'
    | 'deep-sea-scale'
    | 'deep-sea-tooth'
    | 'destiny-knot'
    | 'dire-hit'
    | 'douse-drive'
    | 'draco-plate'
    | 'dragon-fang'
    | 'dragon-gem'
    | 'dread-plate'
    | 'dream-mail'
    | 'earth-plate'
    | 'eject-button'
    | 'electric-gem'
    | 'energy-powder'
    | 'energy-root'
    | 'enigma-berry'
    | 'everstone'
    | 'eviolite'
    | 'exp-share'
    | 'expert-belt'
    | 'fab-mail'
    | 'favored-mail'
    | 'fighting-gem'
    | 'figy-berry'
    | 'fire-gem'
    | 'fist-plate'
    | 'flame-mail'
    | 'flame-orb'
    | 'flame-plate'
    | 'float-stone'
    | 'flying-gem'
    | 'focus-band'
    | 'focus-sash'
    | 'fresh-water'
    | 'full-heal'
    | 'full-incense'
    | 'full-restore'
    | 'ganlon-berry'
    | 'ghost-gem'
    | 'glitter-mail'
    | 'grass-gem'
    | 'grass-mail'
    | 'green-scarf'
    | 'greet-mail'
    | 'grip-claw'
    | 'griseous-orb'
    | 'ground-gem'
    | 'guard-spec'
    | 'haban-berry'
    | 'harbor-mail'
    | 'hard-stone'
    | 'heal-powder'
    | 'heart-mail'
    | 'heat-rock'
    | 'hyper-potion'
    | 'iapapa-berry'
    | 'ice-gem'
    | 'ice-heal'
    | 'icicle-plate'
    | 'icy-rock'
    | 'inquiry-mail'
    | 'insect-plate'
    | 'iron-ball'
    | 'iron-plate'
    | 'jaboca-berry'
    | 'kasib-berry'
    | 'kebia-berry'
    | 'king-s-rock'
    | 'lagging-tail'
    | 'lansat-berry'
    | 'lava-cookie'
    | 'lax-incense'
    | 'leek'
    | 'leftovers'
    | 'lemonade'
    | 'leppa-berry'
    | 'liechi-berry'
    | 'life-orb'
    | 'light-ball'
    | 'light-clay'
    | 'like-mail'
    | 'luck-incense'
    | 'lucky-egg'
    | 'lucky-punch'
    | 'lum-berry'
    | 'lustrous-orb'
    | 'macho-brace'
    | 'magnet'
    | 'mago-berry'
    | 'max-potion'
    | 'meadow-plate'
    | 'mech-mail'
    | 'mental-herb'
    | 'metal-coat'
    | 'metal-powder'
    | 'metronome'
    | 'micle-berry'
    | 'mind-plate'
    | 'miracle-seed'
    | 'moomoo-milk'
    | 'mosaic-mail'
    | 'muscle-band'
    | 'mystic-water'
    | 'never-melt-ice'
    | 'normal-gem'
    | 'nugget'
    | 'occa-berry'
    | 'odd-incense'
    | 'old-gateau'
    | 'oran-berry'
    | 'orange-mail'
    | 'paralyze-heal'
    | 'pass-orb'
    | 'passho-berry'
    | 'payapa-berry'
    | 'pearl'
    | 'pearl-string'
    | 'pecha-berry'
    | 'persim-berry'
    | 'petaya-berry'
    | 'pink-scarf'
    | 'poison-barb'
    | 'poison-gem'
    | 'potion'
    | 'power-anklet'
    | 'power-band'
    | 'power-belt'
    | 'power-bracer'
    | 'power-herb'
    | 'power-lens'
    | 'power-weight'
    | 'pretty-wing'
    | 'psychic-gem'
    | 'pure-incense'
    | 'quick-claw'
    | 'quick-powder'
    | 'rare-bone'
    | 'rawst-berry'
    | 'razor-claw'
    | 'razor-fang'
    | 'red-card'
    | 'red-scarf'
    | 'relic-band'
    | 'relic-copper'
    | 'relic-crown'
    | 'relic-gold'
    | 'relic-silver'
    | 'relic-statue'
    | 'relic-vase'
    | 'reply-mail'
    | 'retro-mail'
    | 'rindo-berry'
    | 'ring-target'
    | 'rock-gem'
    | 'rock-incense'
    | 'rocky-helmet'
    | 'rose-incense'
    | 'rowap-berry'
    | 'rsvp-mail'
    | 'salac-berry'
    | 'scope-lens'
    | 'sea-incense'
    | 'shadow-mail'
    | 'sharp-beak'
    | 'shed-shell'
    | 'shell-bell'
    | 'shock-drive'
    | 'shuca-berry'
    | 'silk-scarf'
    | 'silver-powder'
    | 'sitrus-berry'
    | 'sky-plate'
    | 'smoke-ball'
    | 'smooth-rock'
    | 'snow-mail'
    | 'soda-pop'
    | 'soft-sand'
    | 'soothe-bell'
    | 'soul-dew'
    | 'space-mail'
    | 'spell-tag'
    | 'splash-plate'
    | 'spooky-plate'
    | 'star-piece'
    | 'stardust'
    | 'starf-berry'
    | 'steel-gem'
    | 'steel-mail'
    | 'sticky-barb'
    | 'stone-plate'
    | 'super-potion'
    | 'sweet-heart'
    | 'tanga-berry'
    | 'thanks-mail'
    | 'thick-club'
    | 'tiny-mushroom'
    | 'toxic-orb'
    | 'toxic-plate'
    | 'tropic-mail'
    | 'tunnel-mail'
    | 'twisted-spoon'
    | 'wacan-berry'
    | 'water-gem'
    | 'wave-incense'
    | 'wave-mail'
    | 'white-herb'
    | 'wide-lens'
    | 'wiki-berry'
    | 'wise-glasses'
    | 'wood-mail'
    | 'x-accuracy'
    | 'x-attack'
    | 'x-defense'
    | 'x-sp-atk'
    | 'x-sp-def'
    | 'x-speed'
    | 'yache-berry'
    | 'yellow-scarf'
    | 'zap-plate'
    | 'zoom-lens';
// GENERATED-SLUGS:ItemSlug:END
