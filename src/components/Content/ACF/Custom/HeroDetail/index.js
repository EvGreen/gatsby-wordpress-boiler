import React from 'react'
import './style.scss'

import Img from 'gatsby-image'

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
				<Img fluid={img[0]}
					imgStyle={{objectFit: 'cover'}}
					objectPosition='50% 50%'
					className='img1'
				/>
			: null }
			{ img[1] ?
				<Img fluid={img[1]}
					imgStyle={{objectFit: 'cover'}}
					objectPosition='50% 50%'
					className='img1'
				/>
			: null }
			{ img[2] ?
				<Img fluid={img[2]}
					imgStyle={{objectFit: 'cover'}}
					objectPosition='50% 50%'
					className='img1'
				/>
			: null }
			{ img[3] ?
				<Img fluid={img[3]}
					imgStyle={{objectFit: 'cover'}}
					objectPosition='50% 50%'
					className='img1'
				/>
			: null }
		</>
	)
}

export default CustomBlock