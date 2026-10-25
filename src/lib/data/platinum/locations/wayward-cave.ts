import { waywardCave1f, waywardCaveB1f } from '@/lib/data/platinum/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const WAYWARD_CAVE: Location = {
    name: 'Wayward Cave',
    subareas: [
        {
            name: '1F',
            map: waywardCave1f,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'wayward-cave-1f',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Fantina' }],
            tagPartner: [{ battleKey: 'pkmn-trainer-mira-tag' }],
            battles: [
                {
                    battleKey: 'camper-diego',
                    x: 2.64,
                    y: 24.25,
                },
                {
                    battleKey: 'picnicker-tori',
                    x: 5.76,
                    y: 24.25,
                },
                {
                    battleKey: 'hiker-reginald',
                    x: 18.26,
                    y: 65.62,
                },
                {
                    battleKey: 'hiker-lorenzo',
                    x: 21.39,
                    y: 65.62,
                },
                {
                    battleKey: 'lass-cassidy',
                    x: 2.64,
                    y: 72.52,
                },
                {
                    battleKey: 'youngster-wayne',
                    x: 5.76,
                    y: 72.52,
                },
                {
                    battleKey: 'picnicker-ana',
                    x: 76.6,
                    y: 51.83,
                },
                {
                    battleKey: 'camper-parker',
                    x: 80.76,
                    y: 51.83,
                },
                {
                    battleKey: 'collector-terry',
                    x: 95.35,
                    y: 82.87,
                },
                {
                    battleKey: 'ruin-maniac-gerald',
                    x: 97.43,
                    y: 82.87,
                },
            ],
        },
        {
            name: 'B1F',
            map: waywardCaveB1f,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'wayward-cave-b1f',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Fantina' }],
        },
    ],
};

export default WAYWARD_CAVE;
