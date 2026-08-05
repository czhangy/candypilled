import { AiFlag, Nature } from '@/lib/static/enums';
import { BattleData } from '@/lib/static/types';

// Shared by Diamond and Pearl (see ../diamond/diamond.ts and
// ../pearl/pearl.ts) since gym/rival/Elite Four trainer data doesn't differ
// between the two versions. Populate with `npm run gen:battle diamond-pearl
// <location> ...`.
//
// trainerFlag values for generic (non-story) trainers are
// `rom_id + 1360`, where rom_id comes from
// github.com/OttoTonsorialist/pkmn_gen_four_trainer_data's dp_trainers.json
// (its rom_id is pret/pokediamond's own TRAINER_* constant index -- verified
// directly against pokediamond's compiled ARM assembly:
// TrainerFieldSystem_FlagSet always computes `suppliedId + 0x550` (0x550 =
// 1360) before setting the save flag, and the generic auto-battle path
// (ScrCmd_Unk00F0) supplies the trainer's own object ID as that suppliedId,
// which is the same as its global trainer ID. This does NOT apply to
// story-scripted battles (gym leaders, Elite Four, rivals, Team Galactic),
// which pass their own hand-authored literal instead -- those need
// per-battle sourcing, not this formula.
export const BATTLES: Record<string, BattleData> = {
    'youngster-logan': {
        saveCondition: { type: 'trainerFlag', flag: 1362 },
        aiFlags: [AiFlag.Basic],
        trainerClass: 'youngster',
        name: 'Logan',
        team: [
            {
                slug: 'shinx',
                ability: 'rivalry',
                gender: 'male',
                level: 5,
                nature: Nature.Bold,
                moves: ['tackle', 'leer'],
                ivs: 0,
            },
        ],
    },
    'lass-natalie': {
        saveCondition: { type: 'trainerFlag', flag: 1363 },
        aiFlags: [AiFlag.Basic],
        trainerClass: 'lass',
        name: 'Natalie',
        team: [
            {
                slug: 'bidoof',
                ability: 'simple',
                gender: 'female',
                level: 3,
                nature: Nature.Bold,
                moves: ['tackle'],
                ivs: 0,
            },
            {
                slug: 'bidoof',
                ability: 'simple',
                gender: 'female',
                level: 3,
                nature: Nature.Bold,
                moves: ['tackle'],
                ivs: 0,
            },
        ],
    },
    'youngster-tristan': {
        saveCondition: { type: 'trainerFlag', flag: 1361 },
        aiFlags: [AiFlag.Basic],
        trainerClass: 'youngster',
        name: 'Tristan',
        team: [
            {
                slug: 'starly',
                ability: 'keen-eye',
                gender: 'male',
                level: 5,
                nature: Nature.Careful,
                moves: ['tackle', 'growl', 'quick-attack'],
                ivs: 0,
            },
        ],
    },
    'youngster-tyler': {
        saveCondition: { type: 'trainerFlag', flag: 1370 },
        aiFlags: [AiFlag.Basic],
        trainerClass: 'youngster',
        name: 'Tyler',
        team: [
            {
                slug: 'magikarp',
                ability: 'swift-swim',
                gender: 'male',
                level: 5,
                nature: Nature.Docile,
                moves: ['splash'],
                ivs: 0,
            },
            {
                slug: 'starly',
                ability: 'keen-eye',
                gender: 'male',
                level: 5,
                nature: Nature.Lonely,
                moves: ['tackle', 'growl', 'quick-attack'],
                ivs: 0,
            },
        ],
    },
    'lass-samantha': {
        saveCondition: { type: 'trainerFlag', flag: 1371 },
        aiFlags: [AiFlag.Basic],
        trainerClass: 'lass',
        name: 'Samantha',
        team: [
            {
                slug: 'budew',
                ability: 'natural-cure',
                gender: 'female',
                level: 7,
                nature: Nature.Docile,
                moves: ['absorb', 'growth', 'water-sport'],
                ivs: 0,
            },
        ],
    },
    'lass-sarah': {
        saveCondition: { type: 'trainerFlag', flag: 1372 },
        aiFlags: [AiFlag.Basic],
        trainerClass: 'lass',
        name: 'Sarah',
        team: [
            {
                slug: 'bidoof',
                ability: 'simple',
                gender: 'female',
                level: 7,
                nature: Nature.Relaxed,
                moves: ['tackle', 'growl'],
                ivs: 0,
            },
        ],
    },
    'bug-catcher-brandon': {
        saveCondition: { type: 'trainerFlag', flag: 1373 },
        aiFlags: [AiFlag.Basic],
        trainerClass: 'bug-catcher',
        name: 'Brandon',
        team: [
            {
                slug: 'kricketot',
                ability: 'shed-skin',
                gender: 'male',
                level: 7,
                nature: Nature.Bashful,
                moves: ['growl', 'bide'],
                ivs: 0,
            },
            {
                slug: 'wurmple',
                ability: 'shield-dust',
                gender: 'male',
                level: 7,
                nature: Nature.Bashful,
                moves: ['tackle', 'string-shot', 'poison-sting'],
                ivs: 0,
            },
        ],
    },
    'aroma-lady-taylor': {
        saveCondition: { type: 'trainerFlag', flag: 1374 },
        aiFlags: [AiFlag.Basic],
        trainerClass: 'aroma-lady',
        name: 'Taylor',
        team: [
            {
                slug: 'budew',
                ability: 'natural-cure',
                gender: 'female',
                level: 7,
                nature: Nature.Jolly,
                moves: ['absorb', 'growth', 'water-sport'],
                ivs: 0,
            },
            {
                slug: 'cherubi',
                ability: 'chlorophyll',
                gender: 'female',
                level: 7,
                nature: Nature.Modest,
                moves: ['tackle', 'growth'],
                ivs: 0,
            },
        ],
    },
    'twins-liv-and-liz': {
        saveCondition: { type: 'trainerFlag', flag: 1375 },
        aiFlags: [AiFlag.Basic],
        trainerClass: 'twins',
        name: 'Liv & Liz',
        team: [
            {
                slug: 'pachirisu',
                ability: 'run-away',
                gender: 'female',
                level: 9,
                nature: Nature.Sassy,
                moves: ['growl', 'bide', 'quick-attack', 'charm'],
                ivs: 0,
            },
            {
                slug: 'pachirisu',
                ability: 'run-away',
                gender: 'female',
                level: 9,
                nature: Nature.Sassy,
                moves: ['growl', 'bide', 'quick-attack', 'charm'],
                ivs: 0,
            },
        ],
    },
};
