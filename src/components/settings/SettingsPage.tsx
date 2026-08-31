'use client';

import { useSyncExternalStore } from 'react';
import Toggle from '@/components/common/Toggle/Toggle';
import { SETTINGS } from '@/lib/static/constants';
import SettingsHelpers from '@/lib/utils/SettingsHelpers';
import styles from './SettingsPage.module.scss';

const SettingsPage: React.FC = () => {
    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const values = useSyncExternalStore(
        SettingsHelpers.subscribe,
        SettingsHelpers.getSnapshot,
        SettingsHelpers.getServerSnapshot
    );

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleToggleChange = async (
        id: string,
        checked: boolean
    ): Promise<void> => {
        await SettingsHelpers.saveSetting(id, checked);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['settings-page']}>
            <ul className={styles.list}>
                {SETTINGS.map((setting) => (
                    <li className={styles.setting} key={setting.id}>
                        <span className={styles.title}>{setting.title}</span>
                        <Toggle
                            checked={values[setting.id] ?? false}
                            label={setting.title}
                            onChange={(checked) =>
                                handleToggleChange(setting.id, checked)
                            }
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SettingsPage;
