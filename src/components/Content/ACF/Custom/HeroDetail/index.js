import React from 'react'
import './style.scss'

import Img from 'gatsby-image'

function HeroDetail({images, files, fields, wysiwygs, maps}) {

	// Trzeba to zautomatyzwoac
	const img0 = images[0]?.asset_img?.localFile.childImageSharp.fluid	
	const img1 = images[1]?.asset_img?.localFile.childImageSharp.fluid	
	const img2 = images[2]?.asset_img?.localFile.childImageSharp.fluid	
	const img3 = images[3]?.asset_img?.localFile.childImageSharp.fluid

	const field0 = fields[0]?.asset_field
	const field1 = fields[1]?.asset_field
	const field2 = fields[2]?.asset_field
	const field3 = fields[3]?.asset_field
	const field4 = fields[4]?.asset_field
	const field5 = fields[5]?.asset_field
	const field6 = fields[6]?.asset_field
	const field7 = fields[7]?.asset_field
	const field8 = fields[8]?.asset_field

	return (
		<>
			{field0}
			{field1}
			{field2}
			{field3}
			{field4}
			{field5}
			{field6}
			{field7}
			{field8}

			{ img0 ?
				<Img fluid={img0}
					imgStyle={{objectFit: 'cover'}}
					objectPosition='50% 50%'
					className='img1'
				/>
			: null }
			{ img1 ?
				<Img fluid={img1}
					imgStyle={{objectFit: 'cover'}}
					objectPosition='50% 50%'
					className='img1'
				/>
			: null }
			{ img2 ?
				<Img fluid={img2}
					imgStyle={{objectFit: 'cover'}}
					objectPosition='50% 50%'
					className='img1'
				/>
			: null }
			{ img3 ?
				<Img fluid={img3}
					imgStyle={{objectFit: 'cover'}}
					objectPosition='50% 50%'
					className='img1'
				/>
			: null }
		</>
	)
}

export default HeroDetail