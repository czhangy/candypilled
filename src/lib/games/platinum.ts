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
                { name: 'Twinleaf Town' },
                { name: 'Route 201' },
                { name: 'Sandgem Town' },
                { name: 'Route 202' },
                { name: 'Jubilife City' },
                { name: 'Route 203' },
                { name: 'Oreburgh Gate' },
                { name: 'Oreburgh City' },
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
