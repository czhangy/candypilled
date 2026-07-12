import readline from 'readline';
import { CheckboxOption } from '@/lib/static/types';

const ANSI_HIDE_CURSOR = '\x1b[?25l';
const ANSI_SHOW_CURSOR = '\x1b[?25h';

export const enterInteractiveMode = (): void => {
    readline.emitKeypressEvents(process.stdin);
    if (process.stdin.isTTY) process.stdin.setRawMode(true);
    process.stdout.write(ANSI_HIDE_CURSOR);
};

export const exitInteractiveMode = (): void => {
    if (process.stdin.isTTY) process.stdin.setRawMode(false);
    process.stdin.pause();
    process.stdout.write(ANSI_SHOW_CURSOR);
};

export const promptCheckbox = <T>(
    message: string,
    options: CheckboxOption<T>[]
): Promise<T[]> =>
    new Promise((resolve) => {
        const selected = new Set<number>();
        let cursor = 0;

        const render = (): void => {
            console.clear();
            console.log(
                `${message} (↑/↓ move, space toggle, enter confirm):\n`
            );
            options.forEach((option, index) => {
                const pointer = index === cursor ? '>' : ' ';
                const checkbox = selected.has(index) ? '[x]' : '[ ]';
                console.log(`${pointer} ${checkbox} ${option.label}`);
            });
        };

        const onKeypress = (
            _str: string,
            key: { ctrl: boolean; name: string }
        ): void => {
            if (key.ctrl && key.name === 'c') {
                exitInteractiveMode();
                process.exit(0);
            } else if (key.name === 'up') {
                cursor = (cursor - 1 + options.length) % options.length;
                render();
            } else if (key.name === 'down') {
                cursor = (cursor + 1) % options.length;
                render();
            } else if (key.name === 'space') {
                if (selected.has(cursor)) {
                    selected.delete(cursor);
                } else {
                    selected.add(cursor);
                }
                render();
            } else if (key.name === 'return') {
                process.stdin.removeListener('keypress', onKeypress);
                resolve(
                    options
                        .filter((_option, index) => selected.has(index))
                        .map((option) => option.value)
                );
            }
        };

        process.stdin.on('keypress', onKeypress);
        render();
    });
