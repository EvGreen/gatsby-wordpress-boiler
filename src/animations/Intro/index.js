import React from 'react'
import './style.scss'

import { Transition, SwitchTransition } from 'react-transition-group'
import anime from 'animejs'

// Random roll, max is exc, min is inc
// function getRandomInt(min, max) {
//   min = Math.ceil(min)
//   max = Math.floor(max)
//   return Math.floor(Math.random() * (max - min) + min)
// }

// Sum values of given object
function sumValues(obj) {
	return Object.values(obj).reduce((a, b) => a + b)
}

// Blink IN
function blinkIn(timeline) {

  const blinkspeed = 10
  const blinkdelay = 40

	timeline
		.add({
			keyframes: [
				{
					opacity: [1, 0],
					duration: blinkspeed,
					delay: blinkdelay,
				},
				{
					opacity: [0, 1],
					duration: blinkspeed,
					delay: blinkdelay,
				},
				{
					opacity: [1, 0],
					duration: blinkspeed,
					delay: blinkdelay,
				},
				{
					opacity: [0, 1],
					duration: blinkspeed,
					delay: blinkdelay,
				},
				{
					opacity: [1, 0],
					duration: blinkspeed,
					delay: blinkdelay,
				},
				{
					opacity: [0, 1],
					duration: blinkspeed,
					delay: blinkdelay,
				},
				{
					opacity: [1, 0],
					duration: blinkspeed,
					delay: blinkdelay,
				},
				{
					opacity: [0, 1],
					duration: blinkspeed,
					delay: blinkdelay,
				},
				{
					opacity: [1, 0],
					duration: blinkspeed,
					delay: blinkdelay,
				},
				{
					opacity: [0, 1],
					duration: blinkspeed,
					delay: blinkdelay,
				},
			],
			duration: 0,
			delay: 0,
		})
}
// Blink OUT
function blinkOut(timeline) {

  const blinkspeed = 10
  const blinkdelay = 40

	timeline
		.add({
			keyframes: [
				{
					opacity: [1, 0],
					duration: blinkspeed,
					delay: blinkdelay,
				},
				{
					opacity: [0, 1],
					duration: blinkspeed,
					delay: blinkdelay,
				},
				{
					opacity: [1, 0],
					duration: blinkspeed,
					delay: blinkdelay,
				},
				{
					opacity: [0, 1],
					duration: blinkspeed,
					delay: blinkdelay,
				},
				{
					opacity: [1, 0],
					duration: blinkspeed,
					delay: blinkdelay,
				},
				{
					opacity: [0, 1],
					duration: blinkspeed,
					delay: blinkdelay,
				},
				{
					opacity: [1, 0],
					duration: blinkspeed,
					delay: blinkdelay,
				},
				{
					opacity: [0, 1],
					duration: blinkspeed,
					delay: blinkdelay,
				},
				{
					opacity: [1, 0],
					duration: blinkspeed,
					delay: blinkdelay,
				},
			],
			duration: 0,
			delay: 0,
		})
}

// Diagonal Top Left IN
function diagonalTopLeftIn(timeline, duration) {

	timeline
		.add({
			opacity: [0, 1],
			translateX: [50,0],
			translateY: [50,0],
			delay: 0,
			duration: duration,
			easing: 'easeOutSine',
		})
}

// Diagonal Bottom right IN
function diagonalBottomRightIn(timeline, duration) {

	timeline
		.add({
			opacity: [0, 1],
			translateX: [-50,0],
			translateY: [-50,0],
			delay: 0,
			duration: duration,
			easing: 'easeOutSine',
		})
}

// Fade IN
function fadeIn(timeline, duration) {

	timeline
		.add({
			opacity: [0, 1],
			delay: 0,
			duration: duration,
			easing: 'linear',
		})
}
// Fade OUT
function fadeOut(timeline, duration) {

	timeline
		.add({
			opacity: [1, 0],
			delay: 0,
			duration: duration,
			easing: 'linear',
		})
}

// Fade IN TOP
function fadeInTop(timeline, duration) {

	timeline
		.add({
			opacity: [0, 1],
			translateY: [-20, 0],
			delay: 0,
			duration: duration,
			easing: 'easeOutSine',
		})
}

// Fade IN BOTTOM
function fadeInBottom(timeline, duration) {

	timeline
		.add({
			opacity: [0, 1],
			translateY: [20, 0],
			delay: 0,
			duration: duration,
			easing: 'easeOutSine',
		})
}

