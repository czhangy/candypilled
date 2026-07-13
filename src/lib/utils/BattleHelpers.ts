import { Battle, BattlePokemon } from '@/lib/static/types';

export default class BattleHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    static getTeam(battle: Battle, starter: string | null): BattlePokemon[] {
        const teamForStarter = starter
            ? battle.teamsByStarter?.[starter]
            : undefined;

        return teamForStarter ?? battle.team ?? [];
    }
}
