exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allWordpressPage {
        edges {
          node {
            id
            slug
            path
            title
            wordpress_id
          }
        }
      }
    }
  `)

  data.allWordpressPage.edges.forEach(edge => {
    const path = edge.node.path
    let slug = edge.node.slug
    // Create pages from slug, but in case of front page disregard slug. 
    path === "/" ? slug = path : null
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/page.js`),
      context: {
        slug: slug,
        id: edge.node.id,
        wordpress_id: edge.node.wordpress_id
      },
    })
  })
}