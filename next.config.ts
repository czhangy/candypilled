import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    devIndicators: false,
    logging: {
        incomingRequests: false,
    },
    redirects: async () => [
        {
            source: '/natures',
            destination: '/references?tab=natures',
            permanent: true,
        },
        {
            source: '/types',
            destination: '/references?tab=types',
            permanent: true,
        },
    ],
};

export default nextConfig;
