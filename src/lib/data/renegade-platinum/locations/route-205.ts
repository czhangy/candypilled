import {
    route205North,
    route205South,
} from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_205: Location = {
    name: 'Route 205',
    subareas: [
        {
            name: 'South',
            map: route205South,
            encountersKey: 'sinnoh-route-205-south',
            battles: [
                {
                    battleKey: 'camper-jacob',
                    x: 73.2,
                    y: 73,
                },
                {
                    battleKey: 'hiker-daniel',
                    x: 58,
                    y: 58.3,
                },
                {
                    battleKey: 'aroma-lady-elizabeth',
                    x: 73.6,
                    y: 59.4,
                },
                {
                    battleKey: 'camper-zackary',
                    x: 45.1,
                    y: 51.2,
                },
                {
                    battleKey: 'hiker-nicholas',
                    x: 51.6,
                    y: 35.5,
                },
                {
                    battleKey: 'battle-girl-kelsey',
                    x: 48.4,
                    y: 23,
                },
                {
                    battleKey: 'picnicker-karina',
                    x: 73.6,
                    y: 44.8,
                },
                {
                    battleKey: 'picnicker-siena',
                    x: 51.6,
                    y: 19.9,
                },
            ],
        },
        {
            name: 'North',
            map: route205North,
            encountersKey: 'sinnoh-route-205-north',
            battles: [
                {
                    battleKey: 'fisherman-joseph',
                    x: 45.3,
                    y: 62.9,
                },
                {
                    battleKey: 'fisherman-andrew',
                    x: 57.8,
                    y: 59.6,
                },
                {
                    battleKey: 'fisherman-zachary',
                    x: 67.2,
                    y: 72.1,
                },
            ],
        },
    ],
};

export default ROUTE_205;
