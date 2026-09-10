import { route112North, route112South } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_112: Location = {
    name: 'Route 112',
    subareas: [
        {
            name: 'South',
            map: route112South,
            mapAnchor: MapAnchor.BottomRight,
            encountersKey: 'hoenn-route-112',
            battles: [
                {
                    battleKey: 'camper-larry',
                    x: 73.59,
                    y: 73.12,
                },
                {
                    battleKey: 'picnicker-carol',
                    x: 56.09,
                    y: 65.62,
                },
                {
                    battleKey: 'hiker-trent',
                    x: 43.59,
                    y: 50.62,
                },
                {
                    battleKey: 'hiker-brice',
                    x: 61.25,
                    y: 35.58,
                },
            ],
        },
        {
            name: 'North',
            map: route112North,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-route-112',
        },
    ],
};

export default ROUTE_112;
