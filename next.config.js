/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['pl'],
    defaultLocale: 'pl',
  },
  images: {
    remotePatterns: [
      {
        hostname: '192.168.43.110',
      },
    ],
  },
};

module.exports = nextConfig;
