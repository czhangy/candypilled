import Tooltip from '@/components/common/Tooltip/Tooltip';
import DayIcon from '@/lib/icons/DayIcon';
import MorningIcon from '@/lib/icons/MorningIcon';
import NightIcon from '@/lib/icons/NightIcon';
import styles from './TimeOfDayButtons.module.scss';

type TimeOfDayButtonsProps = {
    onSelect: (time: string) => void;
    selectedTime?: string;
    times: string[];
};

const TimeOfDayButtons: React.FC<TimeOfDayButtonsProps> = ({
    onSelect,
    selectedTime,
    times,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const TIME_OF_DAY_LABELS: Record<string, string> = {
        'time-morning': 'Morning',
        'time-day': 'Day',
        'time-night': 'Night',
    };

    const TIME_OF_DAY_ICONS: Record<string, React.FC> = {
        'time-morning': MorningIcon,
        'time-day': DayIcon,
        'time-night': NightIcon,
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['time-of-day-buttons']}>
            {times.map((time) => {
                const TimeOfDayIcon = TIME_OF_DAY_ICONS[time];
                return (
                    <Tooltip
                        key={time}
                        position="center"
                        text={TIME_OF_DAY_LABELS[time]}
                    >
                        <button
                            aria-label={TIME_OF_DAY_LABELS[time]}
                            aria-pressed={time === selectedTime}
                            className={[
                                styles['time-of-day-button'],
                                time === selectedTime &&
                                    styles['time-of-day-button--active'],
                            ]
                                .filter(Boolean)
                                .join(' ')}
                            onClick={() => onSelect(time)}
                            type="button"
                        >
                            <TimeOfDayIcon />
                        </button>
                    </Tooltip>
                );
            })}
        </div>
    );
};

export default TimeOfDayButtons;
