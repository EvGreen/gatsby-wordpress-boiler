import React from 'react'
import './style.scss'
import './disposable.scss'

import ACFImage from './Image'
import ACFVideo from './Video'
import ACFWysiwyg from './WYSIWYG'
import ACFCustom from './Custom'

import Slider from 'react-slick'

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

function safelyParseJSON (json) {
  var parsed

  try {
    parsed = JSON.parse(json)
  } catch (e) {}

  return parsed // Could be undefined!
}

// Main
function ACFBlocks(props) {

	// Create Building Blocks
	function createBlocks(node,i) {

		// Main Settings
		const anchor = node.anchor
		const classes = node.classes
		const layout = node.fieldGroupName
		const style = safelyParseJSON(node.style)

		// Returning Block
		return (
			<div key={i} id={anchor ? 'block-' + anchor : null}  className={`block block-${layout} area-${i} ${classes ? classes : ''}`} style={style}>

				<ACFImage {...node} inheritedDelay={i * 125} />

				<ACFVideo {...node} inheritedDelay={i * 125} />

				<ACFWysiwyg {...node} inheritedDelay={i * 125} />

				<ACFCustom {...node} inheritedDelay={i * 125} />

			</div>
		)
	}
	
	// Filter to split regular blocks and slide type blocks, so those could be grouped and thrown into slider wrapper
	const slides = props.block.filter(block => block.fieldGroupName === 'page_Pagebuilder_Sections_Content_Block_Slide')
	const blocks = props.block.filter(block => block.fieldGroupName !== 'page_Pagebuilder_Sections_Content_Block_Slide')

	// Building Blocks
	const blockMap = blocks?.map((node,i) => createBlocks(node,i))

	// Building Slides
	const slideMap = slides?.map((node,i) => createBlocks(node,i))

	// Returning Section
  return (
		<>
			{ blockMap }
			{ slideMap.length > 0 ?
				<div className="block-page_Pagebuilder_Sections_Content_Block_Slide">
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