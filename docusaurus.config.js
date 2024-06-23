import { themes as prismThemes } from 'prism-react-renderer';
import FetchAndPickRandomArticle from './src/components/FetchAndPickRandomArticle';
const random = FetchAndPickRandomArticle();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Digital Garden',
  tagline: 'My ever growing digital garden, where I store new things that I learn, improve on old things, and try to have something to look back on. I love to learn and I love to share, so this is my attempt at doing both. The web-page is not only a way for me to share what I have learned continuously, but also to learn more about web-development. It is a way for me to learn by doing, so dont expect the absolute best.',
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
        blog: {
          blogTitle: 'Quick Thoughts',
          blogDescription: 'Or another way of saying "blog" without actually saying it.',
          postsPerPage: 10,
          showReadingTime: true, // When set to false, the "x min read" won't be shown
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All the posts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        indexName: 'tinyknowledge',
        appId: 'PW9ZB8I86O',
        apiKey: '79370fbd2fe5f590d8889ab2409ef11f',
      },
      // Replace with your project's social card
      image: 'img/social-card.jpg',
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
            to: '/docs/Garden',
            label: 'Garden',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left',
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
                to: '/docs/Garden',
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
        copyright: `Copyright © ${new Date().getFullYear()} Emil Severin Moen Ramsvik.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;