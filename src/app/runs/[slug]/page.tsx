import RunPage from '@/components/run/RunPage';

interface RunProps {
    params: Promise<{ slug: string }>;
}

export default async function Run({ params }: RunProps) {
    const { slug } = await params;
    return <RunPage slug={slug} />;
}
