import { route211East, route211West } from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_211: Location = {
    name: 'Route 211',
    subareas: [
        {
            name: 'West',
            map: route211West,
            encountersKey: 'sinnoh-route-211-west',
            battles: [
                {
                    battleKey: 'ninja-boy-zach',
                    x: 29.7,
                    y: 41.2,
                },
                {
                    battleKey: 'hiker-louis',
                    x: 79.9,
                    y: 53.1,
                },
                {
                    battleKey: 'bird-keeper-alexandra',
                    x: 48.4,
                    y: 34.5,
                },
            ],
        },
        {
            name: 'East',
            map: route211East,
            encountersKey: 'sinnoh-route-211-east',
            battles: [
                {
                    battleKey: 'bird-keeper-katherine',
                    x: 29.7,
                    y: 40.8,
                },
                {
                    battleKey: 'ruin-maniac-harry',
                    x: 42.2,
                    y: 40.8,
                },
                {
                    battleKey: 'ninja-boy-nick',
                    x: 51.6,
                    y: 28.9,
                },
                {
                    battleKey: 'black-belt-sean',
                    x: 38.9,
                    y: 87.7,
                },
            ],
        },
    ],
};

export default ROUTE_211;
