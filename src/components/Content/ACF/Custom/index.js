import React from 'react'
import './style.scss'

import HeroDetail from './HeroDetail'

function ACFCustom(props) {

	// Images	
	const images = props.asset?.filter(obj => obj.acf_fc_layout == 'image')
	
	// Files	
	const files = props.asset?.filter(obj => obj.acf_fc_layout == 'file')

	// Fields	
	const fields = props.asset?.filter(obj => obj.acf_fc_layout == 'field')

	// WYSIWYGS	
	const wysiwygs = props.asset?.filter(obj => obj.acf_fc_layout == 'wysiwyg')

	// Maps	
	const maps = props.asset?.filter(obj => obj.acf_fc_layout == 'map')


	if (props.acf_fc_layout === 'custom' && props.anchor === 'custom-home-detail') {
		return (
			<HeroDetail images={images} files={files} fields={fields} wysiwygs={wysiwygs} maps={maps} />
		)
	}

  return false
}

export default ACFCustom