import React from 'react'

import './style.scss'

import SingleIMG from './SingleIMG'
import Details from './Details'

function Hero(props) {
	const type = props.type

	return (
		<section id="master-hero" className='hero x0 t'>

			{ type === 'img' ? 
				<SingleIMG { ...props } />
			: null }

			<Details />

		</section>
  )
}

export default Hero