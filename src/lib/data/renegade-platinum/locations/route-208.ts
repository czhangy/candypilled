import { route208 } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_208: Location = {
    name: 'Route 208',
    map: route208,
    mapAnchor: MapAnchor.BottomLeft,
    encountersKey: 'sinnoh-route-208',
    battles: [
        {
            battleKey: 'hiker-jonathan',
            metadata: [BattleMetadata.Optional],
            x: 38.3,
            y: 59.5,
        },
        {
            battleKey: 'black-belt-kyle',
            metadata: [BattleMetadata.Optional],
            x: 33.6,
            y: 31.3,
        },
        {
            battleKey: 'hiker-robert',
            metadata: [],
            x: 57,
            y: 56.1,
        },
        {
            battleKey: 'hiker-alexander',
            metadata: [BattleMetadata.Optional],
            x: 57,
            y: 28.2,
        },
        {
            battleKey: 'aroma-lady-hannah',
            metadata: [BattleMetadata.Optional],
            x: 77.4,
            y: 50.3,
        },
        {
            battleKey: 'artist-william',
            metadata: [BattleMetadata.Optional],
            x: 86.7,
            y: 62.6,
        },
        {
            battleKey: 'fisherman-cody',
            metadata: [BattleMetadata.Optional],
            x: 46.1,
            y: 72,
        },
    ],
};

export default ROUTE_208;