// Draw IN
function drawIn(timeline, target, duration) {

	timeline
		.add({
			targets: target,
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: 'linear',
			delay: 0,
			duration: duration,
		})
}
// Draw Out
function drawOut(timeline, target, duration) {

	timeline
		.add({
			targets: target,
			strokeDashoffset: [0, anime.setDashoffset],
			easing: 'linear',
			delay: 0,
			duration: duration,
		})
}

// Appear IN
function appearIn(timeline) {

	timeline
		.add({
			opacity: [0, 1],
			duration: 5,
			delay: 0,
		})
}
// Disappear OUT
function disappearOut(timeline) {

	timeline
		.add({
			opacity: [1, 0],
			duration: 5,
			delay: 0,
		})
}

// BackGround IN
function bgIn(timeline, target, duration) {

	timeline
		.add({
			targets: target,
			translateX: ['-101%', 0],
			delay: 0,
			duration: duration,
			easing: 'easeOutExpo',
		})
}
// BackGround OUT
function bgOut(timeline, target, duration) {

	timeline
		.add({
			targets: target,
			translateX: [0,'101%'],
			delay: 0,
			duration: duration,
			easing: 'easeOutQuad',
		}, `-=${duration / 2}`)
}

// Border IN
function borderIn(timeline, target, duration) {

	const border_left = target[0]
	const border_top = target[1]
	const border_right = target[2]
	const border_bottom = target[3]
	const duration_local = duration / 2

	timeline
		.add({
			targets: border_left,
			translateY: ['-101%', 0],
			duration: duration_local,
			delay: 0,
			easing: 'easeOutSine',
		})
		.add({
			targets: border_top,
			translateX: ['-101%', 0],
			duration: duration_local,
			delay: 0,
			easing: 'easeOutSine',
		},`-=${duration_local}`)
		.add({
			targets: border_right,
			translateY: ['-101%', 0],
			duration: duration_local,
			delay: 0,
			easing: 'easeOutSine',
		})
		.add({
			targets: border_bottom,
			translateX: ['-101%', 0],
			duration: duration_local,
			delay: 0,
			easing: 'easeOutSine',
		},`-=${duration_local}`)
}
// Border OUT
function borderOut(timeline, target, duration) {

	const border_left = target[0]
	const border_top = target[1]
	const border_right = target[2]
	const border_bottom = target[3]
	const duration_local = duration / 2

	timeline
		.add({
			targets: border_left,
			translateY: [0, '101%'],
			duration: duration_local,
			delay: 0,
			easing: 'easeOutSine',
		}, `-=${duration_local}`)
		.add({
			targets: border_top,
			translateX: [0, '101%'],
			duration: duration_local,
			delay: 0,
			easing: 'easeOutSine',
		},`-=${duration_local}`)
		.add({
			targets: border_right,
			translateY: [0, '101%'],
			duration: duration_local,
			delay: 0,
			easing: 'easeOutSine',
		})
		.add({
			targets: border_bottom,
			translateX: [0, '101%'],
			duration: duration_local,
			delay: 0,
			easing: 'easeOutSine',
		},`-=${duration_local}`)
}


