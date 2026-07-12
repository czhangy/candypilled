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
                },
                {
                    name: 'Route 201',
                    map: {
                        src: '/platinum/locations/route_201.png',
                        width: 1040,
                        height: 352,
                    },
                },
                {
                    name: 'Sandgem Town',
                    map: {
                        src: '/platinum/locations/sandgem_town.png',
                        width: 496,
                        height: 402,
                    },
                },
                {
                    name: 'Route 202',
                    map: {
                        src: '/platinum/locations/route_202.png',
                        width: 610,
                        height: 452,
                    },
                },
                {
                    name: 'Jubilife City',
                    map: {
                        src: '/platinum/locations/jubilife_city.png',
                        width: 1056,
                        height: 798,
                    },
                },
                {
                    name: 'Route 204 South',
                    map: {
                        src: '/platinum/locations/route_204_south.png',
                        width: 507,
                        height: 411,
                    },
                },
                {
                    name: 'Ravaged Path',
                    map: {
                        src: '/platinum/locations/ravaged_path.png',
                        width: 528,
                        height: 672,
                    },
                },
                {
                    name: 'Route 203',
                    map: {
                        src: '/platinum/locations/route_203.png',
                        width: 976,
                        height: 368,
                    },
                },
                {
                    name: 'Oreburgh Gate',
                    map: {
                        src: '/platinum/locations/oreburgh_gate.png',
                        width: 451,
                        height: 331,
                    },
                },
                {
                    name: 'Oreburgh City',
                    map: {
                        src: '/platinum/locations/oreburgh_city.png',
                        width: 1024,
                        height: 832,
                    },
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
