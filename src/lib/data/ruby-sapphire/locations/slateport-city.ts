import {
    slateportCity,
    slateportCityOceanicMuseumAqua,
    slateportCityOceanicMuseumMagma,
} from '@/lib/data/ruby-sapphire/maps';
import { GEN_3_TRUE_DOUBLE_HEIGHT } from '@/lib/static/constants';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SLATEPORT_CITY: Location = {
    name: 'Slateport City',
    subareas: [
        {
            name: 'City',
            map: slateportCity,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'slateport-city-area',
            methodSplits: [
                { method: EncounterMethod.OldRod, split: 'Brawly' },
                { method: EncounterMethod.GoodRod, split: 'Winona' },
                { method: EncounterMethod.SuperRod, split: 'Winona' },
                { method: EncounterMethod.Surf, split: 'Winona' },
            ],
        },
        {
            name: 'Oceanic Museum',
            map: {
                Ruby: slateportCityOceanicMuseumMagma,
                Sapphire: slateportCityOceanicMuseumAqua,
            },
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'team-magma-grunt-m-oceanic-museum',
                    game: 'Ruby',
                    customHeight: GEN_3_TRUE_DOUBLE_HEIGHT,
                    x: 52.5,
                    y: 64.74,
                },
                {
                    battleKey: 'team-aqua-grunt-m-oceanic-museum',
                    game: 'Sapphire',
                    customHeight: GEN_3_TRUE_DOUBLE_HEIGHT,
                    x: 52.5,
                    y: 64.74,
                },
            ],
        },
    ],
};

export default SLATEPORT_CITY;
