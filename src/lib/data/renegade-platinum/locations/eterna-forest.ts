import {
    eternaForestExterior,
    eternaForestInterior,
} from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const ETERNA_FOREST: Location = {
    name: 'Eterna Forest',
    subareas: [
        {
            name: 'Interior',
            map: eternaForestInterior,
            encountersKey: 'eterna-forest',
            tagPartner: [{ battleKey: 'pkmn-trainer-cheryl-tag' }],
            battles: [
                {
                    battleKey: 'pkmn-trainer-cheryl',
                    x: 29.7,
                    y: 86.5,
                },
                {
                    battleKey: 'bug-catcher-jack',
                    x: 39.1,
                    y: 69.9,
                },
                {
                    battleKey: 'lass-briana',
                    x: 42.3,
                    y: 69.9,
                },
                {
                    battleKey: 'psychic-lindsey',
                    x: 52.6,
                    y: 70,
                },
                {
                    battleKey: 'psychic-elijah',
                    x: 57.9,
                    y: 70,
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
                    battleKey: 'psychic-kody',
                    x: 77.6,
                    y: 69.9,
                },
                {
                    battleKey: 'psychic-rachael',
                    x: 80.8,
                    y: 70,
                },
            ],
        },
        {
            name: 'Exterior',
            map: eternaForestExterior,
            encountersKey: 'eterna-forest',
        },
    ],
};

export default ETERNA_FOREST;
