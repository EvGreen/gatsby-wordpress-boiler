import React, { useEffect } from 'react'
//import { useStaticQuery, graphql } from 'gatsby'
import anime from 'animejs'

//import PropTypes from 'prop-types'
import './style.scss'

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const starFall = item => {
	var randomDurationIntro = getRandomInt(200,300)
	var randomDurationOutro = getRandomInt(200,300)
	var randomDelayIntro = getRandomInt(100,220)
	var randomDelayOutro = getRandomInt(150,250)
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
		setTimeout(() => {
			const startrails = document.getElementsByClassName('startrail')
			for (var i = 0; i < startrails.length; i++) {
				starFall(startrails[i])
			}
		}, 1500);
	},[])

	return (
		<div className='starfall'>
			<div className='star' style={{ top: '30%', left: '20%', width: '2px', height: '5em' }}>
				<div className='startrail' style={{ opacity: 0 }}></div>
			</div>
			<div className='star' style={{ top: '40%', left: '40%', width: '2px', height: '7em' }}>
				<div className='startrail' style={{ opacity: 0 }}></div>
			</div>
			<div className='star' style={{ top: '50%', left: '60%', width: '2px', height: '8em' }}>
				<div className='startrail' style={{ opacity: 0 }}></div>
			</div>
			<div className='star' style={{ top: '35%', left: '80%', width: '2px', height: '4em' }}>
				<div className='startrail' style={{ opacity: 0 }}></div>
			</div>
		</div>
  )
}

export default Starfall