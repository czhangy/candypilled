import { eternaGym } from '@/lib/data/platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ETERNA_GYM: Location = {
    name: 'Eterna Gym',
    map: eternaGym,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            metadata: [],
            battleKey: 'lass-caroline',
            x: 64.6,
            y: 79.6,
        },
        {
            metadata: [],
            battleKey: 'aroma-lady-jenna',
            x: 92.8,
            y: 62.8,
        },
        {
            metadata: [],
            battleKey: 'aroma-lady-angela',
            x: 7.2,
            y: 30.5,
        },
        {
            metadata: [BattleMetadata.Boss],
            battleKey: 'leader-gardenia',
            x: 49.9,
            y: 15.1,
        },
    ],
};

export default ETERNA_GYM;
