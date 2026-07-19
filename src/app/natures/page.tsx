import { Suspense } from 'react';
import NaturesPage from '@/components/natures/NaturesPage';

export default function Natures() {
    return (
        <Suspense>
            <NaturesPage />
        </Suspense>
    );
}
