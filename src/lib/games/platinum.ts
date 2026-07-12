import {
    oreburghGate,
    oreburghGym,
    route202,
    route203,
    route204South,
} from '@/lib/assets/platinum/locations';
import { Game } from '@/lib/static/types';

const PLATINUM: Game = {
    name: 'Platinum',
    logo: '/logos/platinum.png',
    generation: 4,
    starters: ['Turtwig', 'Chimchar', 'Piplup'],
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
                    trainers: [
                        {
                            name: 'Tristan',
                            trainerClass: 'Youngster',
                            x: 22.13,
                            y: 47,
                        },
                        {
                            name: 'Natalie',
                            trainerClass: 'Lass',
                            x: 61.9,
                            y: 60.4,
                        },
                        {
                            name: 'Logan',
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
