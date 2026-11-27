import { everGrandeCity, everGrandeCityLobby } from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const EVER_GRANDE_CITY: Location = {
    name: 'Ever Grande City',
    subareas: [
        {
            name: 'City',
            map: everGrandeCity,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'ever-grande-city',
            methodSplits: [
                { method: EncounterMethod.OldRod, split: 'Winona' },
                { method: EncounterMethod.Surf, split: 'Winona' },
                { method: EncounterMethod.GoodRod, split: 'Winona' },
                { method: EncounterMethod.SuperRod, split: 'Winona' },
            ],
            transitions: [
                {
                    height: 16,
                    location: 'Ever Grande City',
                    subarea: 'Lobby',
                    width: 16,
                    x: 46.25,
                    y: 6.88,
                },
                {
                    height: 16,
                    location: 'Victory Road',
                    subarea: '1F',
                    width: 16,
                    x: 46.25,
                    y: 34.38,
                },
                {
                    height: 16,
                    location: 'Victory Road',
                    subarea: '1F',
                    width: 16,
                    x: 46.25,
                    y: 51.88,
                },
                {
                    height: 128,
                    location: 'Route 128',
                    width: 16,
                    x: 1.25,
                    y: 88.75,
                },
            ],
        },
        {
            name: 'Lobby',
            map: everGrandeCityLobby,
            mapAnchor: MapAnchor.Center,
            transitions: [
                {
                    height: 16,
                    location: "Sidney's Room",
                    width: 32,
                    x: 52.63,
                    y: 12.5,
                },
                {
                    height: 16,
                    location: 'Ever Grande City',
                    subarea: 'City',
                    width: 32,
                    x: 52.63,
                    y: 95.83,
                },
            ],
        },
    ],
};

export default EVER_GRANDE_CITY;
