module.exports = {
  siteMetadata: {
    title: 'Mark Foster',
    author: 'Mark Foster',
    description:
      'Mark is a web developer in Boise, Idaho who writes about JavaScript, React, and product creation.',
    siteUrl: 'https://markadamfoster.com',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              quality: 90,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-root-import`,
    `gatsby-plugin-sharp`,
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
        fonts: [`Montserrat:900,400`, `Lato: 900,700,400`],
      },
    },
    `gatsby-plugin-feed`,
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
  ],
}
