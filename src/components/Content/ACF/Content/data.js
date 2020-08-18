import { graphql } from 'gatsby'

export const acfContent = graphql`
	fragment acfContent on WordPressAcf_content {
		id
		anchor
		classes
		img {
			localFile {
				childImageSharp {
					fluid (
						maxWidth: 1280,
						quality: 70,
						srcSetBreakpoints: [960,1280,1920,2560]
					) {
						...GatsbyImageSharpFluid_withWebp_noBase64
					}
				}
			}
		}
		wysiwyg
	}
`