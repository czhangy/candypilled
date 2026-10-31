type GameCheckConfig = {
    // Folder under src/lib/data/ holding this game's locations/ directory.
    dataFolder: string;
    // Locations that intentionally have no met-table entry (the met index
    // doesn't cover gyms, Elite Four rooms, or the champion's room).
    unmappedLocations: string[];
    // False skips every check for a game still being onboarded.
    isEnabled: boolean;
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
        dataFolder: 'ruby-sapphire',
        unmappedLocations: HOENN_UNMAPPED_LOCATIONS,
        isEnabled: true,
    },
    Sapphire: {
        dataFolder: 'ruby-sapphire',
        unmappedLocations: HOENN_UNMAPPED_LOCATIONS,
        isEnabled: true,
    },
    Emerald: {
        dataFolder: 'emerald',
        unmappedLocations: [
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
            'Trick House',
            "Wallace's Room",
        ],
        isEnabled: true,
    },
    Diamond: {
        dataFolder: 'diamond-pearl',
        unmappedLocations: DIAMOND_PEARL_UNMAPPED_LOCATIONS,
        isEnabled: true,
    },
    Pearl: {
        dataFolder: 'diamond-pearl',
        unmappedLocations: DIAMOND_PEARL_UNMAPPED_LOCATIONS,
        isEnabled: true,
    },
    Platinum: {
        dataFolder: 'platinum',
        unmappedLocations: SINNOH_UNMAPPED_LOCATIONS,
        isEnabled: true,
    },
    'Renegade Platinum': {
        dataFolder: 'renegade-platinum',
        unmappedLocations: SINNOH_UNMAPPED_LOCATIONS,
        isEnabled: true,
    },
};
