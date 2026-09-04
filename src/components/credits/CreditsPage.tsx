import styles from './CreditsPage.module.scss';

const CreditsPage: React.FC = () => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    type Credit = {
        description: string;
        name: string;
        url: string;
    };

    type CreditGroup = {
        credits: Credit[];
        title: string;
    };

    const CREDIT_GROUPS: CreditGroup[] = [
        {
            title: 'Inspiration',
            credits: [
                {
                    name: 'Nuzlocke.app',
                    description: 'The original Nuzlocke tracker',
                    url: 'https://nuzlocke.app',
                },
            ],
        },
        {
            title: 'Data',
            credits: [
                {
                    name: '@smogon/calc',
                    description: 'Building damage calculations',
                    url: 'https://github.com/smogon/damage-calc',
                },
                {
                    name: 'DSPRE',
                    description: 'Scraping data and assets from ROMs',
                    url: 'https://github.com/Egor-n/DSPRE',
                },
                {
                    name: 'PokeAPI',
                    description:
                        'Curated species, move, ability, item, and encounter data',
                    url: 'https://pokeapi.co/',
                },
            ],
        },
        {
            title: 'Assets',
            credits: [
                {
                    name: 'Bulbapedia',
                    description: 'Game logos',
                    url: 'https://bulbapedia.bulbagarden.net/',
                },
                {
                    name: 'PokeAPI',
                    description: 'Battle sprites across generations',
                    url: 'https://pokeapi.co/',
                },
                {
                    name: 'pokesprite',
                    description: 'Box and item sprites',
                    url: 'https://github.com/msikma/pokesprite',
                },
                {
                    name: 'Pokémon Showdown',
                    description: 'Trainer sprites',
                    url: 'https://play.pokemonshowdown.com/sprites/trainers/',
                },
            ],
        },
        {
            title: 'Architecture',
            credits: [
                {
                    name: 'Vercel',
                    description: 'Hosting and deployment',
                    url: 'https://vercel.com/',
                },
            ],
        },
    ];

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['credits-page']}>
            <h1 className={styles.title}>Credits</h1>
            <p className={styles.subtitle}>
                Candypilled wouldn&apos;t exist without these projects and
                resources.
            </p>
            {CREDIT_GROUPS.map((group) => (
                <div className={styles.group} key={group.title}>
                    <h2 className={styles['group-title']}>{group.title}</h2>
                    <ul className={styles.list}>
                        {group.credits.map((credit) => (
                            <li className={styles.credit} key={credit.name}>
                                <a
                                    className={styles.name}
                                    href={credit.url}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    {credit.name}
                                </a>
                                <span className={styles.description}>
                                    {credit.description}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default CreditsPage;
