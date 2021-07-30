module.exports = {
  siteMetadata: {
    title: 'Mark Foster',
    author: 'Mark Foster',
    description:
      'Mark Foster. Boise, ID. Software developer specializing in custom web and mobile apps built with React and React Native.',
    siteUrl: 'https://markadamfoster.com',
    social: {
      twitter: 'markadamfoster',
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/layouts/ArticleLayout.js'),
        },
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          { resolve: `gatsby-remark-prismjs` },
          { resolve: `gatsby-remark-copy-linked-files` },
          { resolve: `gatsby-remark-smartypants` },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'articles',
        path: `${__dirname}/src/articles/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'videos',
        path: `${__dirname}/src/videos`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-102370279-1`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Lato: 200,400,700,900`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mark Foster`,
        start_url: `/`,
        background_color: `#f5f5f5`,
        theme_color: `#db5461`,
        display: `minimal-ui`,
        icon: `src/assets/site-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
  ],
}
