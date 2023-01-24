/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['pl'],
    defaultLocale: 'pl',
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'aoyqlmmxvd.cfolks.pl',
      },
    ],
  },
};

module.exports = nextConfig;
