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
            battles: [
                {
                    isTag: true,
                    customWidth: 75,
                    battleKey: 'bug-catcher-jack',
                    x: 36,
                    y: 47.5,
                },
                {
                    battleKey: 'psychic-f-lindsey',
                    x: 49.8,
                    y: 47.5,
                },
                {
                    battleKey: 'psychic-m-elijah',
                    x: 56,
                    y: 47.5,
                },
                {
                    isOptional: true,
                    battleKey: 'bug-catcher-donald',
                    x: 68.1,
                    y: 88,
                },
                {
                    isOptional: true,
                    battleKey: 'bug-catcher-phillip',
                    x: 68.1,
                    y: 98,
                },
                {
                    isOptional: true,
                    battleKey: 'psychic-m-kody',
                    x: 79.1,
                    y: 47.5,
                },
                {
                    isOptional: true,
                    battleKey: 'psychic-f-rachael',
                    x: 82.8,
                    y: 47.5,
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
