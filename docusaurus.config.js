// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Emil\'s Knowledge Garden',
  tagline: 'Collection of Emil\'s thoughts and ideas',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',



  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nb'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Emil Ramsvik',
        logo: {
          alt: 'Emil Ramsvik',
          src: 'img/favicon.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'gardenSidebar',
            position: 'left',
            label: 'Garden',
          },
          {
            href: 'https://github.com/emilRamsvik',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Garden',
            items: [
              {
                label: 'Garden',
                to: '/docs/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/EmilRamsvik',
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/emil-ramsvik',
              },
            ],
          },
          {
            title: 'More',
            items: [

            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Emil Severin Moen Ramsvik. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
module.exports = {
  plugins: [["@gracefullight/docusaurus-plugin-vercel-analytics"]],
};