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
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "WPGraphQL",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "wpgraphql",
        // Url to query from
        url: "https://design-sentry.com/graphql",
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        baseUrl: 'design-sentry.com',
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: 'https',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: true,
        auth: {},
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: false,
        // Swap for navi
        searchAndReplaceContentUrls: {
          sourceUrl: 'https://design-sentry.com/',
          replacementUrl: '/',
        },
        excludedRoutes: [
          '**/categories', //skipping for now to speed up build process
          '**/tags', //skipping for now to speed up build process
          '**/taxonomies', //skipping for now to speed up build process
          '**/themes', //skipping for good
          '**/plugins', //skipping for good
          '**/block-types', //skipping for good
          '**/block-directory/search', //skipping for good
          '**/settings', //skipping for now to speed up build process
          '**/users/me', //skipping for good
          '**/contact-forms', //skipping for good
          '/yoast/**', //skipping for now to speed up build process
          '/*/*/comments', //skipping for now to speed up build process
          '/siteground-optimizer/**' //skipping for now to speed up build process
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-netlify`, // make sure to keep it last in the array
  ],
}