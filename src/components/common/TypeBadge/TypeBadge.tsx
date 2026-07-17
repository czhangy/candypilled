import Image from 'next/image';

type TypeBadgeProps = {
    height: number;
    type: string;
    width: number;
};

const TypeBadge: React.FC<TypeBadgeProps> = ({ height, type, width }) => {
    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <Image
            alt={type}
            height={height}
            src={`/types/${type}.png`}
            width={width}
        />
    );
};

export default TypeBadge;
