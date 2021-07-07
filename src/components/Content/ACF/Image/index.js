import React, {useEffect, useState, useContext} from 'react'
import './style.scss'

import { Parallax, withController } from 'react-scroll-parallax'

import { GatsbyImage } from 'gatsby-plugin-image'
import ACFOverlay from '../Overlay'

import Intro from '../../../../animations/Intro'
import { useInView } from 'react-intersection-observer'

import FSLightBoxContext from '../../../../context/FSLightBoxContext'

function ACFImage(props) {
	const [io, ioInView] = useInView({ triggerOnce: true })
	const lightBoxContext = useContext(FSLightBoxContext)

	// General Settings
	const responsiveBreakpoint = 1024
	const [windowSize, setWindowSize] = useState({width: 0, height: 0})

	// Take care of parallax and image alternative modes for responsive
	useEffect(() => {
		// RAF to update parallax position, it gets lost sometimes otherwise, especially on page changes
		window.requestAnimationFrame(() => {
			props.parallaxController.update()
		})

		// Checking window size, dropping values into state
		function updateSize() {
			setWindowSize({width: window.innerWidth, height: window.innerHeight})
		}
		window.addEventListener('resize', updateSize)
		updateSize()

		// Kill off listener
		return () => window.removeEventListener('resize', updateSize)
	},[props.parallaxController])

	// Image
	const image = props.img?.localFile.childImageSharp.gatsbyImageData
	const imageAlt = props.img?.altText ? props.img?.altText : ''
	const extension = props.img?.localFile.extension
	// Image
	const imageResponsive = props.imgResponsive?.localFile.childImageSharp.gatsbyImageData
	const imageResponsiveAlt = props.imgResponsive?.altText ? props.imgResponsive?.altText : ''
	const extensionResponsive = props.imgResponsive?.localFile.extension
	// Parallax
	const parallaxFrom = props.parallaxFrom
	const parallaxTo = props.parallaxTo
	// Lightbox
	const imgFullSizeUrl = props.img?.localFile.publicURL
	const lightboxOn = props.lightbox
	// Chain Animation
	const delay = props.inheritedDelay
	// In Animation Sequence
	let in_ = { fade: 500 }

	// Look if the classes specify if the image is supposed to have decor
	let decor = props.classes?.search('decor')
	
	function thumbClicked(lightboxSlidesArray) {
		if(lightboxOn) {
			lightBoxContext.setSources(() => lightboxSlidesArray)
			setTimeout(() => {
				lightBoxContext.setToggler((toggle) => !toggle)
			}, 50)
		}
	}

	// If the classes on block have "t" (transparent bg), then animate bg since we know there is contrasting color going on
	if (props?.classes?.indexOf(' t') > -1) {
		in_ = { bg: 500, fade: 500 }
	}

	// Returning Section
  return image ? (
		<div ref={io} className={`image-wrap ${lightboxOn ? 'hover-trigger' : ''} ${extension === 'png' || extensionResponsive === 'png' ? 'png' : ''}`} onClick={() => thumbClicked([imgFullSizeUrl])} aria-label="Lightbox trigger" onKeyDown={() => thumbClicked([imgFullSizeUrl])} role="button" tabIndex={0}>
			{ parallaxFrom && parallaxFrom !== 0 && parallaxTo && parallaxTo !== 0 ?
				<Intro visible={ioInView} in={in_} delayIn={delay} mounted={true} stay={true}>
					<Parallax className="parallax" y={[parallaxFrom + '%', parallaxTo + '%']} tagOuter="figure">
						{ !imageResponsive || windowSize.width > responsiveBreakpoint ?
							<GatsbyImage image={image} alt={imageAlt} />
						: null }
						{ imageResponsive && windowSize.width < responsiveBreakpoint ?
							<GatsbyImage image={imageResponsive} alt={imageResponsiveAlt} />
						: null }
					</Parallax>
				</Intro>
			:
				<>
					{ !imageResponsive || windowSize.width > responsiveBreakpoint ?
						<Intro visible={ioInView} in={in_} delayIn={delay} mounted={true} stay={true}>
							<GatsbyImage image={image} alt={imageAlt} />
						</Intro>
					: null }
					{ imageResponsive && windowSize.width < responsiveBreakpoint ?
						<Intro visible={ioInView} in={in_} delayIn={delay} mounted={true} stay={true}>
							<GatsbyImage image={imageResponsive} alt={imageResponsiveAlt} />
						</Intro>
					: null }
				</>
			}
			<ACFOverlay {...props} />
			{decor >= 0 ?
				<div className="decor-wrap">
					<Intro visible={ioInView} in={{fade: 3000}} delayIn={delay} mounted={true} stay={true} className="c5 t">
						<div className="decor-inside c4"></div>
					</Intro>
				</div>
			: null }
		</div>
  ) : false
}

export default withController(ACFImage)