import { celesticRuins, celesticTown } from '@/lib/data/platinum/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CELESTIC_TOWN: Location = {
    name: 'Celestic Town',
    subareas: [
        {
            name: 'Town',
            map: celesticTown,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'celestic-town',
            methodSplits: [
                { method: EncounterMethod.Surf, split: 'Byron' },
                { method: EncounterMethod.GoodRod, split: 'Byron' },
                { method: EncounterMethod.OldRod, split: 'Byron' },
            ],
            battles: [
                {
                    battleKey: 'galactic-grunt-m-celestic-town',
                    x: 48.54,
                    y: 31.45,
                },
            ],
        },
        {
            name: 'Ruins',
            map: celesticRuins,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'galactic-boss-cyrus-celestic-ruins',
                    x: 50.18,
                    y: 9.35,
                },
            ],
        },
    ],
};

export default CELESTIC_TOWN;
