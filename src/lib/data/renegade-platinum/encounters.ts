import { EncounterMethod } from '@/lib/static/enums';
import { Encounter } from '@/lib/static/types';

export const ENCOUNTERS: Record<string, Encounter[]> = {
    'sinnoh-route-201': [
        {
            species: 'turtwig',
            method: EncounterMethod.Starter,
            minLevel: 5,
            maxLevel: 5,
            chance: null,
        },
        {
            species: 'chimchar',
            method: EncounterMethod.Starter,
            minLevel: 5,
            maxLevel: 5,
            chance: null,
        },
        {
            species: 'piplup',
            method: EncounterMethod.Starter,
            minLevel: 5,
            maxLevel: 5,
            chance: null,
        },
    ],
    'twinleaf-town': [
        {
            species: 'psyduck',
            method: EncounterMethod.Surf,
            minLevel: 20,
            maxLevel: 40,
            chance: 90,
        },
        {
            species: 'golduck',
            method: EncounterMethod.Surf,
            minLevel: 20,
            maxLevel: 40,
            chance: 10,
        },
        {
            species: 'magikarp',
            method: EncounterMethod.OldRod,
            minLevel: 10,
            maxLevel: 10,
            chance: 55,
        },
        {
            species: 'poliwag',
            method: EncounterMethod.OldRod,
            minLevel: 10,
            maxLevel: 10,
            chance: 45,
        },
        {
            species: 'magikarp',
            method: EncounterMethod.GoodRod,
            minLevel: 25,
            maxLevel: 25,
            chance: 55,
        },
        {
            species: 'poliwag',
            method: EncounterMethod.GoodRod,
            minLevel: 25,
            maxLevel: 25,
            chance: 45,
        },
        {
            species: 'gyarados',
            method: EncounterMethod.SuperRod,
            minLevel: 50,
            maxLevel: 50,
            chance: 55,
        },
        {
            species: 'poliwhirl',
            method: EncounterMethod.SuperRod,
            minLevel: 50,
            maxLevel: 50,
            chance: 45,
        },
    ],
    'twinleaf-town-house': [
        {
            species: 'eevee',
            method: EncounterMethod.Gift,
            minLevel: 5,
            maxLevel: 5,
            chance: null,
        },
    ],
    'sandgem-town-lab': [
        {
            species: 'turtwig',
            method: EncounterMethod.Starter,
            minLevel: 5,
            maxLevel: 5,
            chance: null,
        },
        {
            species: 'chimchar',
            method: EncounterMethod.Starter,
            minLevel: 5,
            maxLevel: 5,
            chance: null,
        },
        {
            species: 'piplup',
            method: EncounterMethod.Starter,
            minLevel: 5,
            maxLevel: 5,
            chance: null,
        },
    ],
};
