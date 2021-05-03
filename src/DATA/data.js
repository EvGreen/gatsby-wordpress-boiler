import { graphql } from 'gatsby'

export const imgFull = graphql`
	fragment imgFull on File {
		childImageSharp {
			gatsbyImageData(webpOptions: {quality: 90}, layout: FULL_WIDTH, formats: WEBP)
		}
	}
`

export const wpGeneralSettings = graphql`
	fragment wpGeneralSettings on Query {
		wpGeneralSettings: wp {
			generalSettings {
				title
				description
				language
			}
		}
	}
`

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