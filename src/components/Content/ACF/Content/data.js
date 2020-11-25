import { graphql } from 'gatsby'

export const acfContent = graphql`
	fragment acfContent on WordPressAcf_content {
		id
		anchor
		classes
		img {
			localFile {
				...imgStandard
			}
		}
		wysiwyg
	}
`