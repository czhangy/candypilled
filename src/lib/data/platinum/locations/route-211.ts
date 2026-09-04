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
                    x: 29.6,
                    y: 37.1,
                },
                {
                    battleKey: 'hiker-louis',
                    x: 76.1,
                    y: 49.6,
                },
                {
                    battleKey: 'bird-keeper-alexandra',
                    x: 46.8,
                    y: 40.6,
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
                    x: 52.9,
                    y: 31.7,
                },
                {
                    battleKey: 'ruin-maniac-harry',
                    x: 44.2,
                    y: 45.7,
                },
                {
                    battleKey: 'ninja-boy-nick',
                    x: 32.4,
                    y: 32.3,
                },
                {
                    battleKey: 'black-belt-sean',
                    x: 49.7,
                    y: 90,
                },
            ],
        },
    ],
};

export default ROUTE_211;
