import { graphql } from 'gatsby'

export const wpNaviSecondary = graphql`
	fragment wpNaviSecondary on WPGraphQL {
		wpNaviSecondary: menus(where: {location: MENU_2}) {
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
            connectedNode {
              node {
                uri
              }
            }
						childItems {
              nodes {
								id
								label
								title
								description
								cssClasses
								target
								path
								parentId
								childItems {
									nodes {
										id
										label
										title
										description
										cssClasses
										target
										path
										parentId
									}
								}
							}
						}
          }
        }
			}
		}
  }
`