import { route211East, route211West } from '@/lib/data/diamond-pearl/maps';
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
                    x: 29.8,
                    y: 41,
                },
                {
                    battleKey: 'hiker-louis',
                    x: 79.6,
                    y: 53.1,
                },
                {
                    battleKey: 'bird-keeper-alexandra',
                    x: 48.7,
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
                    x: 51.5,
                    y: 25,
                },
                {
                    battleKey: 'ruin-maniac-harry',
                    x: 42.3,
                    y: 40.8,
                },
                {
                    battleKey: 'ninja-boy-nick',
                    x: 29.8,
                    y: 25.6,
                },
                {
                    battleKey: 'black-belt-sean',
                    x: 39,
                    y: 87.7,
                },
            ],
        },
    ],
};

export default ROUTE_211;
