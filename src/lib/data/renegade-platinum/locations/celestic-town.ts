import { celesticRuins, celesticTown } from '@/lib/data/renegade-platinum/maps';
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
                { method: EncounterMethod.OldRod, split: 'Byron' },
                { method: EncounterMethod.GoodRod, split: 'Byron' },
                { method: EncounterMethod.SuperRod, split: 'Candice' },
            ],
            battles: [
                {
                    battleKey: 'galactic-grunt-m-celestic-town',
                    x: 48.2,
                    y: 31.4,
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
                    x: 50,
                    y: 9,
                },
            ],
        },
    ],
};

export default CELESTIC_TOWN;
