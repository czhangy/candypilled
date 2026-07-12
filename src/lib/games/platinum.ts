import {
    oreburghGate,
    oreburghGym,
    route202,
    route203,
    route204South,
} from '@/lib/assets/platinum/locations';
import { Nature } from '@/lib/static/enums';
import { Game } from '@/lib/static/types';

const PLATINUM: Game = {
    name: 'Platinum',
    logo: '/logos/platinum.png',
    generation: 4,
    starters: ['Turtwig', 'Chimchar', 'Piplup'],
    baseColor: '#000000',
    accentColor: '#ffffff',
    splits: [
        {
            name: 'Roark',
            locations: [
                {
                    name: 'Twinleaf Town',
                },
                {
                    name: 'Route 201',
                },
                {
                    name: 'Sandgem Town',
                },
                {
                    name: 'Route 202',
                    map: route202,
                    battles: [
                        {
                            name: 'Tristan',
                            team: [
                                {
                                    ability: 'Keen Eye',
                                    level: 5,
                                    moves: ['Tackle', 'Growl', 'Quick Attack'],
                                    name: 'Starly',
                                    nature: Nature.Careful,
                                },
                            ],
                            trainerClass: 'Youngster',
                            x: 22.13,
                            y: 47,
                        },
                        {
                            name: 'Natalie',
                            team: [
                                {
                                    ability: 'Simple',
                                    level: 5,
                                    moves: ['Tackle', 'Growl'],
                                    name: 'Bidoof',
                                    nature: Nature.Quiet,
                                },
                            ],
                            trainerClass: 'Lass',
                            x: 61.9,
                            y: 60.4,
                        },
                        {
                            name: 'Logan',
                            team: [
                                {
                                    ability: 'Shed Skin',
                                    level: 5,
                                    moves: [
                                        'Tackle',
                                        'Bug Bite',
                                        'Hidden Power',
                                    ],
                                    name: 'Burmy',
                                    nature: Nature.Impish,
                                },
                            ],
                            trainerClass: 'Youngster',
                            x: 72.3,
                            y: 21.9,
                        },
                    ],
                },
                {
                    name: 'Jubilife City',
                },
                {
                    name: 'Route 204 South',
                    map: route204South,
                },
                {
                    name: 'Ravaged Path',
                },
                {
                    name: 'Route 203',
                    map: route203,
                },
                {
                    name: 'Oreburgh Gate',
                    map: oreburghGate,
                },
                {
                    name: 'Oreburgh City',
                },
                {
                    name: 'Oreburgh Gym',
                    map: oreburghGym,
                },
            ],
        },
        { name: 'Gardenia', locations: [] },
        { name: 'Fantina', locations: [] },
        { name: 'Maylene', locations: [] },
        { name: 'Wake', locations: [] },
        { name: 'Byron', locations: [] },
        { name: 'Candice', locations: [] },
        { name: 'Distortion World', locations: [] },
        { name: 'Volkner', locations: [] },
        { name: 'Cynthia', locations: [] },
    ],
};

export default PLATINUM;
