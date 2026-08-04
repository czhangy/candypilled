import { GameVersion } from '@/lib/static/types';

// TODO: populate exclusions/overrides/merges/splits/manualEncounters once
// Pearl's PokeAPI location-area data has been reviewed, following
// platinum.ts's pattern. See diamond.ts for why this isn't just copied from
// Diamond despite the two sharing every non-encounter field.
export const pearl: GameVersion = {
    id: 'pearl',
    label: 'Pearl',
    version: 'pearl',
    region: 'sinnoh',
    generation: 4,
};
