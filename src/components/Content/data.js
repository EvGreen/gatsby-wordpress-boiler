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
				asset {
					id
					acf_fc_layout
					asset_id
					asset_field
					asset_wysiwyg
					asset_img {
						localFile {
							...imgStandard
						}
					}
					asset_img_responsive {
						localFile {
							...imgStandard
						}
					}
					asset_file {
						localFile {
							publicURL
						}
					}
					asset_map {
						address
						lat
						lng
						zoom
						place_id
						name
						city
						state
						state_short
						post_code
						country
						country_short
					}
				}
			}
		}
	}
`