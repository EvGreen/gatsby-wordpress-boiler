import { graphql } from 'gatsby'

export const imgFull = graphql`
	fragment imgFull on File {
		childImageSharp {
			gatsbyImageData(webpOptions: {quality: 90}, layout: FULL_WIDTH, formats: WEBP)
		}
	}
`