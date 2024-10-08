import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Neural Arena Docs',
  favicon: 'img/favicon.svg',

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
        docs: false,
        blog: {
          blogTitle: 'Neural Arena blog!',
          blogDescription: 'Everything Neural Arena!',
          postsPerPage: 'ALL',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'documents',
        routeBasePath: "documents",
        sidebarPath: './sidebars.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'whitepaper',
        path: 'whitepaper',
        routeBasePath: "whitepaper",
        sidebarPath: './sidebars.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'pitchdeck',
        path: 'pitchdeck',
        routeBasePath: "pitchdeck",
        sidebarPath: './sidebars.ts',
      },
    ]
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          position: 'left',
          label: '📚 Docs',
          activeBasePath: 'documents',
          to: 'documents/main',
        },
        {
          position: 'left',
          label: '📖 Whitepaper',
          activeBasePath: 'whitepaper',
          to: 'whitepaper/intro',
        },
        {
          position: 'left',
          label: '🖼 Pitchdeck',
          activeBasePath: 'pitchdeck',
          to: 'pitchdeck/intro',
        },
        {
          position: 'right',
          label: '📰 Blog',
          activeBasePath: 'blog',
          to: 'blog',
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
              to: 'documents/main',
            },
            {
              label: '📖 Whitepaper',
              to: 'whitepaper/intro',
            },
          ],
        },
        {
          items: [
            {
              label: '🖼 Pitchdeck',
              to: 'pitchdeck/intro',
            },
            {
              label: '📰 Blog',
              to: 'blog',
            },
          ],
        },
        {
          items: [
            {
              label: '📱 App',
              href: 'https://neuralarena.ai',
            },
            {
              label: '👨‍💻 GitHub',
              href: 'https://github.com/Neural-Arena-DAO/docs',
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
