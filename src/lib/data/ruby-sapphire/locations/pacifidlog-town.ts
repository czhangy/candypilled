import { pacifidlogTown } from '@/lib/data/ruby-sapphire/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const PACIFIDLOG_TOWN: Location = {
    name: 'Pacifidlog Town',
    map: pacifidlogTown,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'pacifidlog-town',
    methodSplits: [
        { method: EncounterMethod.OldRod, split: 'Winona' },
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
        { method: EncounterMethod.Surf, split: 'Winona' },
        { method: EncounterMethod.Trade, split: 'Winona' },
    ],
};

export default PACIFIDLOG_TOWN;
