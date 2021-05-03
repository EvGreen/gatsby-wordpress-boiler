import { graphql } from 'gatsby'

export const siteGeneralSettings = graphql`
fragment siteGeneralSettings on Query {
	siteGeneralSettings: wp {
		siteGeneralSettings {
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