import React from 'react'
import './style.scss'

import Intro from '../../../../animations/Intro'
import { useInView } from 'react-intersection-observer'

import VideoHTML from '../../../Video/HTML'

function ACFVideo(props) {
	const [io, ioInView] = useInView({ triggerOnce: true })

	// Video Type
	const videoSource = props.videoSource
	const videoIframe = props.videoIframe
	const videoFile = props.videoFile?.localFile.publicURL
	// Chain Animation
	const delay = 150 + props.inheritedDelay

	// Returning Section
  return videoSource === 'file' && videoFile ? (
		<div ref={io} className={`video-block-io`}>
			<Intro visible={ioInView} in={{ fade: 500 }} delayIn={delay} mounted={true} stay={true} className={``}>
				<VideoHTML file={videoFile} />
			</Intro>
		</div>
	) : videoSource === 'iframe' && videoIframe ? (
		<div ref={io} className={`video-block-io`}>
			<Intro visible={ioInView} in={{ fade: 500 }} delayIn={delay} mounted={true} stay={true} className={``}>
				<div className='video-inject aspect-ratio' dangerouslySetInnerHTML={{__html: videoIframe}} />
			</Intro>
		</div>
  ) : false
}

export default ACFVideo