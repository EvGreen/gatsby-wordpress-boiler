/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

console.log('Source used:', process.env.GATSBY_WP_URL)

module.exports = {
  siteMetadata: {
    title: 'CHANGEME',
    titleTemplate: 'CHANGEME · %s',
    description: 'CHANGEME',
    url: 'CHANGEME', // No trailing slash allowed!
    //image: '/images/snape.jpg', // Path to your image you placed in the 'static' folder
    twitterUsername: '@designsentry',
    author: 'Daniel Łęczycki, DeepSleep Studio Miami',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        url: 'https://www.old.deepsleepstudio.com/client/BH3/graphql',
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-htaccess`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CHANGEME`,
        short_name: `CHANGEME`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ff1233`,
        // Enables 'Add to Homescreen' prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#ff1233`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`, // make sure to keep it last in the array
  ],
}