import React from 'react'
import './style.scss'

import HeroDetail from './HeroDetail'

function ACFCustom(props) {

	// Images	
	const images = props.asset?.filter(obj => obj.fieldGroupName === 'image')
		.map((node) => {
			return node.asset_img?.localFile.childImageSharp.gatsbyImageData
		})
	
	// Files	
	const files = props.asset?.filter(obj => obj.fieldGroupName === 'file')
		.map((node) => {
			return node.asset_file
		})

	// Fields	
	const fields = props.asset?.filter(obj => obj.fieldGroupName === 'field')
		.map((node) => {
			return node.asset_field
		})

	// WYSIWYGS	
	const wysiwygs = props.asset?.filter(obj => obj.fieldGroupName === 'wysiwyg')
		.map((node) => {
			return node.asset_wysiwyg
		})

	// Maps	
	const maps = props.asset?.filter(obj => obj.fieldGroupName === 'map')
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