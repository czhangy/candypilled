import TRICK_HOUSE from '@/lib/data/emerald/locations/trick-house';
import { Split } from '@/lib/static/types';

const WALLACE: Split = {
    name: 'Wallace',
    locations: [TRICK_HOUSE],
    // Champion split -- Wallace is Emerald's champion (Steven's role in
    // Ruby/Sapphire), so this resolves against the save's main-story-
    // cleared flag rather than a badge bit.
    saveCondition: { type: 'gameClear' },
};

export default WALLACE;
