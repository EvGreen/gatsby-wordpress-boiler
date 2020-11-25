import { graphql } from 'gatsby'

export const imgStandard = graphql`
	fragment imgStandard on File {
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
`