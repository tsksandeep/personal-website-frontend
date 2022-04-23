module.exports = {
  siteMetadata: {
    siteUrl: `https://tsksandeep.com`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-T3LHGZR",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        start_url: `/`,
        icon: `./src/assets/img/fav.png`,
      },
    },
    {
      resolve: `gatsby-plugin-force-trailing-slashes`,
      options: {
        excludedPaths: [`/404.html`],
      },
    },
  ],
};
