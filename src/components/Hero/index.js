import React, { useEffect } from 'react'
import Img from 'gatsby-image'
import anime from 'animejs'

//import PropTypes from 'prop-types'
import './style.scss'	

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
	},[])

	return (
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

			<div className='hero-content'>
				<div className="hero-content-animator" style={{opacity: 0}}>
					<div className='hero-content-box' dangerouslySetInnerHTML={{__html: content}} />
				</div>
			</div>

		</section>
  )
}

export default Hero