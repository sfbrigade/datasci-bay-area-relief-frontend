import {act} from '@testing-library/react';

export const idleForIO = async (): Promise<void> => {
    await act(async () => {
        await new Promise((resolve) => setImmediate(resolve));
    });
};
