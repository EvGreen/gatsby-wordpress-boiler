exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allWordpressPage {
        edges {
          node {
            id
            slug
            title
          }
        }
      }
    }
  `)

  if (data) {
    data.allWordpressPage.edges.forEach(edge => {
      const slug = edge.node.slug
      if ( slug ) {
        actions.createPage({
          path: slug,
          component: require.resolve(`./src/templates/page.js`),
          context: { slug: slug },
        })
      }
    })
  }
}