import { hearthomeCityGate } from '@/lib/games/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const HEARTHOME_CITY_GATE: Location = {
    name: 'Hearthome City Gate',
    map: hearthomeCityGate,
    battles: [
        {
            isMiniboss: true,
            trainerClass: 'PKMN Trainer',
            name: 'Barry',
            teamsByStarter: {
                Turtwig: [
                    {
                        name: 'Staravia',
                        ability: 1,
                        level: 25,
                        moves: [
                            'Wing Attack',
                            'Quick Attack',
                            'Endeavor',
                            'Double Team',
                        ],
                        nature: Nature.Timid,
                        ivs: 6,
                    },
                    {
                        name: 'Buizel',
                        ability: 1,
                        level: 23,
                        moves: [
                            'Water Gun',
                            'Quick Attack',
                            'Pursuit',
                            'Growl',
                        ],
                        nature: Nature.Bashful,
                        ivs: 6,
                    },
                    {
                        name: 'Roselia',
                        ability: 1,
                        level: 23,
                        moves: [
                            'Mega Drain',
                            'Poison Sting',
                            'Leech Seed',
                            'Stun Spore',
                        ],
                        nature: Nature.Jolly,
                        ivs: 6,
                    },
                    {
                        name: 'Monferno',
                        ability: 1,
                        level: 27,
                        moves: [
                            'Flame Wheel',
                            'Mach Punch',
                            'Fury Swipes',
                            'Leer',
                        ],
                        nature: Nature.Serious,
                        ivs: 6,
                    },
                ],
                Chimchar: [
                    {
                        name: 'Staravia',
                        ability: 1,
                        level: 25,
                        moves: [
                            'Wing Attack',
                            'Quick Attack',
                            'Endeavor',
                            'Double Team',
                        ],
                        nature: Nature.Timid,
                        ivs: 6,
                    },
                    {
                        name: 'Roselia',
                        ability: 1,
                        level: 23,
                        moves: [
                            'Mega Drain',
                            'Poison Sting',
                            'Leech Seed',
                            'Stun Spore',
                        ],
                        nature: Nature.Jolly,
                        ivs: 6,
                    },
                    {
                        name: 'Ponyta',
                        ability: 1,
                        level: 23,
                        moves: ['Ember', 'Tackle', 'Tail Whip', 'Growl'],
                        nature: Nature.Careful,
                        ivs: 6,
                    },
                    {
                        name: 'Prinplup',
                        ability: 1,
                        level: 27,
                        moves: ['Bubble Beam', 'Peck', 'Metal Claw', 'Growl'],
                        nature: Nature.Timid,
                        ivs: 6,
                    },
                ],
                Piplup: [
                    {
                        name: 'Staravia',
                        ability: 1,
                        level: 25,
                        moves: [
                            'Wing Attack',
                            'Quick Attack',
                            'Endeavor',
                            'Double Team',
                        ],
                        nature: Nature.Hardy,
                        ivs: 6,
                    },
                    {
                        name: 'Buizel',
                        ability: 1,
                        level: 23,
                        moves: [
                            'Water Gun',
                            'Quick Attack',
                            'Pursuit',
                            'Growl',
                        ],
                        nature: Nature.Impish,
                        ivs: 6,
                    },
                    {
                        name: 'Ponyta',
                        ability: 1,
                        level: 23,
                        moves: ['Ember', 'Tackle', 'Tail Whip', 'Growl'],
                        nature: Nature.Naughty,
                        ivs: 6,
                    },
                    {
                        name: 'Grotle',
                        ability: 1,
                        level: 27,
                        moves: ['Razor Leaf', 'Tackle', 'Absorb', 'Withdraw'],
                        nature: Nature.Naive,
                        ivs: 6,
                    },
                ],
            },
            x: 68,
            y: 48,
        },
    ],
};

export default HEARTHOME_CITY_GATE;
