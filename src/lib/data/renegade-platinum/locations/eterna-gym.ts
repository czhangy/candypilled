import { eternaGym } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ETERNA_GYM: Location = {
    name: 'Eterna Gym',
    map: eternaGym,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            battleKey: 'lass-caroline',
            metadata: [],
            x: 64.5,
            y: 77,
        },
        {
            battleKey: 'aroma-lady-jenna',
            metadata: [],
            x: 92.6,
            y: 58.2,
        },
        {
            battleKey: 'aroma-lady-angela',
            metadata: [],
            x: 7.4,
            y: 20.7,
        },
        {
            battleKey: 'leader-gardenia',
            metadata: [BattleMetadata.Boss],
            x: 50,
            y: 5.9,
        },
    ],
};

export default ETERNA_GYM;
