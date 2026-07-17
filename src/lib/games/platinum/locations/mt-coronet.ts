import {
    mtCoronet1f207,
    mtCoronet1f211,
    mtCoronet1f216,
    mtCoronet2f,
    mtCoronet3f,
    mtCoronet4f,
    mtCoronet5f,
    mtCoronet6f,
    mtCoronetB1f,
    mtCoronetExterior,
    mtCoronetTunnel,
} from '@/lib/games/platinum/maps';
import { Location } from '@/lib/static/types';

const MT_CORONET: Location = {
    name: 'Mt Coronet',
    subareas: [
        { name: '1F (211)', map: mtCoronet1f211 },
        { name: '1F (207)', map: mtCoronet1f207 },
        { name: 'B1F', map: mtCoronetB1f },
        { name: '1F (216)', map: mtCoronet1f216 },
        { name: '2F', map: mtCoronet2f },
        { name: '3F', map: mtCoronet3f },
        { name: 'Exterior', map: mtCoronetExterior },
        { name: 'Tunnel', map: mtCoronetTunnel },
        { name: '4F', map: mtCoronet4f },
        { name: '5F', map: mtCoronet5f },
        { name: '6F', map: mtCoronet6f },
    ],
};

export default MT_CORONET;
