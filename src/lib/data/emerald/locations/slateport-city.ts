import {
    slateportCity,
    slateportCityOceanicMuseum,
} from '@/lib/data/emerald/maps';
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
                { method: EncounterMethod.GoodRod, split: 'Winona' },
                { method: EncounterMethod.OldRod, split: 'Brawly' },
                { method: EncounterMethod.Surf, split: 'Winona' },
                { method: EncounterMethod.SuperRod, split: 'Winona' },
            ],
            transitions: [
                {
                    height: 16,
                    location: 'Route 110',
                    width: 64,
                    x: 45,
                    y: 0.83,
                },
                {
                    height: 128,
                    location: 'Route 134',
                    width: 16,
                    x: 98.75,
                    y: 18.33,
                },
                {
                    height: 16,
                    location: 'Slateport City',
                    subarea: 'Oceanic Museum',
                    width: 32,
                    x: 77.5,
                    y: 44.17,
                },
                {
                    height: 16,
                    location: 'Route 109',
                    subarea: 'Beach',
                    width: 560,
                    x: 51.25,
                    y: 99.17,
                },
            ],
        },
        {
            name: 'Oceanic Museum',
            map: slateportCityOceanicMuseum,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'team-aqua-grunt-m-oceanic-museum',
                    customHeight: GEN_3_TRUE_DOUBLE_HEIGHT,
                    x: 52.5,
                    y: 64.74,
                },
            ],
            transitions: [
                {
                    height: 16,
                    location: 'Slateport City',
                    subarea: 'City',
                    width: 16,
                    x: 32.5,
                    y: 16.67,
                },
            ],
        },
    ],
};

export default SLATEPORT_CITY;
