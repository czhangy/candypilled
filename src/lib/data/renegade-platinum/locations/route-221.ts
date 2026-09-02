import { route221 } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_221: Location = {
    name: 'Route 221',
    map: route221,
    encountersKey: 'sinnoh-route-221',
    battles: [
        {
            battleKey: 'swimmer-m-dillon',
            metadata: [BattleMetadata.Optional],
            x: 11.9,
            y: 50.7,
        },
        {
            battleKey: 'swimmer-f-vanessa',
            metadata: [BattleMetadata.Optional],
            x: 14,
            y: 81.8,
        },
        {
            battleKey: 'fisherman-cory',
            metadata: [BattleMetadata.Optional],
            x: 27.6,
            y: 72.1,
        },
        {
            battleKey: 'ace-trainer-f-shannon',
            metadata: [BattleMetadata.Optional],
            x: 55.8,
            y: 84.5,
        },
        {
            battleKey: 'collector-ivan',
            metadata: [BattleMetadata.Choice],
            x: 67.2,
            y: 59.4,
        },
        {
            battleKey: 'ace-trainer-m-jake',
            metadata: [BattleMetadata.Choice],
            x: 85,
            y: 65.8,
        },
    ],
};

export default ROUTE_221;
