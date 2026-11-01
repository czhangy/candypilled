import { maniacTunnel } from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const MANIAC_TUNNEL: Location = {
    name: 'Maniac Tunnel',
    map: maniacTunnel,
    mapAnchor: MapAnchor.Right,
    encountersKey: 'maniac-tunnel',
    items: [
        {
            category: ItemCategory.TmHm,
            count: 1,
            hidden: false,
            method: 'Ground',
            slug: 'dragon-pulse',
        },
    ],
    methodSplits: [{ method: EncounterMethod.Cave, split: 'Wake' }],
};

export default MANIAC_TUNNEL;
