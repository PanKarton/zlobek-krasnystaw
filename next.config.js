/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['pl'],
    defaultLocale: 'pl',
  },
  trailingSlash: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'admin.zlobek-krasnystaw.pl',
      },
    ],
  },
};

module.exports = nextConfig;
