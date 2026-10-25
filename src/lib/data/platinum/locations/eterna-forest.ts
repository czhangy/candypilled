import {
    eternaForestExterior,
    eternaForestInterior,
} from '@/lib/data/platinum/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ETERNA_FOREST: Location = {
    name: 'Eterna Forest',
    subareas: [
        {
            name: 'Interior',
            map: eternaForestInterior,
            mapAnchor: MapAnchor.BottomLeft,
            encountersKey: 'eterna-forest-interior',
            methodSplits: [
                { method: EncounterMethod.Grass, split: 'Gardenia' },
            ],
            tagPartner: [{ battleKey: 'pkmn-trainer-cheryl-tag' }],
            battles: [
                {
                    customWidth: 75,
                    battleKey: 'bug-catcher-jack',
                    x: 40.66,
                    y: 69.86,
                },
                {
                    battleKey: 'psychic-f-lindsey',
                    x: 52.64,
                    y: 69.86,
                },
                {
                    battleKey: 'psychic-m-elijah',
                    x: 57.85,
                    y: 69.86,
                },
                {
                    battleKey: 'bug-catcher-donald',
                    x: 68.26,
                    y: 86.52,
                },
                {
                    battleKey: 'bug-catcher-phillip',
                    x: 68.26,
                    y: 90.69,
                },
                {
                    battleKey: 'psychic-m-kody',
                    x: 77.64,
                    y: 69.86,
                },
                {
                    battleKey: 'psychic-f-rachael',
                    x: 80.76,
                    y: 69.86,
                },
            ],
        },
        {
            name: 'Exterior',
            map: eternaForestExterior,
            mapAnchor: MapAnchor.BottomRight,
            encountersKey: 'eterna-forest-exterior',
            methodSplits: [
                { method: EncounterMethod.HoneyTree, split: 'Fantina' },
            ],
        },
    ],
};

export default ETERNA_FOREST;