function Intro(props) {

	// Visibility - load in/out trigger
	const visible = props.visible

	// In / Out Animation Arrays
	const in_ = props.in
	const out_ = props.out

	// General Duration & Delay
	const randomOffset = 0
	const delayIn = props.delayIn ? props.delayIn + randomOffset : randomOffset
	const delayOut = props.delayOut ? props.delayOut : 0
	const timeout = out_ ? sumValues(out_) + delayOut : delayOut
	
	//console.log('timeout', timeout, in_, out_)

	// Animating fade in/out quick
	const animateIn = element => {

    // Randomize appearance
		const bg = element.querySelectorAll(':scope > .bg')
		const border = element.querySelectorAll(':scope > .border')
		const children = element.querySelectorAll(':scope > .children')
		const path = element.querySelectorAll(':scope svg path')

		// Start timeline, we'll be adding and chaining animations to this one
		const timeline = anime.timeline({
			targets: children,
			delay: 0, // Can be inherited
			duration: 500, // Can be inherited
			easing: 'easeOutExpo', // Can be inherited
			direction: 'alternate', // Is not inherited
			loop: false, // Is not inherited,
		})
		.add({ // Initial delay and hiding
			opacity: [0, 0],
			delay: delayIn,
			duration: 5,
			begin: function() {
				element.style.visibility = 'visible';
			},
		})

		if(in_) {
			for (const animation in in_) {

				if (animation === 'border') {
					borderIn(timeline, border, in_[animation])
				}

				if (animation === 'bg') {
					bgIn(timeline, bg, in_[animation])
				}

				if (animation === 'blink') {
					blinkIn(timeline)
				}

				if (animation === 'fade') {
					fadeIn(timeline, in_[animation])
				}

				if (animation === 'fadeInTop') {
					fadeInTop(timeline, in_[animation])
				}
				if (animation === 'fadeInBottom') {
					fadeInBottom(timeline, in_[animation])
				}

				if (animation === 'draw') {
					drawIn(timeline, path, in_[animation])
				}

				if (animation === 'appear') {
					appearIn(timeline)
				}

				if (animation === 'diagonalTopLeft') {
					diagonalTopLeftIn(timeline, in_[animation])
				}

				if (animation === 'diagonalBottomRight') {
					diagonalBottomRightIn(timeline, in_[animation])
				}

				if (animation === 'done') {
					timeline.finished.then(function() {
						element.classList.add('done')
					})
				}
			}
		} else {
			appearIn(timeline)
		}

	}

	// Animating fade in/out quick
	const animateOut = element => {

    // Randomize appearance
		const bg = element.querySelectorAll(':scope > .bg')
		const border = element.querySelectorAll(':scope > .border')
		const children = element.querySelectorAll(':scope > .children')
		const path = element.querySelectorAll(':scope svg path')

		// Start timeline, we'll be adding and chaining animations to this one
		const timeline = anime.timeline({
			targets: children,
			delay: 0, // Can be inherited
			duration: 500, // Can be inherited
			easing: 'easeOutExpo', // Can be inherited
			direction: 'alternate', // Is not inherited
			loop: false, // Is not inherited
		})
		.add({ // Initial delay and hiding
			opacity: [1, 1],
			delay: delayOut,
			duration: 5,
		})

		for (const animation in out_) {

			if (animation === 'border') {
				borderOut(timeline, border, in_[animation])
			}

			if (animation === 'bg') {
				bgOut(timeline, bg, out_[animation])
			}

			if (animation === 'disappear') {
				disappearOut(timeline)
			}

			if (animation === 'blink') {
				blinkOut(timeline)
			}

			if (animation === 'fade') {
				fadeOut(timeline, out_[animation])
			}

			if (animation === 'draw') {
				drawOut(timeline, path, in_[animation])
			}
		}
	}

  return (
		<>
		{props.switch || props.switch === 0 ?
			<SwitchTransition mode="out-in">
				<Transition
					key={props.switch}
					timeout={timeout}
					appear={true}
					onEntering={animateIn}
					onExiting={animateOut}
					mountOnEnter={!props.mounted}
					unmountOnExit={!props.stay}
				>
					<div className={`${props.className} animation-intro-wrap`} style={{visibility: 'hidden'}}>

						<div className="children">
							{props.children}
						</div>

						{in_?.hasOwnProperty('bg') ?
							<div className="bg"></div>
						: null }

						{in_?.hasOwnProperty('border') ?
							<>
								<div className="contrast border border-left"></div>
								<div className="contrast border border-top"></div>
								<div className="contrast border border-right"></div>
								<div className="contrast border border-bottom"></div>
							</>
						: null }

					</div>
				</Transition>
			</SwitchTransition>
		:
			<Transition
				in={visible}
				timeout={timeout}
				appear={true}
				onEntering={animateIn}
				onExiting={animateOut}
				mountOnEnter={!props.mounted}
				unmountOnExit={!props.stay}
			>
				<div className={`animation-intro-wrap ${props.className}`} style={{visibility: 'hidden'}}>

					<div className="children">
						{props.children}
					</div>

					{in_?.bg > 0 ?
						<div className="bg"></div>
					: null }

					{in_?.border > 0 ?
						<>
							<div className="contrast border border-left"></div>
							<div className="contrast border border-top"></div>
							<div className="contrast border border-right"></div>
							<div className="contrast border border-bottom"></div>
						</>
					: null }

				</div>
			</Transition>
		}
		</>
  )
}

export default Intro