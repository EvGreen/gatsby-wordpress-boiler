import React, { useEffect, useRef, useState } from 'react'

import './style.scss'
import { useInView } from 'react-intersection-observer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons'

// Convert time to readable format
function convertTime(time) {
	let minutes = Math.floor(time / 60)
	let seconds = Math.floor(time - minutes * 60)
	let minuteValue
	let secondValue

	if (minutes < 10) {
		minuteValue = '0' + minutes
	} else {
		minuteValue = minutes
	}

	if (seconds < 10) {
		secondValue = '0' + seconds
	} else {
		secondValue = seconds
	}

	let mediaTime = minuteValue + ':' + secondValue

	return mediaTime
}

// Prepare time UI
function setTime(media) {
	if(media) {

		let current = convertTime(media.currentTime)
		let total = convertTime(media.duration)
		
		let timeUi = `${current} / ${total}`

		return timeUi

	}
}

function Vimeo(props) {
	const player = useRef(null)
	const [io, ioInView] = useInView({ triggerOnce: false })

	const [currentTime, setCurrentTime] = useState('00:00')
	const [isPlaying, setIsPlaying] = useState(false)
	const [isMuted, setIsMuted] = useState(true)

	// Play when in view
	useEffect(() => {
		ioInView ? vPlay() : vPause()
	},[ioInView])

	// Play
	function vPlay() {
		player.current.play().catch((e)=>{
			console.log('video play error', e)
	 	})
		setIsPlaying(true)
	}
	
	// Mute / Unmute
	function vMute() {
		setIsMuted(!isMuted)
	}

	// Pause
	function vPause() {
		player.current.pause()
		setIsPlaying(false)
	}
	
	// Time
	useEffect(() => {
		player.current.addEventListener('timeupdate', () => { setCurrentTime(setTime(player.current)) })
	},[])


	return (
		<div ref={io} className={`video-html-wrap ${isPlaying ? 'is-playing' : 'is-not-playing'}`}>
			{/* <button onClick={vPlay}>play</button> */}
			{/* <button onClick={vPause}>pause</button> */}
			{/* <button onClick={vMute}>sound is {isMuted ? 'off' : 'on'}</button> */}
			{/* {currentTime} | {isPlaying ? 'playing' : 'not playing'} */}
			<div className="mute-indicator" onClick={vMute} onKeyDown={vMute} role="button" rel="noreferrer noopener" tabIndex="0">
				{
					isMuted ?
					<div className="muted-on animate-in-from-top"><FontAwesomeIcon icon={faVolumeMute} /></div> :
					<div className="muted-off animate-in-from-bottom"><FontAwesomeIcon icon={faVolumeUp} /></div>
				}
			</div>
			<div className="current-time hidden">{currentTime}</div>
			<video ref={player} muted={isMuted ? true : null} loop playsInline disablePictureInPicture allow="autoplay">
				<source src={props.file} type="video/mp4" />
				<track
					default kind="captions"
          srcLang="en"
          src="none.vtt"/>
			</video>
		</div>
	)
}

export default Vimeo