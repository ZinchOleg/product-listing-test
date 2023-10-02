/**
 * @type {import('next').NextConfig}
 */
const nextConfig   = {
    images: {
        loader: 'akamai',
        path: '',
    },
    assetPrefix: './',
    trailingSlash: true,
    output: 'export',
};

module.exports = nextConfig
