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
  favicon: 'img/logo.svg',
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
      copyright: `Copyright © ${new Date().getFullYear()} Oxybill. Built with Docusaurus.`,
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

  plugins: [
    [require.resolve('@cmfcmf/docusaurus-search-local'), {
      
  // whether to index docs pages
  indexDocs: true,
  // must start with "/" and correspond to the routeBasePath configured for the docs plugin
  // use "/" if you use docs-only-mode
  // (see https://v2.docusaurus.io/docs/2.0.0-alpha.70/docs-introduction#docs-only-mode)
  docsRouteBasePath: '/docs',

  // Whether to also index the titles of the parent categories in the sidebar of a doc page.
  // 0 disables this feature.
  // 1 indexes the direct parent category in the sidebar of a doc page
  // 2 indexes up to two nested parent categories of a doc page
  // 3...
  //
  // Do _not_ use Infinity, the value must be a JSON-serializable integer.
  indexDocSidebarParentCategories: 0,

  // whether to index blog pages
  indexBlog: true,
  // must start with "/" and correspond to the routeBasePath configured for the blog plugin
  // use "/" if you use blog-only-mode
  // (see https://v2.docusaurus.io/docs/2.0.0-alpha.70/blog#blog-only-mode)
  blogRouteBasePath: '/blog',

  // whether to index static pages
  // /404.html is never indexed
  indexPages: false,

  // language of your documentation, see next section
  language: "en",

  // setting this to "none" will prevent the default CSS to be included. The default CSS
  // comes from autocomplete-theme-classic, which you can read more about here:
  // https://autocomplete.algolia.com/docs/autocomplete-theme-classic
  style: undefined,

  // lunr.js-specific settings
  lunr: {
    // When indexing your documents, their content is split into "tokens".
    // Text entered into the search box is also tokenized.
    // This setting configures the separator used to determine where to split the text into tokens.
    // By default, it splits the text at whitespace and dashes.
    //
    // Note: Does not work for "ja" and "th" languages, since these use a different tokenizer.
    tokenizerSeparator: /[\s\-]+/
  }

    }]
  ],
  
};