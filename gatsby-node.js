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

// Schema allows for dumping all the annoying dummy content and placeholders that otherwise would break builds when left empty.
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type WordPressAcf_content implements Node {
      id: ID
      anchor: String
      classes: String
      block: [WordPressAcf_contentblock]
    }
    type WordPressAcf_contentblock implements Node {
      id: ID
      anchor: String
      classes: String
      wysiwyg: String
      img: wordpress__wp_media
      type: String
      video_source: String
      video_iframe: String
      video_file: wordpress__wp_media
    }
    type wordpress__wp_media implements Node {
      localFile: File
    }
  `
  createTypes(typeDefs)
}