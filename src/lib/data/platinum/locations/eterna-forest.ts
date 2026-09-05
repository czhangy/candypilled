import {
    eternaForestExterior,
    eternaForestInterior,
} from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const ETERNA_FOREST: Location = {
    name: 'Eterna Forest',
    subareas: [
        {
            name: 'Interior',
            map: eternaForestInterior,
            encountersKey: 'eterna-forest-interior',
            tagPartner: [{ battleKey: 'pkmn-trainer-cheryl-tag' }],
            battles: [
                {
                    customWidth: 75,
                    battleKey: 'bug-catcher-jack',
                    x: 40.6,
                    y: 69.8,
                },
                {
                    battleKey: 'psychic-f-lindsey',
                    x: 52.6,
                    y: 69.9,
                },
                {
                    battleKey: 'psychic-m-elijah',
                    x: 57.8,
                    y: 69.9,
                },
                {
                    battleKey: 'bug-catcher-donald',
                    x: 68.2,
                    y: 86.6,
                },
                {
                    battleKey: 'bug-catcher-phillip',
                    x: 68.2,
                    y: 90.7,
                },
                {
                    battleKey: 'psychic-m-kody',
                    x: 77.6,
                    y: 69.9,
                },
                {
                    battleKey: 'psychic-f-rachael',
                    x: 80.8,
                    y: 69.9,
                },
            ],
        },
        {
            name: 'Exterior',
            map: eternaForestExterior,
            encountersKey: 'eterna-forest-exterior',
        },
    ],
};

export default ETERNA_FOREST;
