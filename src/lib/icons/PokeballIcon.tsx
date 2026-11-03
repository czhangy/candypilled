const PokeballIcon: React.FC = () => {
    return (
        <svg fill="none" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="9.5"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path
                d="M2.5 12h6.5M15 12h6.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
            />
            <circle
                cx="12"
                cy="12"
                r="3"
                stroke="currentColor"
                strokeWidth="2"
            />
        </svg>
    );
};

export default PokeballIcon;
