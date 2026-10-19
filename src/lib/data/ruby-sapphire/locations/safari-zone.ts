import {
    safariZoneNortheast,
    safariZoneNorthwest,
    safariZoneSoutheast,
    safariZoneSouthwest,
} from '@/lib/data/ruby-sapphire/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const RODS_AND_SURF_WINONA = [
    { method: EncounterMethod.Grass, split: 'Winona' },
    { method: EncounterMethod.OldRod, split: 'Winona' },
    { method: EncounterMethod.GoodRod, split: 'Winona' },
    { method: EncounterMethod.SuperRod, split: 'Winona' },
    { method: EncounterMethod.Surf, split: 'Winona' },
];

const SAFARI_ZONE: Location = {
    name: 'Safari Zone',
    subareas: [
        {
            name: 'Area 1',
            map: safariZoneSoutheast,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-safari-zone-se',
            methodSplits: [{ method: EncounterMethod.Grass, split: 'Winona' }],
        },
        {
            name: 'Area 2',
            map: safariZoneSouthwest,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-safari-zone-sw',
            methodSplits: RODS_AND_SURF_WINONA,
        },
        {
            name: 'Area 3',
            map: safariZoneNorthwest,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-safari-zone-nwmach-bike-area',
            methodSplits: RODS_AND_SURF_WINONA,
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
        },
    ],
};

export default SAFARI_ZONE;
