import {
    hearthomeCityCity,
    hearthomeCityEastGate,
    hearthomeCityWestGate,
} from '@/lib/data/renegade-platinum/maps';
import { ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const HEARTHOME_CITY: Location = {
    name: 'Hearthome City',
    subareas: [
        {
            name: 'West Gate',
            map: hearthomeCityWestGate,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'elite-four-aaron-route-208',
                    x: 44.9,
                    y: 45.9,
                },
            ],
        },
        {
            name: 'City',
            map: hearthomeCityCity,
            mapAnchor: MapAnchor.BottomLeft,
            items: [
                {
                    category: ItemCategory.KeyItem,
                    count: 1,
                    hidden: false,
                    method: 'Gift from NPC',
                    slug: 'poffin-case',
                },
                {
                    category: ItemCategory.TmHm,
                    count: 1,
                    hidden: false,
                    method: 'Gift from NPC',
                    slug: 'rest',
                },
                {
                    category: ItemCategory.TmHm,
                    count: 1,
                    hidden: false,
                    method: 'Gift from NPC',
                    slug: 'scald',
                },
            ],
        },
        {
            name: 'East Gate',
            map: hearthomeCityEastGate,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'pkmn-trainer-barry-hearthome-city-east-gate',
                    x: 69.3,
                    y: 47,
                },
            ],
        },
    ],
};

export default HEARTHOME_CITY;
