module.exports = {
  siteMetadata: {
    title: `The Boston Renegades`,
    description: `The Boston Renegades - Boston&#039;s Beep Baseball Team an adaptive sports program operated by the Association of Blind Citizens`,
    author: `@gatsbyjs`,
    menuLinks: [
          {
            name: `Blog`,
            link: `/`
          },
          {
            name: `Team Bios`,
            link: `/renegades-player-and-coach-biographies-new/`
          },
          {
            name: `Schedule`,
            link: `/renegades-schedule/`
          },
          {
            name: `Shop`,
            link: `/shop/`
          },
          {
            name: `News`,
            link: `/in-the-news/`
          },
          {
            name: `Beepball Rules`,
            link: `/beepball-rules/`
          },
          {
            name: `Box Scores`,
            link: `/season-results/`
          },
          {
            name: `Donate`,
            link: `/fundraising/`
          },
          {
            name: `Contact`,
            link: `/contact/`
          },
          {
            name: `Team Login`,
            link: `/renegades-eyes-page-2/`
          }
        ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        // I have created a dummy site for us to use with the plugins we discussed
        baseUrl: "blindcitizens.org/renegades",
        protocol: "https",
        hostingWPCOM: false,
        // We will be using some advanced custom fields
        useACF: false,
        acfOptionPageIds: [],
        verboseOutput: false,
        perPage: 100,
        plugins: [
          {
            resolve: `gatsby-wordpress-inline-images`,
            options: {
              baseUrl: `blindcitizens.org/renegades`,
              protocol: `https`
            }
          }
        ],
        //searchAndReplaceContentUrls: {
        //  sourceUrl: "https://www.blindcitizens.org/renegades",
        //  replacementUrl: "https://0.0.0.0",
        //},
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/comments",
          //"**/users",
        ],
        excludedRoutes: [],
        normalizer: function({ entities }) {
          return entities
        },
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
