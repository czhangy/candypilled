import { route216 } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_216: Location = {
    name: 'Route 216',
    map: route216,
    mapAnchor: MapAnchor.BottomRight,
    encountersKey: 'sinnoh-route-216',
    battles: [
        {
            battleKey: 'ace-trainer-snow-m-blake',
            metadata: [BattleMetadata.Optional],
            x: 70.3,
            y: 56.5,
        },
        {
            battleKey: 'ace-trainer-snow-f-maria',
            metadata: [BattleMetadata.Optional],
            x: 58.9,
            y: 84.6,
        },
        {
            battleKey: 'ace-trainer-snow-f-laura',
            metadata: [],
            x: 42.2,
            y: 65.7,
        },
        {
            battleKey: 'skier-m-edward',
            metadata: [BattleMetadata.Optional],
            x: 24.5,
            y: 55.5,
        },
        {
            battleKey: 'ace-trainer-snow-m-garrett',
            metadata: [BattleMetadata.Optional],
            x: 12,
            y: 31.6,
        },
        {
            battleKey: 'black-belt-philip',
            metadata: [BattleMetadata.Optional],
            x: 51.6,
            y: 25.2,
        },
        {
            battleKey: 'skier-f-kaitlyn',
            metadata: [BattleMetadata.Optional],
            x: 56.7,
            y: 2.8,
        },
        {
            battleKey: 'skier-m-bradley',
            metadata: [BattleMetadata.Optional],
            x: 65.2,
            y: 24.5,
        },
        {
            battleKey: 'skier-f-andrea',
            metadata: [BattleMetadata.Optional],
            x: 81.7,
            y: 21.3,
        },
    ],
};

export default ROUTE_216;
