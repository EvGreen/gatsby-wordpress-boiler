import { graphql } from 'gatsby'

export const imgFull = graphql`
	fragment imgFull on File {
		childImageSharp {
			gatsbyImageData(webpOptions: {quality: 90}, layout: FULL_WIDTH, formats: WEBP, placeholder: NONE)
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

export const acfOptions = graphql`
	fragment acfOptions on Query {
		wp {
			options {
				acfOptions {
					footerImage {
						localFile {
							...imgFull
						}
					}
					socialIcons {
						link
						icon
						hint
					}
					copy
				}
			}
		}
	}
`