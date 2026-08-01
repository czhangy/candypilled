// Platinum's save file is laid out as two 0x40000-byte halves (a main copy
// and a backup, alternated on each in-game save for wear-leveling), each
// containing a general block (trainer info + party) immediately followed by
// a storage block (PC boxes). Sizes/offsets/algorithm per Bulbapedia's
// "Save data structure (Generation IV)" article.
const HALF_SIZE = 0x40000;
const GENERAL_BLOCK_SIZE = 0xcf2c;
const STORAGE_BLOCK_SIZE = 0x121e4;
const FOOTER_SIZE = 20;
const FOOTER_SAVE_COUNT_OFFSET = 0x04;
const FOOTER_CHECKSUM_OFFSET = 0x12;

export default class Gen4SaveBlocks {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** The active save half's general/storage block offsets, or throws if no half validates. */
    static locate(view: DataView): {
        generalBlockOffset: number;
        storageBlockOffset: number;
    } {
        const halfOffset = Gen4SaveBlocks.selectActiveHalf(view);
        return {
            generalBlockOffset: halfOffset,
            storageBlockOffset: halfOffset + GENERAL_BLOCK_SIZE,
        };
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    // Picks whichever save half has the higher footer save counter and a
    // valid block checksum, falling back to the other half if that one
    // doesn't validate (a save can be mid-write to its active half).
    private static selectActiveHalf(view: DataView): number {
        if (view.byteLength < HALF_SIZE * 2) {
            throw new Error("This doesn't look like a Platinum save file.");
        }

        const counterA = Gen4SaveBlocks.readSaveCounter(view, 0);
        const counterB = Gen4SaveBlocks.readSaveCounter(view, HALF_SIZE);
        const halves = counterB > counterA ? [HALF_SIZE, 0] : [0, HALF_SIZE];

        const validHalf = halves.find(
            (half) =>
                Gen4SaveBlocks.isBlockValid(view, half, GENERAL_BLOCK_SIZE) &&
                Gen4SaveBlocks.isBlockValid(
                    view,
                    half + GENERAL_BLOCK_SIZE,
                    STORAGE_BLOCK_SIZE
                )
        );
        if (validHalf === undefined) {
            throw new Error(
                "This save file's data failed checksum validation."
            );
        }

        return validHalf;
    }

    private static readSaveCounter(view: DataView, halfOffset: number): number {
        const footerStart = halfOffset + GENERAL_BLOCK_SIZE - FOOTER_SIZE;
        return view.getUint32(footerStart + FOOTER_SAVE_COUNT_OFFSET, true);
    }

    private static isBlockValid(
        view: DataView,
        blockOffset: number,
        blockSize: number
    ): boolean {
        const dataLength = blockSize - FOOTER_SIZE;
        const bytes = new Uint8Array(
            view.buffer,
            view.byteOffset + blockOffset,
            dataLength
        );
        const storedChecksum = view.getUint16(
            blockOffset + dataLength + FOOTER_CHECKSUM_OFFSET,
            true
        );

        return Gen4SaveBlocks.crc16(bytes) === storedChecksum;
    }

    private static crc16(bytes: Uint8Array): number {
        let crc = 0xffff;
        for (const byte of bytes) {
            crc ^= byte << 8;
            for (let bit = 0; bit < 8; bit += 1) {
                crc =
                    crc & 0x8000
                        ? ((crc << 1) ^ 0x1021) & 0xffff
                        : (crc << 1) & 0xffff;
            }
        }
        return crc;
    }
}
