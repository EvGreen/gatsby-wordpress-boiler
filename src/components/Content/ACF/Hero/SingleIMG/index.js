import React from 'react'
import Img from 'gatsby-image'

//import PropTypes from 'prop-types'
import './style.scss'
import { Parallax } from 'react-scroll-parallax'

function SingleIMG(props) {
	const image = props.img?.localFile.childImageSharp.fluid
	const image2 = props.img2?.localFile.childImageSharp.fluid
	const image3 = props.img3?.localFile.childImageSharp.fluid
	const content = props.wysiwyg
	const parallax = props.parallax
	const bg_overlay = props.bg_overlay
	const theme = props.theme


	return (
		<div className={`single-img ${theme}`}>
			
			{ image && parallax ? (
				<Parallax className="hero-parallax" y={[-20, 20]} tagOuter="figure">
					<Img fluid={image}
						imgStyle={{objectFit: 'cover'}}
						objectPosition='50% 50%'
						loading='eager'
						fadeIn={true}
						className="image-1"
					/>
					{ image2 ?
						<Img fluid={image2}
							imgStyle={{objectFit: 'cover'}}
							objectPosition='50% 50%'
							loading='eager'
							fadeIn={true}
							className="image-2"
						/>
					: null }
					{ image3 ?
						<Img fluid={image3}
							imgStyle={{objectFit: 'contain'}}
							objectPosition='50% 50%'
							loading='eager'
							fadeIn={true}
							className="image-3"
						/>
					: null }
				</Parallax>
			) : image ? (
				<>
					<Img fluid={image}
						imgStyle={{objectFit: 'cover'}}
						objectPosition='50% 50%'
						loading='eager'
						fadeIn={true}
						className="image-1"
					/>
					{ image2 ?
						<Img fluid={image2}
							imgStyle={{objectFit: 'cover'}}
							objectPosition='50% 50%'
							loading='eager'
							fadeIn={true}
							className="image-2"
						/>
					: null }
					{ image3 ?
						<Img fluid={image3}
							imgStyle={{objectFit: 'contain'}}
							objectPosition='50% 50%'
							loading='eager'
							fadeIn={true}
							className="image-3"
						/>
					: null }
				</>
			) : null }

			{ bg_overlay ?
			<div className='bg-overlay' style={{opacity: bg_overlay}}>
				<div className='bg-overlay-x' style={{opacity: bg_overlay}}></div>
			</div>
			: null }
			
			<div className='hero-content'>
				<div className="hero-content-animator">
					<div className='hero-content-box splittext-lines' dangerouslySetInnerHTML={{__html: content}} />
				</div>
			</div>

		</div>
  )
}

export default SingleIMG