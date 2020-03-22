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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        baseUrl: 'wpdemo.gatsbycentral.com',
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: 'https',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: false,
        auth: {},
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
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
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      // Removes unused css rules
      resolve:'gatsby-plugin-purgecss',
      options: {
        // Activates purging in gatsby develop
        develop: true,
        // Purge only the main css file
        purgeOnly: ['/all.sass'],
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}