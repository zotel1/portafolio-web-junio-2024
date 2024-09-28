/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images:{
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'example.com',
                port: '',
                pathname: '/path-to-images/**',
            },
    ],
}
};

export default nextConfig;
