import { Game, PersonalBest } from '@/lib/static/types';
import BattleHelpers from '@/lib/utils/BattleHelpers';
import HallOfFameHelpers from '@/lib/utils/HallOfFameHelpers';
import LocalStorageHelpers from '@/lib/utils/LocalStorageHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';

export default class PersonalBestHelpers {
    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static readonly STORAGE_KEY = 'candypilled-personal-bests';
    private static readonly EMPTY: PersonalBest = { battleKey: null };

    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** game's stored personal best, or the empty record if none is saved yet. */
    static get(game: Game): PersonalBest {
        const stored = LocalStorageHelpers.getItem<
            Record<string, PersonalBest>
        >(PersonalBestHelpers.STORAGE_KEY, {});
        return (
            stored[StringHelpers.toSlug(game.name)] ?? PersonalBestHelpers.EMPTY
        );
    }

    /**
     * Whether any attempt of game has ever reached the Hall of Fame. Once
     * true, personal best no longer applies — the run has already cleared
     * everything there is to reach.
     */
    static hasClearedGame(game: Game): boolean {
        const slug = StringHelpers.toSlug(game.name);
        return HallOfFameHelpers.getSnapshot().some(
            (entry) => entry.game === slug
        );
    }

    /** Persists candidate as game's personal best only if it represents more progress (per gender's battle order) than what's currently stored. */
    static async considerCandidate(
        game: Game,
        gender: 'male' | 'female' | undefined,
        candidate: PersonalBest
    ): Promise<void> {
        const current = PersonalBestHelpers.get(game);
        if (!candidate.battleKey) return;
        if (
            current.battleKey &&
            BattleHelpers.getBattlePosition(
                game,
                candidate.battleKey,
                gender
            ) <=
                BattleHelpers.getBattlePosition(game, current.battleKey, gender)
        ) {
            return;
        }

        const stored = LocalStorageHelpers.getItem<
            Record<string, PersonalBest>
        >(PersonalBestHelpers.STORAGE_KEY, {});
        stored[StringHelpers.toSlug(game.name)] = candidate;
        LocalStorageHelpers.setItem(PersonalBestHelpers.STORAGE_KEY, stored);
    }
}
