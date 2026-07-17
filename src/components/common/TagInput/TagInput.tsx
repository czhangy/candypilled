'use client';

import { useState } from 'react';
import CloseIcon from '@/lib/icons/CloseIcon';
import styles from './TagInput.module.scss';

type TagInputProps = {
    onChange: (tags: string[]) => void;
    tags: string[];
};

const TagInput: React.FC<TagInputProps> = ({ onChange, tags }) => {
    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [draft, setDraft] = useState('');

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleDraftChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setDraft(event.target.value);
    };

    const handleAddTag = (): void => {
        const trimmed = draft.trim();
        if (trimmed && !tags.includes(trimmed)) {
            onChange([...tags, trimmed]);
        }
        setDraft('');
    };

    const handleKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement>
    ): void => {
        if (event.key === 'Enter' || event.key === ',') {
            event.preventDefault();
            handleAddTag();
        } else if (event.key === 'Backspace' && !draft && tags.length > 0) {
            onChange(tags.slice(0, -1));
        }
    };

    const handleRemoveTag = (tag: string): void => {
        onChange(tags.filter((existingTag) => existingTag !== tag));
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['tag-input']}>
            {tags.map((tag) => (
                <span className={styles.tag} key={tag}>
                    {tag}
                    <button
                        aria-label={`Remove ${tag}`}
                        className={styles.remove}
                        onClick={() => handleRemoveTag(tag)}
                        type="button"
                    >
                        <CloseIcon />
                    </button>
                </span>
            ))}
            <input
                className={styles.input}
                onBlur={handleAddTag}
                onChange={handleDraftChange}
                onKeyDown={handleKeyDown}
                placeholder="Add tag…"
                type="text"
                value={draft}
            />
        </div>
    );
};

export default TagInput;
