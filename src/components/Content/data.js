import { graphql } from 'gatsby'

export const acfContent = graphql`
	fragment acfContent on WpPage_Pagebuilder_Sections_Content {
		anchor
		classes
		block {
			... on WpPage_Pagebuilder_Sections_Content_Block_Wysiwyg {
				fieldGroupName
				anchor
				classes
				wysiwyg
			}
			... on WpPage_Pagebuilder_Sections_Content_Block_Image {
				fieldGroupName
				anchor
				classes
				bgOverlay
				parallaxFrom
				parallaxTo
				wysiwyg
				img {
					localFile {
						...imgFull
					}
				}
			}
		}
	}
`