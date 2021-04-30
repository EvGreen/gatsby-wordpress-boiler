import React from 'react'
import './style.scss'

import HeroDetail from './HeroDetail'

function ACFCustom(props) {

	// Images	
	const images = props.asset?.filter(obj => obj.fieldGroupName === 'page_Pagebuilder_Sections_Content_Block_Custom_Asset_Image')
		.map((node) => {
			return node.asset_img?.localFile.childImageSharp.gatsbyImageData
		})
	
	// Files	
	const files = props.asset?.filter(obj => obj.fieldGroupName === 'page_Pagebuilder_Sections_Content_Block_Custom_Asset_File')
		.map((node) => {
			return node.asset_file
		})

	// Fields	
	const fields = props.asset?.filter(obj => obj.fieldGroupName === 'page_Pagebuilder_Sections_Content_Block_Custom_Asset_Field')
		.map((node) => {
			return node.asset_field
		})

	// WYSIWYGS	
	const wysiwygs = props.asset?.filter(obj => obj.fieldGroupName === 'page_Pagebuilder_Sections_Content_Block_Custom_Asset_Wysiwyg')
		.map((node) => {
			return node.asset_wysiwyg
		})

	// Maps	
	const maps = props.asset?.filter(obj => obj.fieldGroupName === 'page_Pagebuilder_Sections_Content_Block_Custom_Asset_Map')
		.map((node) => {
			return node.asset_map
		})


	if (props.fieldGroupName === 'custom' && props.anchor === 'custom-home-detail') {
		return (
			<HeroDetail images={images} files={files} fields={fields} wysiwygs={wysiwygs} maps={maps} />
		)
	}

  return false
}

export default ACFCustom