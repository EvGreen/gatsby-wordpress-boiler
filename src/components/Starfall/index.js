import React, { useEffect } from 'react'
//import { useStaticQuery, graphql } from 'gatsby'
import anime from 'animejs'

//import PropTypes from 'prop-types'
import './style.scss'

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

const starFall = item => {
	var randomDurationIntro = getRandomInt(150,300)
	var randomDurationOutro = getRandomInt(150,300)
	var randomDelayIntro = getRandomInt(50,120)
	var randomDelayOutro = getRandomInt(50,150)
	anime.timeline({
		targets: item,
		opacity: [1,0.05],
		easing: 'easeInOutSine',
		loop: true
	})
	.add({
		targets: item,
		translateY: ['-101%',0],
		duration: randomDurationIntro,
		delay: randomDelayIntro
	})
	.add ({
		translateY: [0,'101%'],
		duration: randomDurationOutro,
		delay: randomDelayOutro
	})
}


function Starfall(props) {	

	useEffect(() => {
		const startrails = document.getElementsByClassName('startrail')
		for (var i = 0; i < startrails.length; i++) {
			starFall(startrails[i])
		}
	},[])

	return (
		<div className='starfall'>
			<div className='star' style={{ top: '0', left: '0%', width: '3px', height: '1em' }}>
				<div className='startrail' style={{ opacity: 0 }}></div>
			</div>
			<div className='star' style={{ top: '0', left: '25%', width: '3px', height: '1.75em' }}>
				<div className='startrail' style={{ opacity: 0 }}></div>
			</div>
			<div className='star' style={{ top: '17px', left: '50%', width: '3px', height: '1.5em' }}>
				<div className='startrail' style={{ opacity: 0 }}></div>
			</div>
			<div className='star' style={{ top: '0', left: '75%', width: '3px', height: '1.75em' }}>
				<div className='startrail' style={{ opacity: 0 }}></div>
			</div>
			<div className='star' style={{ top: '0', left: '100%', width: '3px', height: '1.25em' }}>
				<div className='startrail' style={{ opacity: 0 }}></div>
			</div>
		</div>
  )
}

export default Starfall