import {
    solaceonRuinsRoom1,
    solaceonRuinsRoom2,
    solaceonRuinsRoom3,
    solaceonRuinsRoom4,
    solaceonRuinsRoom5,
    solaceonRuinsRoom6,
    solaceonRuinsRoom7,
} from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SOLACEON_RUINS: Location = {
    name: 'Solaceon Ruins',
    subareas: [
        {
            name: 'Room 1',
            map: solaceonRuinsRoom1,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'sinnoh-solaceon-ruins',
        },
        {
            name: 'Room 2',
            map: solaceonRuinsRoom2,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'sinnoh-solaceon-ruins',
        },
        {
            name: 'Room 3',
            map: solaceonRuinsRoom3,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'sinnoh-solaceon-ruins',
            battles: [
                {
                    battleKey: 'ruin-maniac-karl',
                    metadata: [BattleMetadata.Optional],
                    x: 50,
                    y: 43.3,
                },
            ],
        },
        {
            name: 'Room 4',
            map: solaceonRuinsRoom4,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'sinnoh-solaceon-ruins',
        },
        {
            name: 'Room 5',
            map: solaceonRuinsRoom5,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'sinnoh-solaceon-ruins',
        },
        {
            name: 'Room 6',
            map: solaceonRuinsRoom6,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'sinnoh-solaceon-ruins',
        },
        {
            name: 'Room 7',
            map: solaceonRuinsRoom7,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'sinnoh-solaceon-ruins',
        },
    ],
};

export default SOLACEON_RUINS;
