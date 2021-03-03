import React from 'react'
import './style.scss'

import { GatsbyImage } from 'gatsby-plugin-image'

function CustomBlock({images: img, files: file, fields: field, wysiwygs: wysiwyg, maps: map}) {

	return (
		<>
			{field[0]}
			{field[1]}
			{field[2]}
			{field[3]}
			{field[4]}
			{field[5]}
			{field[6]}
			{field[7]}
			{field[8]}

			{ img[0] ?
				<GatsbyImage image={img[0]} />
			: null }
			{ img[1] ?
				<GatsbyImage image={img[1]} />
			: null }
			{ img[2] ?
				<GatsbyImage image={img[2]} />
			: null }
			{ img[3] ?
				<GatsbyImage image={img[3]} />
			: null }
		</>
	)
}

export default CustomBlock