import {
    route222,
    route222PikachuFanClub,
} from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_222: Location = {
    name: 'Route 222',
    subareas: [
        {
            name: 'Main',
            map: route222,
            mapAnchor: MapAnchor.Left,
            encountersKey: 'route-222',
            battles: [
                {
                    battleKey: 'rich-boy-trey',
                    metadata: [BattleMetadata.Optional],
                    x: 16.1,
                    y: 43.9,
                },
                {
                    battleKey: 'beauty-nicola',
                    metadata: [BattleMetadata.Optional],
                    x: 37,
                    y: 28.5,
                },
                {
                    battleKey: 'policeman-thomas',
                    metadata: [BattleMetadata.Optional],
                    x: 60.9,
                    y: 31.5,
                },
                {
                    battleKey: 'fisherman-alec',
                    metadata: [BattleMetadata.Optional],
                    x: 26.6,
                    y: 65.9,
                },
                {
                    battleKey: 'fisherman-george',
                    metadata: [BattleMetadata.Optional],
                    x: 34.9,
                    y: 65.9,
                },
                {
                    battleKey: 'fisherman-brett',
                    metadata: [BattleMetadata.Optional],
                    x: 48.5,
                    y: 69,
                },
                {
                    battleKey: 'fisherman-cole',
                    metadata: [BattleMetadata.Optional],
                    x: 68.2,
                    y: 72.1,
                },
                {
                    battleKey: 'tuber-f-holly',
                    metadata: [BattleMetadata.Optional],
                    x: 53.6,
                    y: 63.2,
                },
                {
                    battleKey: 'sailor-marc',
                    metadata: [BattleMetadata.Optional],
                    x: 75.5,
                    y: 40.7,
                },
                {
                    battleKey: 'tuber-m-conner',
                    metadata: [BattleMetadata.Optional],
                    x: 79.8,
                    y: 40.7,
                },
                {
                    battleKey: 'sailor-luther',
                    metadata: [],
                    x: 81.8,
                    y: 53.4,
                },
            ],
        },
        {
            name: 'Pikachu Fan Club',
            map: route222PikachuFanClub,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'poke-kid-janet',
                    metadata: [BattleMetadata.Optional],
                    x: 38.2,
                    y: 8.8,
                },
            ],
        },
    ],
};

export default ROUTE_222;
