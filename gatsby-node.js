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
    const id = edge.node.id
    let slug = edge.node.slug
    const wordpress_id = edge.node.wordpress_id
    // Create pages from slug, but in case of front page disregard slug. 
    path === "/" ? slug = path : null
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/page/index.js`),
      context: {
        id: id,
        slug: slug,
        wordpress_id: wordpress_id
      },
    })
  })
}