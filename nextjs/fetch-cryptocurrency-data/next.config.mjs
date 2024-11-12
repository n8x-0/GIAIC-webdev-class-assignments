/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.coinlayer.com',
                port: '',
                pathname: '/icons/**',
            },
        ],
    },
};

export default nextConfig;
