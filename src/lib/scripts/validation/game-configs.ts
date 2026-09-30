// Marks a game whose split audit covers every location.
export const AUDIT_COMPLETE = 'complete';

type GameCheckConfig = {
    // The last location, in Locations-tab (alphabetical) order, whose battle
    // and encounter-method splits are audited. AUDIT_COMPLETE once every
    // location is; null before the audit starts. check:data enforces method
    // splits up to here, and audit:apply advances it.
    auditedThrough: string | null;
    // Folder under src/lib/data/ holding this game's locations/ directory.
    dataFolder: string;
    // The last split, in game order, whose Split.locations has been trimmed
    // to only the locations required for it. AUDIT_COMPLETE once every split
    // is; null before the trim starts.
    trimmedThrough: string | null;
    // Locations that intentionally have no met-table entry (the met index
    // doesn't cover gyms, Elite Four rooms, or the champion's room).
    unmappedLocations: string[];
};

const HOENN_UNMAPPED_LOCATIONS = [
    'Dewford Gym',
    "Drake's Room",
    'Fortree Gym',
    "Glacia's Room",
    'Lavaridge Gym',
    'Mauville Gym',
    'Mossdeep Gym',
    'Petalburg Gym',
    "Phoebe's Room",
    'Rustboro Gym',
    "Sidney's Room",
    'Sootopolis Gym',
    "Steven's Room",
    'Trick House',
];

const SINNOH_UNMAPPED_LOCATIONS = [
    "Aaron's Room",
    "Bertha's Room",
    'Canalave Gym',
    "Cynthia's Room",
    'Eterna Gym',
    "Flint's Room",
    'Hearthome Gym',
    "Lucian's Room",
    'Oreburgh Gym',
    'Pastoria Gym',
    'Snowpoint Gym',
    'Sunyshore Gym',
    'Veilstone Gym',
];

// The Team Galactic Eterna Building's met index (122) debuted in Platinum,
// so a Diamond or Pearl save can never carry it.
const DIAMOND_PEARL_UNMAPPED_LOCATIONS = [
    ...SINNOH_UNMAPPED_LOCATIONS,
    'Team Galactic Eterna Building',
];

// Every registered game needs an entry here, keyed by Game.name.
export const GAME_CHECK_CONFIGS: Record<string, GameCheckConfig> = {
    Ruby: {
        auditedThrough: AUDIT_COMPLETE,
        dataFolder: 'ruby-sapphire',
        trimmedThrough: AUDIT_COMPLETE,
        unmappedLocations: HOENN_UNMAPPED_LOCATIONS,
    },
    Sapphire: {
        auditedThrough: AUDIT_COMPLETE,
        dataFolder: 'ruby-sapphire',
        trimmedThrough: AUDIT_COMPLETE,
        unmappedLocations: HOENN_UNMAPPED_LOCATIONS,
    },
    Emerald: {
        auditedThrough: null,
        dataFolder: 'emerald',
        trimmedThrough: null,
        unmappedLocations: [],
    },
    Diamond: {
        auditedThrough: AUDIT_COMPLETE,
        dataFolder: 'diamond-pearl',
        trimmedThrough: AUDIT_COMPLETE,
        unmappedLocations: DIAMOND_PEARL_UNMAPPED_LOCATIONS,
    },
    Pearl: {
        auditedThrough: AUDIT_COMPLETE,
        dataFolder: 'diamond-pearl',
        trimmedThrough: AUDIT_COMPLETE,
        unmappedLocations: DIAMOND_PEARL_UNMAPPED_LOCATIONS,
    },
    Platinum: {
        auditedThrough: AUDIT_COMPLETE,
        dataFolder: 'platinum',
        trimmedThrough: AUDIT_COMPLETE,
        unmappedLocations: SINNOH_UNMAPPED_LOCATIONS,
    },
    'Renegade Platinum': {
        auditedThrough: AUDIT_COMPLETE,
        dataFolder: 'renegade-platinum',
        trimmedThrough: AUDIT_COMPLETE,
        unmappedLocations: SINNOH_UNMAPPED_LOCATIONS,
    },
};

export const isLocationAudited = (
    auditedThrough: string | null,
    locationName: string
): boolean => {
    if (auditedThrough === null) return false;
    if (auditedThrough === AUDIT_COMPLETE) return true;
    return locationName.localeCompare(auditedThrough) <= 0;
};
