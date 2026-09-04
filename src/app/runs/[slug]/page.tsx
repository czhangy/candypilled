import RunPageLoader from '@/components/run/RunPageLoader/RunPageLoader';

type RunProps = {
    params: Promise<{ slug: string }>;
};

export default async function Run({ params }: RunProps) {
    const { slug } = await params;
    return <RunPageLoader slug={slug} />;
}
