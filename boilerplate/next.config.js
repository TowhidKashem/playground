/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
    domains: ['docrdsfx76ssb.cloudfront.net', 'tailwindui.com']
  },
  env: {
    ENVIRONMENT: process.env.ENVIRONMENT,
    I18NEXUS_API_KEY: process.env.I18NEXUS_API_KEY
  },
  i18n
  // async rewrites() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/Home'
  //     }
  //   ];
  // }
};
