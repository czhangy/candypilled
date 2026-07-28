import { TrainerClass } from '@/lib/static/types';

// Every trainer class in the game, keyed by slug. Classes fielded by a
// single named individual (Leader, Commander, Galactic Boss, PKMN Trainer)
// get one entry per person instead of a shared entry, since their gender
// and sprite come from the person, not the class — displayName stays the
// generic class label (the person's own name lives in Battle.name).
export const TRAINER_CLASSES: Record<string, TrainerClass> = {
    'ace-trainer-f': {
        displayName: 'Ace Trainer',
        gender: 'female',
        spriteSlug: 'ace-trainer-f',
    },
    'ace-trainer-m': {
        displayName: 'Ace Trainer',
        gender: 'male',
        spriteSlug: 'ace-trainer-m',
    },
    'ace-trainer-snow-f': {
        displayName: 'Ace Trainer',
        gender: 'female',
        spriteSlug: 'ace-trainer-snow-f',
    },
    'ace-trainer-snow-m': {
        displayName: 'Ace Trainer',
        gender: 'male',
        spriteSlug: 'ace-trainer-snow-m',
    },
    'aroma-lady': {
        displayName: 'Aroma Lady',
        gender: 'female',
        spriteSlug: 'aroma-lady',
    },
    artist: {
        displayName: 'Artist',
        gender: 'male',
        spriteSlug: 'artist',
    },
    'battle-girl': {
        displayName: 'Battle Girl',
        gender: 'female',
        spriteSlug: 'battle-girl',
    },
    beauty: {
        displayName: 'Beauty',
        gender: 'female',
        spriteSlug: 'beauty',
    },
    'belle-and-pa': {
        displayName: 'Belle & Pa',
        gender: 'male',
        spriteSlug: 'belle-and-pa',
    },
    'bird-keeper': {
        displayName: 'Bird Keeper',
        gender: 'male',
        spriteSlug: 'bird-keeper',
    },
    'black-belt': {
        displayName: 'Black Belt',
        gender: 'male',
        spriteSlug: 'black-belt',
    },
    'bug-catcher': {
        displayName: 'Bug Catcher',
        gender: 'male',
        spriteSlug: 'bug-catcher',
    },
    camper: {
        displayName: 'Camper',
        gender: 'male',
        spriteSlug: 'camper',
    },
    collector: {
        displayName: 'Collector',
        gender: 'male',
        spriteSlug: 'collector',
    },
    'commander-jupiter': {
        displayName: 'Commander',
        gender: 'female',
        spriteSlug: 'jupiter',
    },
    'commander-mars': {
        displayName: 'Commander',
        gender: 'female',
        spriteSlug: 'mars',
    },
    'commander-saturn': {
        displayName: 'Commander',
        gender: 'male',
        spriteSlug: 'saturn',
    },
    cowgirl: {
        displayName: 'Cowgirl',
        gender: 'female',
        spriteSlug: 'cowgirl',
    },
    'cyclist-f': {
        displayName: 'Cyclist',
        gender: 'female',
        spriteSlug: 'cyclist-f',
    },
    'cyclist-m': {
        displayName: 'Cyclist',
        gender: 'male',
        spriteSlug: 'cyclist-m',
    },
    'double-team': {
        displayName: 'Double Team',
        gender: 'male',
        spriteSlug: 'double-team',
    },
    'dragon-tamer': {
        displayName: 'Dragon Tamer',
        gender: 'male',
        spriteSlug: 'dragon-tamer',
    },
    fisherman: {
        displayName: 'Fisherman',
        gender: 'male',
        spriteSlug: 'fisherman',
    },
    'galactic-boss-cyrus': {
        displayName: 'Galactic Boss',
        gender: 'male',
        spriteSlug: 'cyrus',
    },
    'galactic-grunt-f': {
        displayName: 'Galactic Grunt',
        gender: 'female',
        spriteSlug: 'galactic-grunt-f',
    },
    'galactic-grunt-m': {
        displayName: 'Galactic Grunt',
        gender: 'male',
        spriteSlug: 'galactic-grunt-m',
    },
    gentleman: {
        displayName: 'Gentleman',
        gender: 'male',
        spriteSlug: 'gentleman',
    },
    guitarist: {
        displayName: 'Guitarist',
        gender: 'male',
        spriteSlug: 'guitarist',
    },
    hiker: {
        displayName: 'Hiker',
        gender: 'male',
        spriteSlug: 'hiker',
    },
    jogger: {
        displayName: 'Jogger',
        gender: 'male',
        spriteSlug: 'jogger',
    },
    lady: {
        displayName: 'Lady',
        gender: 'female',
        spriteSlug: 'lady',
    },
    lass: {
        displayName: 'Lass',
        gender: 'female',
        spriteSlug: 'lass',
    },
    'leader-byron': {
        displayName: 'Leader',
        gender: 'male',
        spriteSlug: 'byron',
    },
    'leader-candice': {
        displayName: 'Leader',
        gender: 'female',
        spriteSlug: 'candice',
    },
    'leader-fantina': {
        displayName: 'Leader',
        gender: 'female',
        spriteSlug: 'fantina',
    },
    'leader-gardenia': {
        displayName: 'Leader',
        gender: 'female',
        spriteSlug: 'gardenia',
    },
    'leader-maylene': {
        displayName: 'Leader',
        gender: 'female',
        spriteSlug: 'maylene',
    },
    'leader-roark': {
        displayName: 'Leader',
        gender: 'male',
        spriteSlug: 'roark',
    },
    'leader-volkner': {
        displayName: 'Leader',
        gender: 'male',
        spriteSlug: 'volkner',
    },
    'leader-wake': {
        displayName: 'Leader',
        gender: 'male',
        spriteSlug: 'wake',
    },
    'ninja-boy': {
        displayName: 'Ninja Boy',
        gender: 'male',
        spriteSlug: 'ninja-boy',
    },
    'parasol-lady': {
        displayName: 'Parasol Lady',
        gender: 'female',
        spriteSlug: 'parasol-lady',
    },
    pi: {
        displayName: 'PI',
        gender: 'male',
        spriteSlug: 'pi',
    },
    picnicker: {
        displayName: 'Picnicker',
        gender: 'female',
        spriteSlug: 'picnicker',
    },
    'pkmn-breeder-f': {
        displayName: 'Pkmn Breeder',
        gender: 'female',
        spriteSlug: 'pkmn-breeder-f',
    },
    'pkmn-breeder-m': {
        displayName: 'Pkmn Breeder',
        gender: 'male',
        spriteSlug: 'pkmn-breeder-m',
    },
    'pkmn-ranger-f': {
        displayName: 'PKMN Ranger',
        gender: 'female',
        spriteSlug: 'pkmn-ranger-f',
    },
    'pkmn-ranger-m': {
        displayName: 'PKMN Ranger',
        gender: 'male',
        spriteSlug: 'pkmn-ranger-m',
    },
    'pkmn-trainer-barry': {
        displayName: 'PKMN Trainer',
        gender: 'male',
        spriteSlug: 'barry',
    },
    'poke-kid': {
        displayName: 'Poké Kid',
        gender: 'female',
        spriteSlug: 'poke-kid',
    },
    'pokefan-f': {
        displayName: 'Pokéfan',
        gender: 'female',
        spriteSlug: 'pokefan-f',
    },
    'pokefan-m': {
        displayName: 'Pokéfan',
        gender: 'male',
        spriteSlug: 'pokefan-m',
    },
    policeman: {
        displayName: 'Policeman',
        gender: 'male',
        spriteSlug: 'policeman',
    },
    'psychic-f': {
        displayName: 'Psychic',
        gender: 'female',
        spriteSlug: 'psychic-f',
    },
    'psychic-m': {
        displayName: 'Psychic',
        gender: 'male',
        spriteSlug: 'psychic-m',
    },
    rancher: {
        displayName: 'Rancher',
        gender: 'male',
        spriteSlug: 'rancher',
    },
    'rich-boy': {
        displayName: 'Rich Boy',
        gender: 'male',
        spriteSlug: 'rich-boy',
    },
    roughneck: {
        displayName: 'Roughneck',
        gender: 'male',
        spriteSlug: 'roughneck',
    },
    'ruin-maniac': {
        displayName: 'Ruin Maniac',
        gender: 'male',
        spriteSlug: 'ruin-maniac',
    },
    sailor: {
        displayName: 'Sailor',
        gender: 'male',
        spriteSlug: 'sailor',
    },
    'school-kid-f': {
        displayName: 'School Kid',
        gender: 'female',
        spriteSlug: 'school-kid-f',
    },
    'school-kid-m': {
        displayName: 'School Kid',
        gender: 'male',
        spriteSlug: 'school-kid-m',
    },
    scientist: {
        displayName: 'Scientist',
        gender: 'male',
        spriteSlug: 'scientist',
    },
    'skier-f': {
        displayName: 'Skier',
        gender: 'female',
        spriteSlug: 'skier-f',
    },
    'skier-m': {
        displayName: 'Skier',
        gender: 'male',
        spriteSlug: 'skier-m',
    },
    socialite: {
        displayName: 'Socialite',
        gender: 'female',
        spriteSlug: 'socialite',
    },
    'swimmer-f': {
        displayName: 'Swimmer',
        gender: 'female',
        spriteSlug: 'swimmer-f',
    },
    'swimmer-m': {
        displayName: 'Swimmer',
        gender: 'male',
        spriteSlug: 'swimmer-m',
    },
    'tuber-f': {
        displayName: 'Tuber',
        gender: 'female',
        spriteSlug: 'tuber-f',
    },
    'tuber-m': {
        displayName: 'Tuber',
        gender: 'male',
        spriteSlug: 'tuber-m',
    },
    twins: {
        displayName: 'Twins',
        gender: 'female',
        spriteSlug: 'twins',
    },
    veteran: {
        displayName: 'Veteran',
        gender: 'male',
        spriteSlug: 'veteran',
    },
    waiter: {
        displayName: 'Waiter',
        gender: 'male',
        spriteSlug: 'waiter',
    },
    waitress: {
        displayName: 'Waitress',
        gender: 'female',
        spriteSlug: 'waitress',
    },
    worker: {
        displayName: 'Worker',
        gender: 'male',
        spriteSlug: 'worker',
    },
    'young-couple': {
        displayName: 'Young Couple',
        gender: 'male',
        spriteSlug: 'young-couple',
    },
    youngster: {
        displayName: 'Youngster',
        gender: 'male',
        spriteSlug: 'youngster',
    },
};
