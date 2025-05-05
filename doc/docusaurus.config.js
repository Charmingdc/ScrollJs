// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ScrollJs',
  tagline: 'A lightweight and flexible javascript scroll-triggered animation library with support for both custom and built-in css animations classess.',
  favicon: 'img/scrollJs.svg',
  url: 'https://scrolljs.vercel.app',
  baseUrl: '/',
  organizationName: 'Charmingdc',
  projectName: 'ScrollJs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
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
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
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
      image: 'img/scrolljs.jpg',
      navbar: {
        title: 'ScrollJs',
        logo: {
          alt: 'ScrollJs Logo',
          src: 'img/scrollJs.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Doc',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/Charmingdc/ScrollJs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Getting Started',
                to: '/docs/category/getting-started',
              },
              {
                label: 'Methods',
                to: '/docs/category/core-methods',
              },
              {
                label: 'Live Demos',
                to: '/docs/category/live-demos',
              },
              {
                label: 'Built-in Animations Classes',
                to: '/docs/category/built-in-animation-classes',
              },
              {
                label: 'Playground',
                to: '/docs/playground',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'X (Twitter)',
                href: 'https://x.com/Charmingdc01',
              },
              {
                label: 'NPM page',
                href: 'https://www.npmjs.com/package/@charmingdc/scrolljs',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Charmingdc/ScrollJs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ScrollJs, Inc. Built with '♥️' & Docusaurus by Charmingdc`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;