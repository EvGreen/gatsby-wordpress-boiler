import React, { useEffect, useRef } from 'react'
import Img from 'gatsby-image'
import anime from 'animejs'

//import PropTypes from 'prop-types'
import './style.scss'

import Details from './Details'


function Hero(props) {
	const image = props.image
	const content = props.content

	useEffect(() => {
		anime({
			targets: '.element',
			translateX: ['-100%',0],
			duration: 300,
			easing: 'easeInOutSine'
		})
	},[])



	return (
		<>
				<section ref={props.heroRef} className='hero x0 t'>
					
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
					
					<div style={{minHeight: '90vh'}} className='hero-content'>
						<div data-splitting="lines" className="hero-content-animator">
							<div className='hero-content-box' dangerouslySetInnerHTML={{__html: content}} />
						</div>
					</div>

					<div className="element"></div>

				</section>

				<Details />
		</>
  )
}

export default Hero