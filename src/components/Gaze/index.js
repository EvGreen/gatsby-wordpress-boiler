import React, { useContext, useRef, useEffect } from 'react'
import NaviContext from '../../context/NaviContext'

import { Transition, TransitionGroup } from 'react-transition-group'
import anime from 'animejs'

import img_noise from './noise.png'

import './style.scss'

function Gaze(props) {
	const naviContext = useContext(NaviContext)

	const fadeDuration = 1000
	const fadeIn = element => {
		anime
			.timeline()
			.add({
				targets: element,
				opacity: [0, 1],
				duration: fadeDuration,
				easing: 'easeInOutSine'
			})
	}
	const fadeOut = element => {
		anime
			.timeline()
			.add({
				targets: element,
				opacity: [1, 0],
				duration: fadeDuration,
				easing: 'easeInOutSine'
			})
	}

	

	const draw = (ctx, frameCount) => {

		// Prep Noise PNG
		let noise = new Image()
		noise.src = img_noise

		// Clear Canvas
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

		// Draw Noise PNG with random offsets
		let min = -2
		let max = 0
		let expand = (Math.abs(min) + Math.abs(max)) + 2
		let noise_x_offset = Math.floor(Math.random() * (max - min) + min)
		let noise_y_offset = Math.floor(Math.random() * (max - min) + min)
		//ctx.drawImage(noise, noise_x_offset, noise_y_offset, ctx.canvas.width + expand, ctx.canvas.height + expand)
		
		// ctx.beginPath()
		// ctx.fillStyle = '#000000'
		// ctx.rect(0,0,ctx.canvas.width,ctx.canvas.height)
		// ctx.fill()
		// ctx.closePath()
		for(let i = 0; i < 100; i++) {
			let x = Math.random() * ctx.canvas.width
			let y = Math.random() * ctx.canvas.height
			ctx.beginPath()
			// Cyan
			ctx.fillStyle = 'rgba(0,255,255,1)'
			ctx.rect(x + noise_x_offset * 2, Math.floor(y + noise_y_offset / 10),103,102)
			ctx.fill()
			ctx.closePath()
			ctx.beginPath()
			// Magenta
			ctx.fillStyle = 'rgba(255,0,255,1)'
			ctx.rect(x - noise_x_offset * 2, Math.floor(y - noise_y_offset / 10),103,102)
			ctx.fill()
			ctx.closePath()
			ctx.beginPath()
			// Yellow
			ctx.fillStyle = 'rgba(255,255,0,1)'
			ctx.rect(x - noise_x_offset, y,100,100)
			ctx.fill()
			//ctx.filter = 'blur(1px)'
			ctx.closePath()
		}
	}
	
	const canvasRef = useRef(null)
	useEffect(() => {
    if(naviContext.isHamburgerActive) {
			const canvas = canvasRef.current
			canvas.width = canvas.clientWidth
			canvas.height = canvas.clientHeight

			const context = canvas.getContext('2d')
			let frameCount = 0
			let animationFrameId

			// Set global parameters
			context.globalCompositeOperation = 'screen'
			context.imageSmoothingEnabled = false
			
			//Our draw came here
			const render = () => {
				frameCount++
				draw(context, frameCount)
				animationFrameId = window.requestAnimationFrame(render)
			}
			render()
			
			return () => {
				window.cancelAnimationFrame(animationFrameId)
			}
		}
  }, [draw, naviContext.isHamburgerActive])

  return (
		<Transition
			in={naviContext.isHamburgerActive ? true :	false}
			timeout={fadeDuration}
			onEntering={fadeIn}
			onExiting={fadeOut}
			mountOnEnter={true}
			unmountOnExit={true}
		>
			<canvas id="gaze" className={`entity layer`} ref={canvasRef} {...props}/>
		</Transition>
  )
}

export default Gaze