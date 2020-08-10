import React from 'react'
import Img from 'gatsby-image'

//import PropTypes from 'prop-types'
import './style.scss'

function SingleIMG(props) {
	const image = props.img.localFile.childImageSharp.fluid
	const content = props.wysiwyg

	return (
		<>
			
			{ image ?
				<Img fluid={image}
					imgStyle={{objectFit: 'cover'}}
					objectPosition='50% 50%'
					loading='eager'
					fadeIn={true}
				/>
			: null }

			<div className='bg-overlay'>
				<div className='bg-overlay-x'></div>
			</div>
			
			<div style={{minHeight: '100.1vh'}} className='hero-content'>
				<div className="hero-content-animator">
					<div className='hero-content-box splittext-lines' dangerouslySetInnerHTML={{__html: content}} />
				</div>
			</div>

		</>
  )
}

export default SingleIMG