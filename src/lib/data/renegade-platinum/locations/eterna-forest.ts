import {
    eternaForestExterior,
    eternaForestInterior,
} from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ETERNA_FOREST: Location = {
    name: 'Eterna Forest',
    subareas: [
        {
            name: 'Interior',
            map: eternaForestInterior,
            mapAnchor: MapAnchor.BottomLeft,
            encountersKey: 'eterna-forest',
            items: [
                {
                    category: ItemCategory.TmHm,
                    count: 1,
                    hidden: false,
                    method: 'Gift from Cheryl',
                    slug: 'return',
                },
                {
                    category: ItemCategory.PokeBall,
                    count: 1,
                    hidden: false,
                    method: 'To the left of Bug Catchers',
                    slug: 'net-ball',
                },
                {
                    category: ItemCategory.TmHm,
                    count: 1,
                    hidden: false,
                    method: 'To the right of the Old Chateau',
                    slug: 'shadow-claw',
                },
            ],
            methodSplits: [
                { method: EncounterMethod.Grass, split: 'Gardenia' },
                { method: EncounterMethod.PokeRadar, split: 'Gardenia' },
                { method: EncounterMethod.HoneyTree, split: 'Gardenia' },
            ],
            tagPartner: [{ battleKey: 'pkmn-trainer-cheryl-tag' }],
            battles: [
                {
                    battleKey: 'pkmn-trainer-cheryl',
                    x: 29.72,
                    y: 86.52,
                },
                {
                    battleKey: 'bug-catcher-jack',
                    x: 39.1,
                    y: 69.86,
                },
                {
                    battleKey: 'lass-briana',
                    x: 42.22,
                    y: 69.86,
                },
                {
                    battleKey: 'psychic-lindsey',
                    x: 52.64,
                    y: 69.86,
                },
                {
                    battleKey: 'psychic-elijah',
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
                    battleKey: 'psychic-kody',
                    x: 77.64,
                    y: 69.86,
                },
                {
                    battleKey: 'psychic-rachael',
                    x: 80.76,
                    y: 69.86,
                },
            ],
        },
        {
            name: 'Exterior',
            map: eternaForestExterior,
            mapAnchor: MapAnchor.BottomRight,
            encountersKey: 'eterna-forest',
            items: [
                {
                    category: ItemCategory.TmHm,
                    count: 1,
                    hidden: false,
                    method: 'In the rocky area, to the right',
                    slug: 'sleep-talk',
                },
                {
                    category: ItemCategory.Berry,
                    count: 5,
                    hidden: false,
                    method: 'Berry tree',
                    slug: 'oran-berry',
                },
                {
                    category: ItemCategory.Berry,
                    count: 5,
                    hidden: false,
                    method: 'Berry tree',
                    slug: 'bluk-berry',
                },
                {
                    category: ItemCategory.Berry,
                    count: 5,
                    hidden: false,
                    method: 'Berry tree',
                    slug: 'razz-berry',
                },
                {
                    category: ItemCategory.Berry,
                    count: 5,
                    hidden: false,
                    method: 'Berry tree',
                    slug: 'cheri-berry',
                },
                {
                    category: ItemCategory.HeldItem,
                    count: 1,
                    hidden: false,
                    method: 'In the rocky area, to the left',
                    slug: 'silver-powder',
                },
            ],
            methodSplits: [
                { method: EncounterMethod.Grass, split: 'Gardenia' },
                { method: EncounterMethod.PokeRadar, split: 'Gardenia' },
                { method: EncounterMethod.HoneyTree, split: 'Gardenia' },
            ],
        },
    ],
};

export default ETERNA_FOREST;
