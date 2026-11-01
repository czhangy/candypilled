import { solaceonTown } from '@/lib/data/renegade-platinum/maps';
import { ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SOLACEON_TOWN: Location = {
    name: 'Solaceon Town',
    map: solaceonTown,
    mapAnchor: MapAnchor.Center,
    items: [
        {
            category: ItemCategory.Berry,
            count: 1,
            hidden: false,
            method: 'Berry tree',
            slug: 'persim-berry',
        },
        {
            category: ItemCategory.Berry,
            count: 2,
            hidden: false,
            method: 'Berry tree',
            slug: 'nanab-berry',
        },
        {
            category: ItemCategory.Berry,
            count: 1,
            hidden: false,
            method: 'Berry tree',
            slug: 'figy-berry',
        },
    ],
};

export default SOLACEON_TOWN;
