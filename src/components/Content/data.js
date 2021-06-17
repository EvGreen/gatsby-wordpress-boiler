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
				lightbox
				img {
					localFile {
						...imgFull
						publicURL
					}
				}
				imgResponsive {
					localFile {
						...imgFull
					}
				}
			}
			... on WpPage_Pagebuilder_Sections_Content_Block_Slide {
				fieldGroupName
				anchor
				classes
				bgOverlay
				videoIframe
				videoSource
				wysiwyg
				img {
					localFile {
						...imgFull
					}
				}
				imgResponsive {
					localFile {
						...imgFull
					}
				}
				videoFile {
					localFile {
						publicURL
					}
				}
			}
			... on WpPage_Pagebuilder_Sections_Content_Block_Video {
				fieldGroupName
				anchor
				classes
				bgOverlay
				videoIframe
				videoSource
				wysiwyg
				img {
					localFile {
						...imgFull
					}
				}
				imgResponsive {
					localFile {
						...imgFull
					}
				}
				videoFile {
					localFile {
						publicURL
					}
				}
			}
			... on WpPage_Pagebuilder_Sections_Content_Block_Custom {
				fieldGroupName
				anchor
				classes
				asset {
					... on WpPage_Pagebuilder_Sections_Content_Block_Custom_Asset_Field {
						fieldGroupName
						assetId
						assetField
					}
					... on WpPage_Pagebuilder_Sections_Content_Block_Custom_Asset_Wysiwyg {
						fieldGroupName
						assetId
						assetWysiwyg
					}
					... on WpPage_Pagebuilder_Sections_Content_Block_Custom_Asset_File {
						fieldGroupName
						assetId
						assetFile {
							localFile {
								publicURL
							}
						}
					}
					... on WpPage_Pagebuilder_Sections_Content_Block_Custom_Asset_Image {
						fieldGroupName
						assetId
						assetImg {
							localFile {
								...imgFull
							}
						}
						assetImgResponsive {
							localFile {
								...imgFull
							}
						}
					}
					... on WpPage_Pagebuilder_Sections_Content_Block_Custom_Asset_Map {
						fieldGroupName
						assetId
						assetMap {
							city
							country
							countryShort
							latitude
							longitude
							placeId
							postCode
							state
							stateShort
							streetAddress
							streetName
							streetNumber
							zoom
						}
					}
				}    
			}
		}
	}
`