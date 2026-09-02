import { jubilifeCity } from '@/lib/data/diamond-pearl/maps';
import { GEN_4_TRUE_DOUBLE_HEIGHT } from '@/lib/static/constants';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const JUBILIFE_CITY: Location = {
    name: 'Jubilife City',
    map: jubilifeCity,
    tagPartner: [
        {
            battleKey: 'pkmn-trainer-dawn-jubilife-city-tag',
            gender: 'male',
        },
        {
            battleKey: 'pkmn-trainer-lucas-jubilife-city-tag',
            gender: 'female',
        },
    ],
    battles: [
        {
            metadata: [BattleMetadata.Tag],
            customHeight: GEN_4_TRUE_DOUBLE_HEIGHT,
            battleKey: 'galactic-grunt-m-jubilife-city',
            x: 72.7,
            y: 5.6,
        },
    ],
};

export default JUBILIFE_CITY;
