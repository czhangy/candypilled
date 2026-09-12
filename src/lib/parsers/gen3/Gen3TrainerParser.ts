import Gen3SaveBlocks from '@/lib/parsers/gen3/Gen3SaveBlocks';
import { Game } from '@/lib/static/types';

// pret/pokeruby's include/global.h: `struct SaveBlock2` (section ID 0,
// "Trainer info") starts with `/*0x00*/ u8 playerName[8];` then
// `/*0x08*/ u8 playerGender; // MALE, FEMALE`. SaveBlock2 is a distinct
// struct from SaveBlock1 -- section 0 does not hold the flags array (that's
// in section 2, via SaveBlock1 -- see Gen3SplitParser).
const GENDER_OFFSET = 0x08;

export default class Gen3TrainerParser {
    /** The save's protagonist gender (SaveBlock2.playerGender: 0 = male, 1 = female). */
    static parseGender(game: Game, buffer: ArrayBuffer): 'male' | 'female' {
        const view = new DataView(buffer);
        const { trainerInfoOffset } = Gen3SaveBlocks.locate(view);

        const genderByte = view.getUint8(trainerInfoOffset + GENDER_OFFSET);
        return genderByte === 1 ? 'female' : 'male';
    }
}
