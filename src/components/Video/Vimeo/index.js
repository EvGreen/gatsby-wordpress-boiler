import React, { useEffect, useRef, useState } from 'react'

import './style.scss'
import { useInView } from 'react-intersection-observer'

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

	// Play when in view
	useEffect(() => {
		ioInView ? vplay() : vpause()
	},[ioInView])

	// Play
	function vplay() {
		player.current.play()
		setIsPlaying(true)
	}

	// Pause
	function vpause() {
		player.current.pause()
		setIsPlaying(false)
	}
	
	// Time
	useEffect(() => {
		player.current.addEventListener('timeupdate', () => { setCurrentTime(setTime(player.current)) })
	},[])


	return (
		<div ref={io} className='video-vimeo-wrap'>
			<button onClick={vplay}>play</button><button onClick={vpause}>pause</button>{currentTime} | {isPlaying ? 'playing' : 'not playing'}
			<video ref={player} muted loop playsInline disablePictureInPicture>
				<source src={`/${props.file}`} type="video/mp4" />
			</video>
		</div>
	)
}

export default Vimeo