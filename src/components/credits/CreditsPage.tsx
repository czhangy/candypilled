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
            title: 'Data',
            credits: [
                {
                    name: '@smogon/calc',
                    description:
                        'For supporting damage calculation out-of-the-box',
                    url: 'https://github.com/smogon/damage-calc',
                },
                {
                    name: 'DSPRE',
                    description:
                        'For making it possible to manually scrape battle data from DS ROMs',
                    url: 'https://github.com/Egor-n/DSPRE',
                },
                {
                    name: 'PokeAPI',
                    description:
                        'For easy access to species, move, ability, item, and encounter data',
                    url: 'https://pokeapi.co/',
                },
            ],
        },
        {
            title: 'Assets',
            credits: [
                {
                    name: 'Bulbapedia',
                    description: 'For overworld map images and logos',
                    url: 'https://bulbapedia.bulbagarden.net/',
                },
                {
                    name: 'PokeAPI',
                    description: 'For full sprites across generations',
                    url: 'https://pokeapi.co/',
                },
                {
                    name: 'pokesprite',
                    description: 'For box and item sprites',
                    url: 'https://github.com/msikma/pokesprite',
                },
                {
                    name: 'Pokémon Showdown',
                    description: 'For trainer sprites',
                    url: 'https://play.pokemonshowdown.com/sprites/trainers/',
                },
                {
                    name: 'spaceemotion',
                    description: 'For Platinum overworld trainer sprites',
                    url: 'https://www.spriters-resource.com/profile/spaceemotion/',
                },
            ],
        },
        {
            title: 'Inspiration',
            credits: [
                {
                    name: 'Nuzlocke.app',
                    description:
                        'For being the original Nuzlocke tracker that inspired me to make my own',
                    url: 'https://nuzlocke.app',
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
