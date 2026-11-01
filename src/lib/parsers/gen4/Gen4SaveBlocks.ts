import { Gen4SaveLayout } from '@/lib/static/types';

// A Gen IV save file is laid out as two equal-size halves (a main copy and a
// backup), each containing a general block (trainer info + party)
// immediately followed by a storage block (PC boxes). The game saves the two
// blocks independently, each with its own save counter, so the newest general
// block and the newest storage block can live in different halves. The
// blocks' sizes are game-specific (see gen4-save-layouts.ts); the rest of the
// scheme is shared across Gen IV games, per Bulbapedia's "Save data structure
// (Generation IV)" article.
const HALF_SIZE = 0x40000;
const FOOTER_SIZE = 20;
const FOOTER_SAVE_COUNT_OFFSET = 0x04;
const FOOTER_CHECKSUM_OFFSET = 0x12;

export default class Gen4SaveBlocks {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** layout's newest valid general/storage block offsets (each picked independently across the two halves), or throws if either block has no valid copy. */
    static locate(
        view: DataView,
        layout: Gen4SaveLayout
    ): {
        generalBlockOffset: number;
        storageBlockOffset: number;
    } {
        if (view.byteLength < HALF_SIZE * 2) {
            throw new Error("This doesn't look like a Gen IV save file.");
        }

        return {
            generalBlockOffset: Gen4SaveBlocks.selectNewestBlock(
                view,
                [0, HALF_SIZE],
                layout.generalBlockSize
            ),
            storageBlockOffset: Gen4SaveBlocks.selectNewestBlock(
                view,
                [layout.generalBlockSize, HALF_SIZE + layout.generalBlockSize],
                layout.storageBlockSize
            ),
        };
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    // Of the block's two copies, the valid one with the higher footer save
    // counter (a block can be mid-write, so an invalid copy is skipped).
    private static selectNewestBlock(
        view: DataView,
        copyOffsets: number[],
        blockSize: number
    ): number {
        const newest = copyOffsets
            .filter((offset) =>
                Gen4SaveBlocks.isBlockValid(view, offset, blockSize)
            )
            .sort(
                (a, b) =>
                    Gen4SaveBlocks.readSaveCounter(view, b, blockSize) -
                    Gen4SaveBlocks.readSaveCounter(view, a, blockSize)
            )[0];
        if (newest === undefined) {
            throw new Error(
                "This save file's data failed checksum validation."
            );
        }

        return newest;
    }

    private static readSaveCounter(
        view: DataView,
        blockOffset: number,
        blockSize: number
    ): number {
        return view.getUint32(
            blockOffset + blockSize - FOOTER_SIZE + FOOTER_SAVE_COUNT_OFFSET,
            true
        );
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
