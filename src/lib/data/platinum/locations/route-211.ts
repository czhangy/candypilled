import { route211East, route211West } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_211: Location = {
    name: 'Route 211',
    subareas: [
        {
            name: 'West',
            map: route211West,
            encountersKey: 'sinnoh-route-211-west-towards-eterna-city',
            battles: [
                {
                    battleKey: 'ninja-boy-zach',
                    x: 29.7,
                    y: 41.2,
                },
                {
                    battleKey: 'hiker-louis',
                    x: 79.7,
                    y: 52.9,
                },
                {
                    battleKey: 'bird-keeper-alexandra',
                    x: 48.6,
                    y: 34.6,
                },
            ],
        },
        {
            name: 'East',
            map: route211East,
            encountersKey: 'sinnoh-route-211-east-towards-celestic-town',
            battles: [
                {
                    battleKey: 'bird-keeper-katherine',
                    x: 51.4,
                    y: 25.2,
                },
                {
                    battleKey: 'ruin-maniac-harry',
                    x: 45.5,
                    y: 53.3,
                },
                {
                    battleKey: 'ninja-boy-nick',
                    x: 29.5,
                    y: 25.5,
                },
                {
                    battleKey: 'black-belt-sean',
                    x: 38.7,
                    y: 87.5,
                },
            ],
        },
    ],
};

export default ROUTE_211;
