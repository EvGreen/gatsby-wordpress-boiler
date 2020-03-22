/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "CHANGEME",
    titleTemplate: "CHANGEME · %s",
    description: "CHANGEME",
    url: "CHANGEME", // No trailing slash allowed!
    //image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@designsentry",
    author: "Daniel Łęczycki, DeepSleep Studio Miami",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `static`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-htaccess`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CHANGEME`,
        short_name: `CHANGEME`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#2b2e34`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/static/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}