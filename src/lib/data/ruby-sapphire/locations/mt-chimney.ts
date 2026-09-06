import {
    mtChimneyPostEvil,
    mtChimneyPreEvilAqua,
    mtChimneyPreEvilMagma,
} from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const MT_CHIMNEY: Location = {
    name: 'Mt Chimney',
    subareas: [
        {
            name: 'Pre-Evil',
            map: {
                Ruby: mtChimneyPreEvilMagma,
                Sapphire: mtChimneyPreEvilAqua,
            },
            mapAnchor: MapAnchor.Unaudited,
        },
        {
            name: 'Post-Evil',
            map: mtChimneyPostEvil,
            mapAnchor: MapAnchor.Unaudited,
        },
    ],
};

export default MT_CHIMNEY;
