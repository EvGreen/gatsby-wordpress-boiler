import React from 'react'
import './style.scss'

import VideoHTML from '../../../Video/HTML'

function ACFVideo(props) {

	// Video Type
	const video_source = props.video_source
	const video_iframe = props.video_iframe
	const video_file = props.video_file?.localFile.publicURL

	// Returning Section
  return (
		<>
			{ video_source === 'file' ?
				<>
					{ video_file ?
						<VideoHTML file={video_file} />
					: null }
				</>
				: null }

				{ video_source === 'iframe' ?
				<>
					{ video_iframe ?
						<div className='video-inject aspect-ratio' dangerouslySetInnerHTML={{__html: video_iframe}} />
					: null }
				</>
				: null }
		</>
  )
}

export default ACFVideo