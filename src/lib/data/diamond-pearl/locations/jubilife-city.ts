import { jubilifeCity } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const JUBILIFE_CITY: Location = {
    name: 'Jubilife City',
    map: jubilifeCity,
    mapAnchor: MapAnchor.TopRight,
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
            customHeight: 40,
            battleKey: 'galactic-grunt-m-jubilife-city',
            x: 70.3,
            y: 5.2,
        },
    ],
};

export default JUBILIFE_CITY;
