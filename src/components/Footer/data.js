import { graphql } from 'gatsby'

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
				}
			}
		}
	}
`