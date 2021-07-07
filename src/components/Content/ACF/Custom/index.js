import React from 'react'
import './style.scss'

import HeroDetail from './HeroDetail'
import Map from './Map'

function ACFCustom(props) {
	// Chain Animation
	const delay = props.inheritedDelay

	// Images
	const images = props.asset?.filter(obj => obj.fieldGroupName === 'page_Pagebuilder_Sections_Content_Block_Custom_Asset_Image')
		.map((node) => {
			return node.assetImg?.localFile.childImageSharp.gatsbyImageData
		})
	
	// Files
	const files = props.asset?.filter(obj => obj.fieldGroupName === 'page_Pagebuilder_Sections_Content_Block_Custom_Asset_File')
		.map((node) => {
			return node.assetFile
		})

	// Fields
	const fields = props.asset?.filter(obj => obj.fieldGroupName === 'page_Pagebuilder_Sections_Content_Block_Custom_Asset_Field')
		.map((node) => {
			return node.assetField
		})

	// WYSIWYGS
	const wysiwygs = props.asset?.filter(obj => obj.fieldGroupName === 'page_Pagebuilder_Sections_Content_Block_Custom_Asset_Wysiwyg')
		.map((node) => {
			return node.assetWysiwyg
		})

	// Maps
	const maps = props.asset?.filter(obj => obj.fieldGroupName === 'page_Pagebuilder_Sections_Content_Block_Custom_Asset_Map')
		.map((node) => {
			return node.assetMap
		})


	if (props.fieldGroupName === 'page_Pagebuilder_Sections_Content_Block_Custom' && props.anchor === 'custom-home-detail') {
		return (
			<HeroDetail delay={delay} images={images} files={files} fields={fields} wysiwygs={wysiwygs} maps={maps} />
		)
	}

	if (props.fieldGroupName === 'page_Pagebuilder_Sections_Content_Block_Custom' && props.anchor === 'custom-map') {
		return (
			<Map delay={delay} images={images} files={files} fields={fields} wysiwygs={wysiwygs} maps={maps} />
		)
	}

  return false
}

export default ACFCustom