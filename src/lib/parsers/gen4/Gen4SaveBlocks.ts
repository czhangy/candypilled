import { Gen4SaveLayout } from '@/lib/static/types';

// A Gen IV save file is laid out as two equal-size halves (a main copy and a
// backup, alternated on each in-game save for wear-leveling), each
// containing a general block (trainer info + party) immediately followed by
// a storage block (PC boxes). The two blocks' sizes are game-specific (see
// gen4-save-layouts.ts) -- everything else about this halving/checksum
// scheme is shared across Gen IV games, per Bulbapedia's "Save data
// structure (Generation IV)" article.
const HALF_SIZE = 0x40000;
const FOOTER_SIZE = 20;
const FOOTER_SAVE_COUNT_OFFSET = 0x04;
const FOOTER_CHECKSUM_OFFSET = 0x12;

export default class Gen4SaveBlocks {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** layout's active save half's general/storage block offsets, or throws if no half validates. */
    static locate(
        view: DataView,
        layout: Gen4SaveLayout
    ): {
        generalBlockOffset: number;
        storageBlockOffset: number;
    } {
        const halfOffset = Gen4SaveBlocks.selectActiveHalf(view, layout);
        return {
            generalBlockOffset: halfOffset,
            storageBlockOffset: halfOffset + layout.generalBlockSize,
        };
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    // Picks whichever save half has the higher footer save counter and a
    // valid block checksum, falling back to the other half if that one
    // doesn't validate (a save can be mid-write to its active half).
    private static selectActiveHalf(
        view: DataView,
        layout: Gen4SaveLayout
    ): number {
        if (view.byteLength < HALF_SIZE * 2) {
            throw new Error("This doesn't look like a Gen IV save file.");
        }

        const counterA = Gen4SaveBlocks.readSaveCounter(view, 0, layout);
        const counterB = Gen4SaveBlocks.readSaveCounter(
            view,
            HALF_SIZE,
            layout
        );
        const halves = counterB > counterA ? [HALF_SIZE, 0] : [0, HALF_SIZE];

        const validHalf = halves.find(
            (half) =>
                Gen4SaveBlocks.isBlockValid(
                    view,
                    half,
                    layout.generalBlockSize
                ) &&
                Gen4SaveBlocks.isBlockValid(
                    view,
                    half + layout.generalBlockSize,
                    layout.storageBlockSize
                )
        );
        if (validHalf === undefined) {
            throw new Error(
                "This save file's data failed checksum validation."
            );
        }

        return validHalf;
    }

    private static readSaveCounter(
        view: DataView,
        halfOffset: number,
        layout: Gen4SaveLayout
    ): number {
        const footerStart = halfOffset + layout.generalBlockSize - FOOTER_SIZE;
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
