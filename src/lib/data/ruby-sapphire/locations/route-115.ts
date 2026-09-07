import { route115North, route115South } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_115: Location = {
    name: 'Route 115',
    subareas: [
        {
            name: 'South',
            map: route115South,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'hoenn-route-115-south',
            battles: [
                {
                    battleKey: 'black-belt-nob',
                    x: 68.75,
                    y: 43.83,
                },
                {
                    battleKey: 'battle-girl-cyndy',
                    x: 63.59,
                    y: 60.67,
                },
                {
                    battleKey: 'collector-hector-ruby',
                    game: 'Ruby',
                    x: 38.59,
                    y: 37.49,
                },
                {
                    battleKey: 'collector-hector-sapphire',
                    game: 'Sapphire',
                    x: 38.59,
                    y: 37.49,
                },
            ],
        },
        {
            name: 'North',
            map: route115North,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'hoenn-route-115',
            battles: [
                {
                    battleKey: 'expert-m-timothy',
                    x: 13.75,
                    y: 38.2,
                },
                {
                    battleKey: 'black-belt-koichi',
                    x: 43.59,
                    y: 43.2,
                },
            ],
        },
    ],
};

export default ROUTE_115;
