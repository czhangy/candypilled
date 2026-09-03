import RunLayout from '@/components/run/RunLayout/RunLayout';

type RunProps = {
    children: React.ReactNode;
    params: Promise<{ slug: string }>;
};

export default async function Layout({ children, params }: RunProps) {
    const { slug } = await params;
    return <RunLayout slug={slug}>{children}</RunLayout>;
}
