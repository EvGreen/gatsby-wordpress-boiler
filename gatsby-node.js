exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allSitePage {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)
  
  if (data) {
    data.allSitePage.edges.forEach(edge => {
      const slug = edge.node.slug
      if ( slug ) {
        actions.createPage({
          slug: slug,
          component: require.resolve(`./src/templates/page.js`),
          context: { slug: slug },
        })
      }
    })
  }
}