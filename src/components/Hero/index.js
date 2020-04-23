import React, { useEffect } from 'react'
import Img from 'gatsby-image'
import anime from 'animejs'

import Div100vh from 'react-div-100vh'

//import PropTypes from 'prop-types'
import './style.scss'

import Details from './Details'

function Hero(props) {
	const image = props.image
	const content = props.content

	useEffect(() => {
		anime({
			targets: '.hero-content-animator',
			opacity: [0,1],
			translateY: [20,0],
			duration: 1000,
			easing: 'easeInOutSine'
		})
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
					
					<Div100vh style={{minHeight: '90rvh'}} className='hero-content'>
						<div className="hero-content-animator" style={{opacity: 0}}>
							<div className='hero-content-box' dangerouslySetInnerHTML={{__html: content}} />
						</div>
					</Div100vh>

					<div className="element"></div>

				</section>

				<Details />
		</>
  )
}

export default Hero