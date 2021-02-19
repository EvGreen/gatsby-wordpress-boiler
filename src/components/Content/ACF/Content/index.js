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
		const classes = node.classes
		const wysiwyg = node.wysiwyg
		const image = node.img?.localFile.childImageSharp.fluid
		const video_source = node.video_source
		const video_iframe = node.video_iframe
		const video_file = node.video_file?.localFile.publicURL

		return (
			<div key={node.id} className={`block ${wysiwyg ? 'block-content' : ''} ${image ? 'block-image' : ''} ${video_iframe || video_file ? 'block-video' : ''} ${classes}`}>

				{ wysiwyg ?
					<div className='content-holder animated' dangerouslySetInnerHTML={{__html: wysiwyg}} />
				: null }

				{ image ?
					<Img fluid={image}
						imgStyle={{objectFit: 'cover'}}
						objectPosition='50% 50%'
					/>
				: null }

				{video_source === 'file' ?
				<>
					{ video_file ?
						<Video file={video_file} />
					: null }
				</>
				: null }

				{video_source === 'iframe' ?
				<>
					{ video_iframe ?
						<div className='video-inject' dangerouslySetInnerHTML={{__html: video_iframe}} />
					: null }
				</>
				: null }

			</div>
		)
	})

  return (
		<section id={`section-${anchor ? anchor : 'whatevs'}`} className={`content grid-12 is-inview ${classes}`}>
			
			{anchor ?
				<div id={anchor} className="anchor"></div>
			: null}

			{blockMap}

		</section>
  )
}

export default Content