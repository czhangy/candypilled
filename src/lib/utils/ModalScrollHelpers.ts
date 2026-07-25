export default class ModalScrollHelpers {
    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static openModalCount = 0;
    private static overflowBeforeLock = '';

    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** Blocks page scroll, remembering the prior overflow the first time any modal locks it. */
    static lock(): void {
        if (ModalScrollHelpers.openModalCount === 0) {
            ModalScrollHelpers.overflowBeforeLock =
                document.body.style.overflow;
            document.body.style.overflow = 'hidden';
        }
        ModalScrollHelpers.openModalCount += 1;
    }

    /** Releases this modal's scroll lock, restoring page scroll once no modal remains open. */
    static unlock(): void {
        ModalScrollHelpers.openModalCount -= 1;
        if (ModalScrollHelpers.openModalCount === 0) {
            document.body.style.overflow =
                ModalScrollHelpers.overflowBeforeLock;
        }
    }
}
