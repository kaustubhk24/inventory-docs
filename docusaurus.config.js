const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Oxybill',
  tagline: 'How we can help you today?',
  url: 'https://docs.oxybill.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon.svg',
  organizationName: 'kaustubhk24', // Usually your GitHub org/user name.
  projectName: 'inventory-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Oxybill',
      logo: {
        alt: 'Oxybill',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://app.oxybill.com/contact',
          label: 'Support',
          position: 'right',
        },
        {
          href: 'https://app.oxybill.com/login',
          label: 'Login',
          position: 'right',
        },
        {
          href: 'https://app.oxybill.com/signup',
          label: 'Signup',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
    
      
        
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Oxybill, Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/kaustubhk24/inventory-docs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/kaustubhk24/inventory-docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  
};
