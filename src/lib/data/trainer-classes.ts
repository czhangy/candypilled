import { TrainerClass } from '@/lib/static/types';

// Every trainer class in the game, keyed by slug. Classes fielded by a
// single named individual (Leader, Commander, Galactic Boss, PKMN Trainer)
// get one entry per person instead of a shared entry, since their sprite
// comes from the person, not the class — displayName stays the generic
// class label (the person's own name lives in Battle.name).
export const TRAINER_CLASSES: Record<string, TrainerClass> = {
    'ace-trainer-f': {
        displayName: 'Ace Trainer',
        spriteSlug: 'ace-trainer-f',
    },
    'ace-trainer-m': {
        displayName: 'Ace Trainer',
        spriteSlug: 'ace-trainer-m',
    },
    'ace-trainer-snow-f': {
        displayName: 'Ace Trainer',
        spriteSlug: 'ace-trainer-snow-f',
    },
    'ace-trainer-snow-m': {
        displayName: 'Ace Trainer',
        spriteSlug: 'ace-trainer-snow-m',
    },
    'aqua-admin-matt': {
        displayName: 'Aqua Admin',
        spriteSlug: 'matt',
    },
    'aqua-admin-shelly': {
        displayName: 'Aqua Admin',
        spriteSlug: 'shelly',
    },
    'aqua-leader-archie': {
        displayName: 'Aqua Leader',
        spriteSlug: 'archie',
    },
    'arcade-star-dahlia': {
        displayName: 'Arcade Star',
        spriteSlug: 'dahlia',
    },
    'aroma-lady': {
        displayName: 'Aroma Lady',
        spriteSlug: 'aroma-lady',
    },
    artist: {
        displayName: 'Artist',
        spriteSlug: 'artist',
    },
    'battle-girl': {
        displayName: 'Battle Girl',
        spriteSlug: 'battle-girl',
    },
    beauty: {
        displayName: 'Beauty',
        spriteSlug: 'beauty',
    },
    'belle-and-pa': {
        displayName: 'Belle & Pa',
        spriteSlug: 'belle-and-pa',
    },
    'bird-keeper': {
        displayName: 'Bird Keeper',
        spriteSlug: 'bird-keeper',
    },
    'black-belt': {
        displayName: 'Black Belt',
        spriteSlug: 'black-belt',
    },
    'bug-catcher': {
        displayName: 'Bug Catcher',
        spriteSlug: 'bug-catcher',
    },
    'bug-maniac': {
        displayName: 'Bug Maniac',
        spriteSlug: 'bug-maniac',
    },
    cameraman: {
        displayName: 'Cameraman',
        spriteSlug: 'cameraman',
    },
    camper: {
        displayName: 'Camper',
        spriteSlug: 'camper',
    },
    'castle-valet-darach': {
        displayName: 'Castle Valet',
        spriteSlug: 'darach',
    },
    'champion-cynthia': {
        displayName: 'Champion',
        spriteSlug: 'cynthia',
    },
    'champion-steven': {
        displayName: 'Champion',
        spriteSlug: 'steven',
    },
    collector: {
        displayName: 'Collector',
        spriteSlug: 'collector',
    },
    'commander-jupiter': {
        displayName: 'Commander',
        spriteSlug: 'jupiter',
    },
    'commander-mars': {
        displayName: 'Commander',
        spriteSlug: 'mars',
    },
    'commander-saturn': {
        displayName: 'Commander',
        spriteSlug: 'saturn',
    },
    'cooltrainer-f': {
        displayName: 'Cooltrainer',
        spriteSlug: 'cooltrainer-f',
    },
    'cooltrainer-m': {
        displayName: 'Cooltrainer',
        spriteSlug: 'cooltrainer-m',
    },
    cowgirl: {
        displayName: 'Cowgirl',
        spriteSlug: 'cowgirl',
    },
    'cyclist-f': {
        displayName: 'Cyclist',
        spriteSlug: 'cyclist-f',
    },
    'cyclist-m': {
        displayName: 'Cyclist',
        spriteSlug: 'cyclist-m',
    },
    'double-team': {
        displayName: 'Double Team',
        spriteSlug: 'double-team',
    },
    'dragon-tamer': {
        displayName: 'Dragon Tamer',
        spriteSlug: 'dragon-tamer',
    },
    'elite-four-aaron': {
        displayName: 'Elite Four',
        spriteSlug: 'aaron',
    },
    'elite-four-bertha': {
        displayName: 'Elite Four',
        spriteSlug: 'bertha',
    },
    'elite-four-drake': {
        displayName: 'Elite Four',
        spriteSlug: 'drake',
    },
    'elite-four-flint': {
        displayName: 'Elite Four',
        spriteSlug: 'flint',
    },
    'elite-four-glacia': {
        displayName: 'Elite Four',
        spriteSlug: 'glacia',
    },
    'elite-four-lucian': {
        displayName: 'Elite Four',
        spriteSlug: 'lucian',
    },
    'elite-four-phoebe': {
        displayName: 'Elite Four',
        spriteSlug: 'phoebe',
    },
    'elite-four-sidney': {
        displayName: 'Elite Four',
        spriteSlug: 'sidney',
    },
    'expert-f': {
        displayName: 'Expert',
        spriteSlug: 'expert-f',
    },
    'expert-m': {
        displayName: 'Expert',
        spriteSlug: 'expert-m',
    },
    fisherman: {
        displayName: 'Fisherman',
        spriteSlug: 'fisherman',
    },
    'galactic-boss-cyrus': {
        displayName: 'Galactic Boss',
        spriteSlug: 'cyrus',
    },
    'galactic-grunt-f': {
        displayName: 'Galactic Grunt',
        spriteSlug: 'galactic-grunt-f',
    },
    'galactic-grunt-m': {
        displayName: 'Galactic Grunt',
        spriteSlug: 'galactic-grunt-m',
    },
    gentleman: {
        displayName: 'Gentleman',
        spriteSlug: 'gentleman',
    },
    guitarist: {
        displayName: 'Guitarist',
        spriteSlug: 'guitarist',
    },
    'hex-maniac': {
        displayName: 'Hex Maniac',
        spriteSlug: 'hex-maniac',
    },
    hiker: {
        displayName: 'Hiker',
        spriteSlug: 'hiker',
    },
    interviewers: {
        displayName: 'Interviewer',
        spriteSlug: 'interviewers',
    },
    jogger: {
        displayName: 'Jogger',
        spriteSlug: 'jogger',
    },
    kindler: {
        displayName: 'Kindler',
        spriteSlug: 'kindler',
    },
    lady: {
        displayName: 'Lady',
        spriteSlug: 'lady',
    },
    lass: {
        displayName: 'Lass',
        spriteSlug: 'lass',
    },
    'leader-brawly': {
        displayName: 'Leader',
        spriteSlug: 'brawly',
    },
    'leader-byron': {
        displayName: 'Leader',
        spriteSlug: 'byron',
    },
    'leader-candice': {
        displayName: 'Leader',
        spriteSlug: 'candice',
    },
    'leader-fantina': {
        displayName: 'Leader',
        spriteSlug: 'fantina',
    },
    'leader-flannery': {
        displayName: 'Leader',
        spriteSlug: 'flannery',
    },
    'leader-gardenia': {
        displayName: 'Leader',
        spriteSlug: 'gardenia',
    },
    'leader-maylene': {
        displayName: 'Leader',
        spriteSlug: 'maylene',
    },
    'leader-norman': {
        displayName: 'Leader',
        spriteSlug: 'norman',
    },
    'leader-roark': {
        displayName: 'Leader',
        spriteSlug: 'roark',
    },
    'leader-roxanne': {
        displayName: 'Leader',
        spriteSlug: 'roxanne',
    },
    'leader-tate-and-liza': {
        displayName: 'Leader',
        spriteSlug: 'tate-and-liza',
    },
    'leader-volkner': {
        displayName: 'Leader',
        spriteSlug: 'volkner',
    },
    'leader-wake': {
        displayName: 'Leader',
        spriteSlug: 'wake',
    },
    'leader-wallace': {
        displayName: 'Leader',
        spriteSlug: 'wallace',
    },
    'leader-wattson': {
        displayName: 'Leader',
        spriteSlug: 'wattson',
    },
    'leader-winona': {
        displayName: 'Leader',
        spriteSlug: 'winona',
    },
    'magma-admin-courtney': {
        displayName: 'Magma Admin',
        spriteSlug: 'courtney',
    },
    'magma-admin-tabitha': {
        displayName: 'Magma Admin',
        spriteSlug: 'tabitha',
    },
    'magma-leader-maxie': {
        displayName: 'Magma Leader',
        spriteSlug: 'maxie',
    },
    'ninja-boy': {
        displayName: 'Ninja Boy',
        spriteSlug: 'ninja-boy',
    },
    'old-couple': {
        displayName: 'Old Couple',
        spriteSlug: 'old-couple',
    },
    'parasol-lady': {
        displayName: 'Parasol Lady',
        spriteSlug: 'parasol-lady',
    },
    pi: {
        displayName: 'PI',
        spriteSlug: 'pi',
    },
    picnicker: {
        displayName: 'Picnicker',
        spriteSlug: 'picnicker',
    },
    'pkmn-breeder-f': {
        displayName: 'PKMN Breeder',
        spriteSlug: 'pkmn-breeder-f',
    },
    'pkmn-breeder-m': {
        displayName: 'PKMN Breeder',
        spriteSlug: 'pkmn-breeder-m',
    },
    'pkmn-ranger-f': {
        displayName: 'PKMN Ranger',
        spriteSlug: 'pkmn-ranger-f',
    },
    'pkmn-ranger-m': {
        displayName: 'PKMN Ranger',
        spriteSlug: 'pkmn-ranger-m',
    },
    'pkmn-trainer-barry': {
        displayName: 'PKMN Trainer',
        spriteSlug: 'barry',
    },
    'pkmn-trainer-brendan': {
        displayName: 'PKMN Trainer',
        spriteSlug: 'brendan',
    },
    'pkmn-trainer-cheryl': {
        displayName: 'PKMN Trainer',
        spriteSlug: 'cheryl',
    },
    'pkmn-trainer-dawn': {
        displayName: 'PKMN Trainer',
        spriteSlug: 'dawn',
    },
    'pkmn-trainer-lucas': {
        displayName: 'PKMN Trainer',
        spriteSlug: 'lucas',
    },
    'pkmn-trainer-marley': {
        displayName: 'PKMN Trainer',
        spriteSlug: 'marley',
    },
    'pkmn-trainer-may': {
        displayName: 'PKMN Trainer',
        spriteSlug: 'may',
    },
    'pkmn-trainer-mira': {
        displayName: 'PKMN Trainer',
        spriteSlug: 'mira',
    },
    'pkmn-trainer-riley': {
        displayName: 'PKMN Trainer',
        spriteSlug: 'riley',
    },
    'pkmn-trainer-wally': {
        displayName: 'PKMN Trainer',
        spriteSlug: 'wally',
    },
    'poke-kid': {
        displayName: 'Poké Kid',
        spriteSlug: 'poke-kid',
    },
    'poke-maniac': {
        displayName: 'Poké Maniac',
        spriteSlug: 'pokemaniac',
    },
    'pokefan-f': {
        displayName: 'Pokéfan',
        spriteSlug: 'pokefan-f',
    },
    'pokefan-m': {
        displayName: 'Pokéfan',
        spriteSlug: 'pokefan-m',
    },
    policeman: {
        displayName: 'Policeman',
        spriteSlug: 'policeman',
    },
    'psychic-f': {
        displayName: 'Psychic',
        spriteSlug: 'psychic-f',
    },
    'psychic-m': {
        displayName: 'Psychic',
        spriteSlug: 'psychic-m',
    },
    rancher: {
        displayName: 'Rancher',
        spriteSlug: 'rancher',
    },
    reporter: {
        displayName: 'Reporter',
        spriteSlug: 'reporter',
    },
    'rich-boy': {
        displayName: 'Rich Boy',
        spriteSlug: 'rich-boy',
    },
    roughneck: {
        displayName: 'Roughneck',
        spriteSlug: 'roughneck',
    },
    'ruin-maniac': {
        displayName: 'Ruin Maniac',
        spriteSlug: 'ruin-maniac',
    },
    sailor: {
        displayName: 'Sailor',
        spriteSlug: 'sailor',
    },
    'school-kid-f': {
        displayName: 'School Kid',
        spriteSlug: 'school-kid-f',
    },
    'school-kid-m': {
        displayName: 'School Kid',
        spriteSlug: 'school-kid-m',
    },
    scientist: {
        displayName: 'Scientist',
        spriteSlug: 'scientist',
    },
    'sis-and-bro': {
        displayName: 'Sis and Bro',
        spriteSlug: 'sis-and-bro',
    },
    'skier-f': {
        displayName: 'Skier',
        spriteSlug: 'skier-f',
    },
    'skier-m': {
        displayName: 'Skier',
        spriteSlug: 'skier-m',
    },
    socialite: {
        displayName: 'Socialite',
        spriteSlug: 'socialite',
    },
    'sr-and-jr': {
        displayName: 'Sr. and Jr.',
        spriteSlug: 'sr-and-jr',
    },
    'swimmer-f': {
        displayName: 'Swimmer',
        spriteSlug: 'swimmer-f',
    },
    'swimmer-m': {
        displayName: 'Swimmer',
        spriteSlug: 'swimmer-m',
    },
    'team-aqua-grunt-f': {
        displayName: 'Team Aqua Grunt',
        spriteSlug: 'team-aqua-grunt-f',
    },
    'team-aqua-grunt-m': {
        displayName: 'Team Aqua Grunt',
        spriteSlug: 'team-aqua-grunt-m',
    },
    'team-magma-grunt-f': {
        displayName: 'Team Magma Grunt',
        spriteSlug: 'team-magma-grunt-f',
    },
    'team-magma-grunt-m': {
        displayName: 'Team Magma Grunt',
        spriteSlug: 'team-magma-grunt-m',
    },
    'triathlete-biker-f': {
        displayName: 'Triathlete',
        spriteSlug: 'triathlete-biker-f',
    },
    'triathlete-biker-m': {
        displayName: 'Triathlete',
        spriteSlug: 'triathlete-biker-m',
    },
    'triathlete-runner-f': {
        displayName: 'Triathlete',
        spriteSlug: 'triathlete-runner-f',
    },
    'triathlete-runner-m': {
        displayName: 'Triathlete',
        spriteSlug: 'triathlete-runner-m',
    },
    'triathlete-swimmer-f': {
        displayName: 'Triathlete',
        spriteSlug: 'triathlete-swimmer-f',
    },
    'triathlete-swimmer-m': {
        displayName: 'Triathlete',
        spriteSlug: 'triathlete-swimmer-m',
    },
    'tuber-f': {
        displayName: 'Tuber',
        spriteSlug: 'tuber-f',
    },
    'tuber-m': {
        displayName: 'Tuber',
        spriteSlug: 'tuber-m',
    },
    twins: {
        displayName: 'Twins',
        spriteSlug: 'twins',
    },
    veteran: {
        displayName: 'Veteran',
        spriteSlug: 'veteran',
    },
    waitress: {
        displayName: 'Waitress',
        spriteSlug: 'waitress',
    },
    worker: {
        displayName: 'Worker',
        spriteSlug: 'worker',
    },
    'young-couple': {
        displayName: 'Young Couple',
        spriteSlug: 'young-couple',
    },
    youngster: {
        displayName: 'Youngster',
        spriteSlug: 'youngster',
    },
};
