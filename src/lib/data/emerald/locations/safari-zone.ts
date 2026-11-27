import {
    safariZoneNortheast,
    safariZoneNorthwest,
    safariZoneSoutheast,
    safariZoneSouthwest,
} from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SAFARI_ZONE: Location = {
    name: 'Safari Zone',
    subareas: [
        {
            name: 'Area 1',
            map: safariZoneSoutheast,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-safari-zone-se',
            methodSplits: [{ method: EncounterMethod.Grass, split: 'Winona' }],
            transitions: [
                {
                    height: 32,
                    location: 'Safari Zone',
                    subarea: 'Area 2',
                    width: 16,
                    x: 1.25,
                    y: 17.5,
                },
                {
                    height: 32,
                    location: 'Safari Zone',
                    subarea: 'Area 2',
                    width: 16,
                    x: 1.25,
                    y: 52.5,
                },
                {
                    height: 32,
                    location: 'Safari Zone',
                    subarea: 'Area 2',
                    width: 16,
                    x: 1.25,
                    y: 92.5,
                },
                {
                    height: 16,
                    location: 'Safari Zone',
                    subarea: 'Area 4',
                    width: 32,
                    x: 75,
                    y: 1.25,
                },
                {
                    height: 16,
                    location: 'Route 121',
                    width: 16,
                    x: 81.25,
                    y: 83.75,
                },
            ],
        },
        {
            name: 'Area 2',
            map: safariZoneSouthwest,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-safari-zone-sw',
            methodSplits: [
                { method: EncounterMethod.Grass, split: 'Winona' },
                { method: EncounterMethod.OldRod, split: 'Winona' },
                { method: EncounterMethod.GoodRod, split: 'Winona' },
                { method: EncounterMethod.SuperRod, split: 'Winona' },
                { method: EncounterMethod.Surf, split: 'Winona' },
            ],
            transitions: [
                {
                    height: 32,
                    location: 'Safari Zone',
                    subarea: 'Area 1',
                    width: 16,
                    x: 98.75,
                    y: 17.5,
                },
                {
                    height: 32,
                    location: 'Safari Zone',
                    subarea: 'Area 1',
                    width: 16,
                    x: 98.75,
                    y: 52.5,
                },
                {
                    height: 32,
                    location: 'Safari Zone',
                    subarea: 'Area 1',
                    width: 16,
                    x: 98.75,
                    y: 92.5,
                },
                {
                    height: 16,
                    location: 'Safari Zone',
                    subarea: 'Area 3',
                    width: 64,
                    x: 22.5,
                    y: 1.25,
                },
                {
                    height: 16,
                    location: 'Safari Zone',
                    subarea: 'Area 3',
                    width: 80,
                    x: 53.75,
                    y: 1.25,
                },
            ],
        },
        {
            name: 'Area 3',
            map: safariZoneNorthwest,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-safari-zone-nwmach-bike-area',
            methodSplits: [
                { method: EncounterMethod.Grass, split: 'Winona' },
                { method: EncounterMethod.OldRod, split: 'Winona' },
                { method: EncounterMethod.GoodRod, split: 'Winona' },
                { method: EncounterMethod.SuperRod, split: 'Winona' },
                { method: EncounterMethod.Surf, split: 'Winona' },
            ],
            transitions: [
                {
                    height: 16,
                    location: 'Safari Zone',
                    subarea: 'Area 2',
                    width: 64,
                    x: 22.5,
                    y: 98.75,
                },
                {
                    height: 16,
                    location: 'Safari Zone',
                    subarea: 'Area 2',
                    width: 80,
                    x: 53.75,
                    y: 98.75,
                },
            ],
        },
        {
            name: 'Area 4',
            map: safariZoneNortheast,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-safari-zone-neacro-bike-area',
            methodSplits: [
                { method: EncounterMethod.Grass, split: 'Winona' },
                { method: EncounterMethod.RockSmash, split: 'Winona' },
            ],
            transitions: [
                {
                    height: 16,
                    location: 'Safari Zone',
                    subarea: 'Area 1',
                    width: 32,
                    x: 75,
                    y: 98.75,
                },
            ],
        },
    ],
};

export default SAFARI_ZONE;
