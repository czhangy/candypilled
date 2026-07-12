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
                    map: {
                        src: '/platinum/locations/twinleaf_town.png',
                        width: 496,
                        height: 377,
                    },
                    trainers: [],
                },
                {
                    name: 'Route 201',
                    map: {
                        src: '/platinum/locations/route_201.png',
                        width: 1040,
                        height: 352,
                    },
                    trainers: [],
                },
                {
                    name: 'Sandgem Town',
                    map: {
                        src: '/platinum/locations/sandgem_town.png',
                        width: 496,
                        height: 402,
                    },
                    trainers: [],
                },
                {
                    name: 'Route 202',
                    map: {
                        src: '/platinum/locations/route_202.png',
                        width: 610,
                        height: 452,
                    },
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
                    map: {
                        src: '/platinum/locations/jubilife_city.png',
                        width: 1056,
                        height: 798,
                    },
                    trainers: [],
                },
                {
                    name: 'Route 204 South',
                    map: {
                        src: '/platinum/locations/route_204_south.png',
                        width: 507,
                        height: 411,
                    },
                    trainers: [],
                },
                {
                    name: 'Ravaged Path',
                    map: {
                        src: '/platinum/locations/ravaged_path.png',
                        width: 528,
                        height: 672,
                    },
                    trainers: [],
                },
                {
                    name: 'Route 203',
                    map: {
                        src: '/platinum/locations/route_203.png',
                        width: 976,
                        height: 368,
                    },
                    trainers: [],
                },
                {
                    name: 'Oreburgh Gate',
                    map: {
                        src: '/platinum/locations/oreburgh_gate.png',
                        width: 451,
                        height: 331,
                    },
                    trainers: [],
                },
                {
                    name: 'Oreburgh City',
                    map: {
                        src: '/platinum/locations/oreburgh_city.png',
                        width: 1024,
                        height: 832,
                    },
                    trainers: [],
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
