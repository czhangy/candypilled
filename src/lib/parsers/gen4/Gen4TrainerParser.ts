import { getGen4SaveLayout } from '@/lib/parsers/gen4/gen4-save-layouts';
import Gen4SaveBlocks from '@/lib/parsers/gen4/Gen4SaveBlocks';
import { Game } from '@/lib/static/types';

export default class Gen4TrainerParser {
    /** The save's protagonist gender (PlayerProfile.gender: 0 = male, 1 = female). */
    static parseGender(game: Game, buffer: ArrayBuffer): 'male' | 'female' {
        const view = new DataView(buffer);
        const layout = getGen4SaveLayout(game.version);
        const { generalBlockOffset } = Gen4SaveBlocks.locate(view, layout);

        const genderByte = view.getUint8(
            generalBlockOffset + layout.genderOffset
        );
        return genderByte === 1 ? 'female' : 'male';
    }
}
