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
    'elite-four-flint': {
        displayName: 'Elite Four',
        spriteSlug: 'flint',
    },
    'elite-four-lucian': {
        displayName: 'Elite Four',
        spriteSlug: 'lucian',
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
    hiker: {
        displayName: 'Hiker',
        spriteSlug: 'hiker',
    },
    jogger: {
        displayName: 'Jogger',
        spriteSlug: 'jogger',
    },
    lady: {
        displayName: 'Lady',
        spriteSlug: 'lady',
    },
    lass: {
        displayName: 'Lass',
        spriteSlug: 'lass',
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
    'leader-gardenia': {
        displayName: 'Leader',
        spriteSlug: 'gardenia',
    },
    'leader-maylene': {
        displayName: 'Leader',
        spriteSlug: 'maylene',
    },
    'leader-roark': {
        displayName: 'Leader',
        spriteSlug: 'roark',
    },
    'leader-volkner': {
        displayName: 'Leader',
        spriteSlug: 'volkner',
    },
    'leader-wake': {
        displayName: 'Leader',
        spriteSlug: 'wake',
    },
    'ninja-boy': {
        displayName: 'Ninja Boy',
        spriteSlug: 'ninja-boy',
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
    'pkmn-trainer-mira': {
        displayName: 'PKMN Trainer',
        spriteSlug: 'mira',
    },
    'pkmn-trainer-riley': {
        displayName: 'PKMN Trainer',
        spriteSlug: 'riley',
    },
    'poke-kid': {
        displayName: 'Poké Kid',
        spriteSlug: 'poke-kid',
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
    'swimmer-f': {
        displayName: 'Swimmer',
        spriteSlug: 'swimmer-f',
    },
    'swimmer-m': {
        displayName: 'Swimmer',
        spriteSlug: 'swimmer-m',
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
