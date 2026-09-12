import { route104North, route104South } from '@/lib/data/ruby-sapphire/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_104: Location = {
    name: 'Route 104',
    subareas: [
        {
            name: 'South',
            map: route104South,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'hoenn-route-104-area',
            battles: [
                {
                    battleKey: 'youngster-billy',
                    x: 46.25,
                    y: 72.62,
                },
                {
                    battleKey: 'rich-boy-winston',
                    x: 28.75,
                    y: 22.64,
                },
            ],
        },
        {
            name: 'North',
            map: route104North,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'hoenn-route-104-area',
            battles: [
                {
                    battleKey: 'lady-cindy',
                    x: 56.09,
                    y: 74.91,
                },
                {
                    battleKey: 'lass-haley',
                    x: 78.59,
                    y: 71.95,
                },
                {
                    battleKey: 'twins-gina-and-mia',
                    customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
                    x: 70,
                    y: 45.6,
                },
                {
                    battleKey: 'fisherman-ivan',
                    x: 73.59,
                    y: 24.54,
                },
            ],
        },
    ],
};

export default ROUTE_104;
