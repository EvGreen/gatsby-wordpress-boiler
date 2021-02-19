import { graphql } from 'gatsby'

export const acfContent = graphql`
	fragment acfContent on WordPressAcf_content {
		id
		anchor
		classes
		block {
			... on WordPressAcf_contentblock {
				id
				anchor
				classes
				wysiwyg
				img {
					localFile {
						...imgStandard
					}
				}
				video_iframe
				video_file {
					localFile {
						publicURL
					}
				}
			}
		}
	}
`