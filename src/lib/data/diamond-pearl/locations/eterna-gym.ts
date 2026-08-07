import { eternaGym } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ETERNA_GYM: Location = {
    name: 'Eterna Gym',
    map: eternaGym,
    battles: [
        {
            metadata: [],
            battleKey: 'lass-caroline',
            x: 30.8,
            y: 44.8,
        },
        {
            metadata: [],
            battleKey: 'aroma-lady-jenna',
            x: 27.8,
            y: 88.7,
        },
        {
            metadata: [],
            battleKey: 'aroma-lady-angela',
            x: 72.4,
            y: 60.2,
        },
        {
            metadata: [],
            battleKey: 'beauty-lindsay',
            x: 65.3,
            y: 32,
        },
        {
            metadata: [BattleMetadata.Boss],
            battleKey: 'leader-gardenia-gardenia',
            x: 48.1,
            y: 13.3,
        },
    ],
};

export default ETERNA_GYM;
