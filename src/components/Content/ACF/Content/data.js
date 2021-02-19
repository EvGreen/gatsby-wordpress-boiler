import { graphql } from 'gatsby'

export const acfContent = graphql`
	fragment acfContent on WordPressAcf_content {
		id
		anchor
		classes
		block {
			... on WordPressAcf_contentblock {
				id
				acf_fc_layout
				anchor
				classes
				wysiwyg
				img {
					localFile {
						...imgStandard
					}
				}
				video_source
				video_iframe
				video_file {
					localFile {
						publicURL
					}
				}
				slide {
					acf_fc_layout
					wysiwyg
					img {
						localFile {
							...imgStandard
						}
					}
				}
			}
		}
	}
`