import React from 'react'

import './style.scss'

import SingleIMG from './SingleIMG'
import Details from './Details'

function Hero(props) {
	const slides = props.slides
	const classes = props.classes
	const anchor = props.anchor
	const min_height = props.min_height

	const SlidesMap = slides?.map((node, i) => {
		const type = node.type
		if (type === 'img') {
			return (
				<SingleIMG key={`singleimghero - ${i}`} { ...node } />
			)
		}
		return false
	})

	return (
		<section id={`${anchor ? anchor : ''}`} className={`hero x0 t ${classes ? classes : ''}`}>

			<div className={slides && slides.length > 1 ? 'hero-slider' : 'hero-single'} style={{minHeight: min_height}}>
				{SlidesMap}
			</div>

			<Details />

		</section>
  )
}

export default Hero