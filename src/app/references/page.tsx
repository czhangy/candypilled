import { Suspense } from 'react';
import ReferencesPage from '@/components/references/ReferencesPage';

export default function References() {
    return (
        <Suspense>
            <ReferencesPage />
        </Suspense>
    );
}
