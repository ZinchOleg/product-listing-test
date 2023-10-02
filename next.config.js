/*
* @type {import('next').NextConfig}
const nextConfig = {}

module.exports = nextConfig
*/

/**
 * @type {import('next').NextConfig}
 */
const nextConfig   = {
    images: {
        loader: 'akamai',
        path: '',
    },
    assetPrefix: './',
};

export default   nextConfig;
