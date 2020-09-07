import { graphql } from 'gatsby'

export const wpNaviPrimary = graphql`
	fragment wpNaviPrimary on WPGraphQL {
		wpNaviPrimary: menus(where: {location: MENU_1}) {
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
						parentId
						order
            connectedNode {
              node {
                uri
              }
            }
          }
        }
			}
		}
  }
`