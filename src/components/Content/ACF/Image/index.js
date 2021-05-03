import React, {useEffect, useState} from 'react'
import './style.scss'

import { Parallax, withController } from 'react-scroll-parallax'

import { GatsbyImage } from 'gatsby-plugin-image'
import ACFOverlay from '../Overlay'

function ACFImage(props) {

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
	// Image
	const imageResponsive = props.imgResponsive?.localFile.childImageSharp.gatsbyImageData
	const imageResponsiveAlt = props.imgResponsive?.altText ? props.imgResponsive?.altText : ''
	// Parallax
	const parallaxFrom = props.parallaxFrom
	const parallaxTo = props.parallaxTo

	// Returning Section
  return (
		<>
			{ image ?
				<div className="image-wrap">
					{ parallaxFrom && parallaxFrom !== 0 && parallaxTo && parallaxTo !== 0 ?
						<Parallax className="parallax" y={[parallaxFrom + '%', parallaxTo + '%']} tagOuter="figure">
							{ !imageResponsive || windowSize.width > responsiveBreakpoint ?
								<GatsbyImage image={image} alt={imageAlt} />
							: null }
							{ imageResponsive && windowSize.width < responsiveBreakpoint ?
								<GatsbyImage image={imageResponsive} alt={imageResponsiveAlt} />
							: null }
						</Parallax>
					:
						<>
							{ !imageResponsive || windowSize.width > responsiveBreakpoint ?
								<GatsbyImage image={image} alt={imageAlt} />
							: null }
							{ imageResponsive && windowSize.width < responsiveBreakpoint ?
								<GatsbyImage image={imageResponsive} alt={imageResponsiveAlt} />
							: null }
						</>
					}
					<ACFOverlay {...props} />
				</div>
			: null }
		</>
  )
}

export default withController(ACFImage)