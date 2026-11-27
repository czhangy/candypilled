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
    transitions: [
        { height: 336, location: 'Route 132', width: 16, x: 2.5, y: 46.25 },
        { height: 336, location: 'Route 131', width: 16, x: 97.5, y: 53.75 },
    ],
};

export default PACIFIDLOG_TOWN;
