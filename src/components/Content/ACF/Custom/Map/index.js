import React from 'react'
import './style.scss'

//import { GatsbyImage } from 'gatsby-plugin-image'

import Map from '../../../../Map/GMap'

function CustomBlock({images: img, files: file, fields: field, wysiwygs: wysiwyg, maps: map}) {

	return (
		<>
		<h1>sdsd</h1>
			<Map {...map[0]} />
		</>
	)
}

export default CustomBlock