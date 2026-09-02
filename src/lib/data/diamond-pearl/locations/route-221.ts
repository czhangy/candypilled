import { route221 } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_221: Location = {
    name: 'Route 221',
    map: route221,
    encountersKey: 'sinnoh-route-221',
    battles: [
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'swimmer-m-dillon',
            x: 12.1,
            y: 54,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'swimmer-f-vanessa',
            x: 14.1,
            y: 83.9,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'fisherman-cory',
            x: 27.7,
            y: 72.6,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'ace-trainer-f-shannon',
            x: 55.8,
            y: 84.6,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'collector-ivan',
            x: 67.2,
            y: 60.2,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'ace-trainer-m-jake',
            x: 85,
            y: 66.8,
        },
    ],
};

export default ROUTE_221;
