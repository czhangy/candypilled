import Image from 'next/image';

type CategoryBadgeProps = {
    category: string;
    height: number;
    width: number;
};

const CategoryBadge: React.FC<CategoryBadgeProps> = ({
    category,
    height,
    width,
}) => {
    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <Image
            alt={category}
            height={height}
            src={`/move-categories/${category}.png`}
            width={width}
        />
    );
};

export default CategoryBadge;
