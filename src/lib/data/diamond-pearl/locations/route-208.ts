import { route208 } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_208: Location = {
    name: 'Route 208',
    map: route208,
    encountersKey: 'sinnoh-route-208',
    battles: [
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'hiker-robert',
            x: 38.3,
            y: 59.4,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'black-belt-kyle',
            x: 33.5,
            y: 31.4,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'hiker-jonathan',
            x: 57.2,
            y: 56.2,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'aroma-lady-hannah',
            x: 77.3,
            y: 50,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'artist-william',
            x: 86.8,
            y: 62.5,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'fisherman-cody',
            x: 46.1,
            y: 72.1,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'hiker-alexander',
            x: 10.2,
            y: 46.7,
        },
    ],
};

export default ROUTE_208;
