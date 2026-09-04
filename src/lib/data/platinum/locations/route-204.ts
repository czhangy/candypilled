import { route204North, route204South } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_204: Location = {
    name: 'Route 204',
    subareas: [
        {
            name: 'South',
            map: route204South,
            encountersKey: 'sinnoh-route-204-south-towards-jubilife-city',
            battles: [
                {
                    battleKey: 'lass-sarah',
                    x: 38.9,
                    y: 66.5,
                },
                {
                    battleKey: 'youngster-tyler',
                    x: 22.9,
                    y: 57.5,
                },
                {
                    battleKey: 'lass-samantha',
                    x: 35.7,
                    y: 27.5,
                },
            ],
        },
        {
            name: 'North',
            map: route204North,
            encountersKey: 'sinnoh-route-204-north-towards-floaroma-town',
            battles: [
                {
                    battleKey: 'aroma-lady-taylor',
                    x: 52.9,
                    y: 59.4,
                },
                {
                    battleKey: 'bug-catcher-brandon',
                    x: 63.3,
                    y: 39.7,
                },
                {
                    customWidth: 36,
                    battleKey: 'twins-liv-and-liz',
                    x: 48.3,
                    y: 23,
                },
            ],
        },
    ],
};

export default ROUTE_204;
