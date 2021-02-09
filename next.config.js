const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');
const withImage = require('next-images')
const isProd = process.env.NODE_ENV === "production";

module.exports = withPlugins([
    [
        withPWA({
            images: {
                domains: ['picsum.photos', 'enzeo.s3.ap-south-1.amazonaws.com', 'srvles.s3.ap-south-1.amazonaws.com'],
            },
            pwa: {
                disable: !isProd,
                dest: "public"
            },
        }),
        withImage()
    ],
]);
