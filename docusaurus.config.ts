import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Neural Arena Docs',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.neuralarena.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'av1ctor', // Usually your GitHub org/user name.
  projectName: 'neuralarena-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '📚 Docs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '📖 Whitepaper',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: '📰 Blog',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          items: [
            {
              label: '📚 Docs',
              to: '/docs/intro',
            },
            {
              label: '📖 Whitepaper',
              to: '/docs/intro',
            },
          ],
        },
        {
          items: [
            {
              label: '📰 Blog',
              to: '/docs/intro',
            },
          ],
        },
        {
          items: [
            {
              label: '📱 App',
              href: 'https://localhost:1234',
            },
            {
              label: '👨‍💻 GitHub',
              href: 'https://github.com/av1ctor/neuralarena-docs',
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
