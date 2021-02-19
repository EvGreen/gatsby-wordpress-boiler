import React from 'react'
import './style.scss'

import Img from 'gatsby-image'
import Video from '../../../Video/HTML'

function Content(props) {
	const content = props.wysiwyg
	const anchor = props.anchor
	const classes = props.classes
	const blocks = props.block
	
	const blockMap = blocks?.map((node,i) => {

		// Block Main Settings
		const anchor = node.classes
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
		const slideMap = slides?.map((node, i) => {
			// Image
			const image = node.img?.localFile.childImageSharp.fluid
			// Wysiwyg
			const wysiwyg = node.wysiwyg

			// Returning Slide
			return (
				<div className={`slide slide-${node.acf_fc_layout}`}>

					{ image ?
						<Img fluid={image}
							imgStyle={{objectFit: 'cover'}}
							objectPosition='50% 50%'
						/>
					: null }

					{ wysiwyg ?
						<div className='content-holder animated' dangerouslySetInnerHTML={{__html: wysiwyg}} />
					: null }

				</div>
			)
		})

		console.log(node.slide)

		// Returning Block
		return (
			<div key={node.id} className={`block block-${node.acf_fc_layout}`}>

				{ wysiwyg ?
					<div className='content-holder animated' dangerouslySetInnerHTML={{__html: wysiwyg}} />
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
					<>
					{slideMap}
					</>
				: null }
				

			</div>
		)
	})

	// Returning Section
  return (
		<section id={`section-${anchor ? anchor : 'whatevs'}`} className={`content grid-12 is-inview ${classes ? classes : ''}`}>
			
			{anchor ?
				<div id={anchor} className="anchor"></div>
			: null}

			{blockMap}

		</section>
  )
}

export default Content