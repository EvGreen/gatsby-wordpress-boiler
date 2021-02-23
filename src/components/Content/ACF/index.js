import React from 'react'
import './style.scss'
import './child.scss'

import ACFImage from './Image'
import ACFVideo from './Video'
import ACFWYSIWYG from './WYSIWYG'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function ACFBlocks(props) {

	// Create Building Blocks
	function createBlocks(node) {

		// Main Settings
		const anchor = node.anchor
		const classes = node.classes
		const layout = node.acf_fc_layout

		// Returning Block (if something else)
		return (
			<div key={node.id} id={anchor ? 'block-' + anchor : null}  className={`block block-${layout} ${classes ? classes : ''}`}>

				<ACFImage {...node} />

				<ACFVideo {...node} />

				<ACFWYSIWYG {...node} />

			</div>
		)
	}
	
	// Filter
	const slides = props.block.filter(block => block.acf_fc_layout === 'slide')
	const blocks = props.block.filter(block => block.acf_fc_layout !== 'slide')

	// Building Blocks
	const blockMap = blocks?.map((node,i) => createBlocks(node))

	// Slider settings
	const sliderSettings = {
		dots: true,
		arrows: true,
		infinite: true,
		speed: 800,
		pauseOnFocus: true,
		autoplay: false,
		autoplaySpeed: 8000,
		slidesToShow: 1,
		slidesToScroll: 1,
		accessibility: false,
		fade: true,
		focusOnSelect: true,
		adaptiveHeight: false,
		centerMode: false,
		variableWidth: false
	}

	// Building Slides
	const slideMap = slides?.map((node,i) => createBlocks(node))

	// Returning Section
  return (
		<>
			{ blockMap }
			{ slideMap.length > 0 ?
				<div className="block-slider">
					<div className="slider with-aspect">
						<Slider {...sliderSettings}>
							{slideMap}
						</Slider>
					</div>
				</div>
			: null }
		</>
	)
}

export default ACFBlocks