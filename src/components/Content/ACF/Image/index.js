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
	const image_alt = props.img?.altText
	// Image
	const image_responsive = props.imgResponsive?.localFile.childImageSharp.gatsbyImageData
	const image_responsive_alt = props.imgResponsive?.altText
	// Parallax
	const parallax_from = props.parallax_from
	const parallax_to = props.parallax_to

	// Returning Section
  return (
		<>
			{ image ?
				<div className="image-wrap">
					{ parallax_from && parallax_from !== 0 && parallax_to && parallax_to !== 0 ?
						<Parallax className="parallax" y={[parallax_from + '%', parallax_to + '%']} tagOuter="figure">
							{ !image_responsive || windowSize.width > responsiveBreakpoint ?
								<GatsbyImage image={image} alt={image_alt} />
							: null }
							{ image_responsive && windowSize.width < responsiveBreakpoint ?
								<GatsbyImage image={image_responsive} alt={image_responsive_alt} />
							: null }
						</Parallax>
					:
						<>
							{ !image_responsive || windowSize.width > responsiveBreakpoint ?
								<GatsbyImage image={image} alt={image_alt} />
							: null }
							{ image_responsive && windowSize.width < responsiveBreakpoint ?
								<GatsbyImage image={image_responsive} alt={image_responsive_alt} />
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