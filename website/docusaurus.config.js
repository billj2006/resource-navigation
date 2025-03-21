// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '仙八AI',
  tagline: '树形结构展示各类资源链接',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://resource-navigation.netlify.app', // 这里将在Netlify部署后更新为实际URL
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // 部署配置
  organizationName: 'xianbai', // GitHub用户名
  projectName: 'resource-navigation', // GitHub仓库名

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/your-github-username/resource-navigation/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
        title: '仙八AI',
        logo: {
          alt: '网站Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'resourceSidebar',
            position: 'left',
            label: '资源导航',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '资源分类',
            items: [
              {
                label: '药物警戒',
                to: '/docs/category/pharmacy',
              },
              {
                label: '电子书',
                to: '/docs/category/ebooks',
              },
              {
                label: 'AI工具',
                to: '/docs/category/ai-tools',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 仙八AI`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;