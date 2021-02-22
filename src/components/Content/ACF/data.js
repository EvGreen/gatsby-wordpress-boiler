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
				bg_overlay
				parallax_from
				parallax_to
				wysiwyg
				img {
					localFile {
						...imgStandard
					}
				}
				img_responsive {
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
			}
		}
	}
`