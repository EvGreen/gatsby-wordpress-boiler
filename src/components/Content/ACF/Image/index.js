import React, {useEffect, useState} from 'react'
import './style.scss'

import { Parallax, withController } from 'react-scroll-parallax'

import Img from 'gatsby-image'

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
	const image = props.img?.localFile.childImageSharp.fluid
	// Image
	const image_responsive = props.img_responsive?.localFile.childImageSharp.fluid
	// BG Overlay
	const bg_overlay = props.bg_overlay
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
								<Img fluid={image}
									imgStyle={{objectFit: 'cover'}}
									objectPosition='50% 50%'
									className='image-main'
								/>
							: null }
							{ image_responsive && windowSize.width < responsiveBreakpoint ?
								<Img fluid={image_responsive}
									imgStyle={{objectFit: 'cover'}}
									objectPosition='50% 50%'
									className='image-responsive'
								/>
							: null }
						</Parallax>
					:
						<>
							{ !image_responsive || windowSize.width > responsiveBreakpoint ?
								<Img fluid={image}
									imgStyle={{objectFit: 'cover'}}
									objectPosition='50% 50%'
									className='image-main'
								/>
							: null }
							{ image_responsive && windowSize.width < responsiveBreakpoint ?
								<Img fluid={image_responsive}
									imgStyle={{objectFit: 'cover'}}
									objectPosition='50% 50%'
									className='image-responsive'
								/>
							: null }
						</>
					}

				</div>
			: null }
		</>
  )
}

export default withController(ACFImage)