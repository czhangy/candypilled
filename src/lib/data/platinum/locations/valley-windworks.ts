import {
    valleyWindworks,
    valleyWindworksInterior,
} from '@/lib/data/platinum/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VALLEY_WINDWORKS: Location = {
    name: 'Valley Windworks',
    subareas: [
        {
            name: 'Exterior',
            map: valleyWindworks,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'valley-windworks',
            methodSplits: [
                { method: EncounterMethod.Surf, split: 'Byron' },
                { method: EncounterMethod.OldRod, split: 'Gardenia' },
                { method: EncounterMethod.GoodRod, split: 'Maylene' },
                { method: EncounterMethod.HoneyTree, split: 'Gardenia' },
                { method: EncounterMethod.Grass, split: 'Gardenia' },
                { method: EncounterMethod.Static, split: 'Gardenia' },
            ],
            battles: [
                {
                    battleKey: 'galactic-grunt-m-valley-windworks',
                    x: 61.28,
                    y: 44.96,
                },
            ],
        },
        {
            name: 'Interior',
            map: valleyWindworksInterior,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'galactic-grunt-m-valley-windworks-interior-1',
                    x: 11.86,
                    y: 38.24,
                },
                {
                    battleKey: 'galactic-grunt-m-valley-windworks-interior-2',
                    x: 52.49,
                    y: 4.62,
                },
                {
                    battleKey: 'commander-mars-valley-windworks-interior',
                    x: 89.28,
                    y: 31.51,
                },
            ],
        },
    ],
};

export default VALLEY_WINDWORKS;
