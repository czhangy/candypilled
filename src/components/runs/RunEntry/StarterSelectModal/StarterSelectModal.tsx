'use client';

import Modal from '@/components/common/Modal/Modal';
import StarterSelect from './StarterSelect/StarterSelect';

interface StarterSelectModalProps {
    accentColor: string;
    onClose: () => void;
    onSelect: (starter: string) => void;
    starters: string[];
    variant: string;
}

const StarterSelectModal: React.FC<StarterSelectModalProps> = ({
    accentColor,
    onClose,
    onSelect,
    starters,
    variant,
}) => {
    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <Modal
            accentColor={accentColor}
            onClose={onClose}
            title="Choose your starter"
        >
            <StarterSelect
                onSelect={onSelect}
                selected={null}
                starters={starters}
                variant={variant}
            />
        </Modal>
    );
};

export default StarterSelectModal;
