import { veilstoneCity } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VEILSTONE_CITY: Location = {
    name: 'Veilstone City',
    map: veilstoneCity,
    tagPartner: [
        {
            battleKey: 'pkmn-trainer-dawn-veilstone-city-tag',
            gender: 'male',
        },
        {
            battleKey: 'pkmn-trainer-lucas-veilstone-city-tag',
            gender: 'female',
        },
    ],
    battles: [
        {
            metadata: [BattleMetadata.Tag],
            customHeight: 52,
            battleKey: 'galactic-grunt-m-veilstone-city',
            x: 32.2,
            y: 34.4,
        },
    ],
};

export default VEILSTONE_CITY;
