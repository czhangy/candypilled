// A Gen III save file is 128 KB, split into two 0xE000-byte "game save
// blocks" (main + backup, alternated on each in-game save for
// wear-leveling), each made of 14 fixed-size 4 KB sections. Unlike Gen IV's
// two contiguous general/storage blocks, a section's physical position
// within its game save block is NOT fixed to its section ID -- sections
// rotate position on every save (pret/pokeruby's src/save.c) and must be
// identified by their own footer. Verified against
// https://bulbapedia.bulbagarden.net/wiki/Save_data_structure_(Generation_III)
// and pret/pokeruby's src/save.c (sSaveBlockChunks, which pins section ID 0
// to gSaveBlock2, IDs 1-4 to gSaveBlock1's four chunks, and IDs 5-13 to
// gPokemonStorage's nine chunks).
const HALF_SIZE = 0xe000;
const SECTOR_SIZE = 4096;
const SECTOR_DATA_SIZE = 3968;
const SECTIONS_PER_BLOCK = 14;

const FOOTER_ID_OFFSET = 0x0ff4;
const FOOTER_CHECKSUM_OFFSET = 0x0ff6;
const FOOTER_SIGNATURE_OFFSET = 0x0ff8;
const FOOTER_SIGNATURE = 0x08012025;
const FOOTER_COUNTER_OFFSET = 0x0ffc;

// The number of bytes checksummed within each section's data region --
// smaller than SECTOR_DATA_SIZE for some sections, per Bulbapedia's
// "Section ID" table (Ruby/Sapphire-specific; re-verify for other Gen III
// games before reusing).
const CHECKSUM_LENGTHS: Record<number, number> = {
    0: 3884,
    1: 3968,
    2: 3968,
    3: 3968,
    4: 3848,
    5: 3968,
    6: 3968,
    7: 3968,
    8: 3968,
    9: 3968,
    10: 3968,
    11: 3968,
    12: 3968,
    13: 2000,
};

type ActiveBlock = {
    sections: Map<number, number>;
    counter: number;
};

export default class Gen3SaveBlocks {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** Active block's trainer-info (section 0) file offset, and its SaveBlock1/PC-buffer data reconstructed as contiguous views, or throws if no block validates. */
    static locate(view: DataView): {
        trainerInfoOffset: number;
        saveBlock1View: DataView;
        pcBufferView: DataView;
    } {
        if (view.byteLength < HALF_SIZE * 2) {
            throw new Error(
                "This doesn't look like a Ruby/Sapphire save file."
            );
        }

        const blockA = Gen3SaveBlocks.readBlock(view, 0);
        const blockB = Gen3SaveBlocks.readBlock(view, HALF_SIZE);
        const preferB =
            blockB !== undefined &&
            (blockA === undefined || blockB.counter >= blockA.counter);
        const block = preferB ? blockB : blockA;
        if (!block) {
            throw new Error(
                "This save file's data failed checksum validation."
            );
        }

        const requireSection = (id: number): number => {
            const offset = block.sections.get(id);
            if (offset === undefined) {
                throw new Error(
                    "This save file's data failed checksum validation."
                );
            }
            return offset;
        };

        return {
            trainerInfoOffset: requireSection(0),
            // SaveBlock1's flags array and party both live within the first
            // two chunks (sections 1-2) -- see Gen3SplitParser/Gen3SaveParser.
            saveBlock1View: Gen3SaveBlocks.concatSections(view, [
                requireSection(1),
                requireSection(2),
            ]),
            pcBufferView: Gen3SaveBlocks.concatSections(
                view,
                [5, 6, 7, 8, 9, 10, 11, 12, 13].map(requireSection)
            ),
        };
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    // Reads every one of a game save block's 14 physical sectors (in
    // whatever rotated order they currently sit in), keeping only sections
    // whose signature and checksum both validate. Every section shares one
    // save-index counter (pret/pokeruby's WriteSingleChunk writes the same
    // gSaveCounter into every section of one save event), so any validated
    // section's counter represents the whole block.
    private static readBlock(
        view: DataView,
        blockOffset: number
    ): ActiveBlock | undefined {
        const sections = new Map<number, number>();
        let counter: number | undefined;

        for (let sector = 0; sector < SECTIONS_PER_BLOCK; sector += 1) {
            const sectorOffset = blockOffset + sector * SECTOR_SIZE;
            const signature = view.getUint32(
                sectorOffset + FOOTER_SIGNATURE_OFFSET,
                true
            );
            if (signature !== FOOTER_SIGNATURE) continue;

            const id = view.getUint16(sectorOffset + FOOTER_ID_OFFSET, true);
            const checksumLength = CHECKSUM_LENGTHS[id];
            if (checksumLength === undefined) continue;
            if (
                !Gen3SaveBlocks.isSectionValid(
                    view,
                    sectorOffset,
                    checksumLength
                )
            ) {
                continue;
            }

            sections.set(id, sectorOffset);
            counter = view.getUint32(
                sectorOffset + FOOTER_COUNTER_OFFSET,
                true
            );
        }

        if (sections.size < SECTIONS_PER_BLOCK || counter === undefined) {
            return undefined;
        }
        return { sections, counter };
    }

    private static isSectionValid(
        view: DataView,
        sectorOffset: number,
        checksumLength: number
    ): boolean {
        let sum = 0;
        for (let i = 0; i + 4 <= checksumLength; i += 4) {
            sum = (sum + view.getUint32(sectorOffset + i, true)) >>> 0;
        }
        const folded = ((sum & 0xffff) + (sum >>> 16)) & 0xffff;
        const storedChecksum = view.getUint16(
            sectorOffset + FOOTER_CHECKSUM_OFFSET,
            true
        );
        return folded === storedChecksum;
    }

    // Reconstructs a logically contiguous struct (SaveBlock1 or the PC
    // storage buffer) that pokeruby split across multiple 3968-byte section
    // chunks, by copying each section's data region back-to-back in chunk
    // order.
    private static concatSections(
        view: DataView,
        sectionOffsets: number[]
    ): DataView {
        const buffer = new Uint8Array(sectionOffsets.length * SECTOR_DATA_SIZE);
        sectionOffsets.forEach((offset, index) => {
            const chunk = new Uint8Array(
                view.buffer,
                view.byteOffset + offset,
                SECTOR_DATA_SIZE
            );
            buffer.set(chunk, index * SECTOR_DATA_SIZE);
        });
        return new DataView(buffer.buffer);
    }
}
