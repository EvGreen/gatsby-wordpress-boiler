import React from 'react'
import './style.scss'

import HeroDetail from './HeroDetail'

function ACFCustom(props) {

	// Images	
	const images = props.asset?.filter(obj => obj.acf_fc_layout == 'image')
		.map((node,i) => {
			return node.asset_img?.localFile.childImageSharp.fluid
		})
	
	// Files	
	const files = props.asset?.filter(obj => obj.acf_fc_layout == 'file')
		.map((node,i) => {
			return node.asset_file
		})

	// Fields	
	const fields = props.asset?.filter(obj => obj.acf_fc_layout == 'field')
		.map((node,i) => {
			return node.asset_field
		})

	// WYSIWYGS	
	const wysiwygs = props.asset?.filter(obj => obj.acf_fc_layout == 'wysiwyg')
		.map((node,i) => {
			return node.asset_wysiwyg
		})

	// Maps	
	const maps = props.asset?.filter(obj => obj.acf_fc_layout == 'map')
		.map((node,i) => {
			return node.asset_map
		})


	if (props.acf_fc_layout === 'custom' && props.anchor === 'custom-home-detail') {
		return (
			<HeroDetail images={images} files={files} fields={fields} wysiwygs={wysiwygs} maps={maps} />
		)
	}

  return false
}

export default ACFCustom