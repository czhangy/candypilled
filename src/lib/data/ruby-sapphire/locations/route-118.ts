import { route118East, route118West } from '@/lib/data/ruby-sapphire/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_118: Location = {
    name: 'Route 118',
    subareas: [
        {
            name: 'West',
            map: route118West,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-route-118-west',
            methodSplits: [
                { method: EncounterMethod.OldRod, split: 'Brawly' },
                { method: EncounterMethod.GoodRod, split: 'Winona' },
                { method: EncounterMethod.SuperRod, split: 'Winona' },
                { method: EncounterMethod.Surf, split: 'Winona' },
            ],
            battles: [
                {
                    battleKey: 'aroma-lady-rose',
                    x: 31.25,
                    y: 51.72,
                },
                {
                    battleKey: 'fisherman-wade',
                    x: 60.42,
                    y: 71.72,
                },
                {
                    battleKey: 'guitarist-dalton',
                    x: 72.92,
                    y: 56.72,
                },
            ],
        },
        {
            name: 'East',
            map: route118East,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-route-118',
            methodSplits: [
                { method: EncounterMethod.Grass, split: 'Winona' },
                { method: EncounterMethod.OldRod, split: 'Winona' },
                { method: EncounterMethod.GoodRod, split: 'Winona' },
                { method: EncounterMethod.SuperRod, split: 'Winona' },
                { method: EncounterMethod.Surf, split: 'Winona' },
            ],
            battles: [
                {
                    battleKey: 'interviewers-gabby-and-ty',
                    customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
                    x: 17.75,
                    y: 41.6,
                },
                {
                    battleKey: 'fisherman-barny',
                    x: 27.68,
                    y: 76.72,
                },
                {
                    battleKey: 'bird-keeper-chester',
                    x: 58.04,
                    y: 36.72,
                },
                {
                    battleKey: 'bird-keeper-perry',
                    x: 72.32,
                    y: 51.72,
                },
            ],
        },
    ],
};

export default ROUTE_118;
