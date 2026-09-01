import { veilstoneCity } from '@/lib/data/platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VEILSTONE_CITY: Location = {
    name: 'Veilstone City',
    map: veilstoneCity,
    mapAnchor: MapAnchor.TopLeft,
    encountersKey: 'veilstone-city',
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
            customHeight: 53,
            battleKey: 'galactic-grunt-m-veilstone-city',
            x: 40.4,
            y: 34.8,
        },
    ],
};

export default VEILSTONE_CITY;
