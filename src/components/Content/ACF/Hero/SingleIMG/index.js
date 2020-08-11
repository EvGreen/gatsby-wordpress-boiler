import React from 'react'
import Img from 'gatsby-image'

//import PropTypes from 'prop-types'
import './style.scss'
import { Parallax } from 'react-scroll-parallax'

function SingleIMG(props) {
	const image = props.img.localFile.childImageSharp.fluid
	const content = props.wysiwyg
	const parallax = props.parallax
	const bg_overlay = props.bg_overlay

	return (
		<>
			
			{ image && parallax ?
				<Parallax className="hero-parallax" y={[-20, 20]} tagOuter="figure">
					<Img fluid={image}
						imgStyle={{objectFit: 'cover'}}
						objectPosition='50% 50%'
						loading='eager'
						fadeIn={true}
					/>
				</Parallax>
			: image ?
				<Img fluid={image}
					imgStyle={{objectFit: 'cover'}}
					objectPosition='50% 50%'
					loading='eager'
					fadeIn={true}
			/>
			: null }

			{ bg_overlay ?
			<div className='bg-overlay' style={{opacity: bg_overlay}}>
				<div className='bg-overlay-x' style={{opacity: bg_overlay}}></div>
			</div>
			: null }
			
			<div style={{minHeight: '100.1vh'}} className='hero-content'>
				<div className="hero-content-animator">
					<div className='hero-content-box splittext-lines' dangerouslySetInnerHTML={{__html: content}} />
				</div>
			</div>

		</>
  )
}

export default SingleIMG