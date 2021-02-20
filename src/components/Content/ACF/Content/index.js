import React, {useEffect, useState} from 'react'
import './style.scss'
import './child.scss'

import { Parallax, withController } from 'react-scroll-parallax'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Img from 'gatsby-image'
import Video from '../../../Video/HTML'

function Content(props) {
	const anchor = props.anchor
	const classes = props.classes
	const blocks = props.block
	const responsiveBreakpoint = 1024
	const [windowSize, setWindowSize] = useState({width: 0, height: 0})

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
	},[])
	
	// Building Blocks
	const blockMap = blocks?.map((node,i) => {

		// Block Main Settings
		const anchor = node.anchor
		const classes = node.classes

		// Wysiwyg Type
		const wysiwyg = node.wysiwyg

		// Image Type
		const image = node.img?.localFile.childImageSharp.fluid

		// Video Type
		const video_source = node.video_source
		const video_iframe = node.video_iframe
		const video_file = node.video_file?.localFile.publicURL

		// Slider Type
		const slides = node.slide

		// Slider Settings
		const sliderSettings = {
			dots: false,
			arrows: true,
			infinite: true,
			speed: 800,
			pauseOnFocus: true,
			autoplay: true,
			autoplaySpeed: 80000,
			slidesToShow: 1,
			slidesToScroll: 1,
			accessibility: false,
			fade: false,
			focusOnSelect: true,
			adaptiveHeight: false,
			centerMode: false,
			variableWidth: false
		}

		// Building Slides
		const slideMap = slides?.map((node, i) => {

			// Slide Main Settings
			const anchor = node.anchor
			const classes = node.classes

			// Image
			const image = node.img?.localFile.childImageSharp.fluid
			// Image
			const image_responsive = node.img_responsive?.localFile.childImageSharp.fluid
			// Wysiwyg
			const wysiwyg = node.wysiwyg
			// BG Overlay
			const bg_overlay = node.bg_overlay
			// Parallax
			const parallax_from = node.parallax_from
			const parallax_to = node.parallax_to

			// Returning Slide
			return (
				<div key={node.id} id={anchor ? 'slide-' + anchor : null} className={`slide aspect-ratio slide-${node.acf_fc_layout} ${classes ? classes : ''}`}>

					{ image ?
						<div className="image-wrap">
							{ parallax_from && parallax_from != 0 && parallax_to && parallax_to != 0 ?
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

					{ wysiwyg ?
						<div className='content-inject animated' dangerouslySetInnerHTML={{__html: wysiwyg}} />
					: null }

				</div>
			)
		})

		// Returning Block
		return (
			<div key={node.id} id={anchor ? 'block-' + anchor : null}  className={`block block-${node.acf_fc_layout} ${classes ? classes : ''}`}>

				{ wysiwyg ?
					<div className='content-inject animated' dangerouslySetInnerHTML={{__html: wysiwyg}} />
				: null }

				{ image ?
					<Img fluid={image}
						imgStyle={{objectFit: 'cover'}}
						objectPosition='50% 50%'
					/>
				: null }

				{ video_source === 'file' ?
				<>
					{ video_file ?
						<Video file={video_file} />
					: null }
				</>
				: null }

				{ video_source === 'iframe' ?
				<>
					{ video_iframe ?
						<div className='video-inject' dangerouslySetInnerHTML={{__html: video_iframe}} />
					: null }
				</>
				: null }

				{ slideMap ?
					<Slider {...sliderSettings}>
						{slideMap}
					</Slider>
				: null }

			</div>
		)
	})

	// Returning Section
  return (
		<section id={anchor ? 'section-' + anchor : null} className={`content grid-12 is-inview ${classes ? classes : ''}`}>
			
			{anchor ?
				<div id={anchor} className="anchor"></div>
			: null}

			{blockMap}

		</section>
  )
}

export default withController(Content)