import React from 'react'
import './style.scss'

import VideoHTML from '../../../Video/HTML'

function ACFVideo(props) {

	// Video Type
	const videoSource = props.videoSource
	const videoIframe = props.videoIframe
	const videoFile = props.videoFile?.localFile.publicURL

	// Returning Section
  return (
		<>
			{ videoSource === 'file' ?
				<>
					{ videoFile ?
						<VideoHTML file={videoFile} />
					: null }
				</>
				: null }

				{ videoSource === 'iframe' ?
				<>
					{ videoIframe ?
						<div className='video-inject aspect-ratio' dangerouslySetInnerHTML={{__html: videoIframe}} />
					: null }
				</>
				: null }
		</>
  )
}

export default ACFVideo