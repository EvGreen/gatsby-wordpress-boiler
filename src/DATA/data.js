import { graphql } from 'gatsby'

export const imgFull = graphql`
	fragment imgFull on File {
		childImageSharp {
			gatsbyImageData(webpOptions: {quality: 90}, layout: FULL_WIDTH, placeholder: TRACED_SVG, formats: WEBP)
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