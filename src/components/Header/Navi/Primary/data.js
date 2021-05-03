import { graphql } from 'gatsby'

export const wpNaviPrimary = graphql`
	fragment wpNaviPrimary on Query {
		wpNaviPrimary: allWpMenu(filter: {locations: {eq: MENU_1}}) {
      nodes {
        id
        name
        count
        slug
        locations
        menuItems {
          nodes {
            id
            label
            title
            description
            cssClasses
            target
            path
            url
            parentId
            order
            connectedNode {
              node {
                id
                uri
              }
            }
          }
        }
      }
    }
  }
`