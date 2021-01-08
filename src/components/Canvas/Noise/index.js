import React, { useContext, useRef, useEffect, useState } from 'react'
import NaviContext from '../../../context/NaviContext'

import { Transition } from 'react-transition-group'
import anime from 'animejs'

import img_noise from './noise.png'

import './style.scss'

function Noise(props) {
	const naviContext = useContext(NaviContext)

	// The noise frames, or rather image data
	const [noiseData, setNoiseData] = useState([])

	// How many noise frames to prepare
	const noiseFrames = 15

	// Current noise frame to display
	const [noiseFrame, setNoiseFrame] = useState(noiseFrames)

	// Canvas handle
	const canvasRef = useRef(null)

	// Anime JS fade-in-out (possibly to refactor coz it's just a fade, nothing fancy needed)
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

	
	// Create noise frame
	function createNoise(ctx) {
		console.log('fn: createNoise')

		let w = ctx.canvas.width,
				h = ctx.canvas.height,
				idata = ctx.createImageData(w, h),
				buffer32 = new Uint32Array(idata.data.buffer),
				len = buffer32.length,
				run = 0,
				color = 0,
				// Length of noise stripes
				m = Math.random() * 6 + 10,
				band = Math.random() * w * h,
				p = 0,
				i = 0

		for (; i < len;) {
				if (run < 0) {
						run = m * Math.random()
						p = Math.pow(Math.random(), 0.4)
						// Banding
						if (i > band && i < band + 512 * 256) {
								p = Math.random()
						}
						color = (255 * p) << 24
				}
				run -= 1
				buffer32[i++] = color
		}

		setNoiseData((prevNoiseData) => {
			prevNoiseData.push(idata)
			return prevNoiseData
		})

	}

	// Draw a frame to canvas
	const drawNoise = (ctx, noiseData, noiseFrame) => {
		//console.log('fn: draw', noiseFrame)
		// // Prep Noise PNG
		// let noise = new Image()
		// noise.src = img_noise

		// Clear Canvas
		//ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

		// // Draw Noise PNG with random offsets
		// let expand = (Math.abs(min) + Math.abs(max)) + 2
		//ctx.drawImage(noise, noise_x_offset, noise_y_offset, ctx.canvas.width + expand, ctx.canvas.height + expand)
		
		// ctx.beginPath()
		// ctx.fillStyle = '#000000'
		// ctx.rect(0,0,ctx.canvas.width,ctx.canvas.height)
		// ctx.fill()
		// ctx.closePath()

		 // Play Noise frames depending on framecount
		ctx.putImageData(noiseData[noiseFrame], 0, 0)

	}

	const drawText = (ctx) => {
		
		ctx.font = 'bold 7em monospace'

		let min = -3
		let max = 2

		for(let i = 0; i < 3; i++) {

			let x_offset = Math.floor(Math.random() * (max - min) + min)
			let y_offset = Math.floor(Math.random() * (max - min) + min)
			let x = Math.floor(ctx.canvas.width / 6 + x_offset)
			let y = Math.floor(ctx.canvas.height / 2 + y_offset)

			ctx.beginPath()
			// Cyan
			ctx.fillStyle = 'rgba(0,255,255,1)'
			//ctx.rect(x + x_offset * 2, Math.floor(y + noise_y_offset / 10),103,102)
			ctx.fill()
			if(x_offset > -3) {
				ctx.fillText('-NO S1GNAL-', x + 2, y)
			} else {
				ctx.fillText('-N0 51gN4L-', x + 2, y)
			}
			ctx.closePath()
			ctx.beginPath()
			// Magenta
			ctx.fillStyle = 'rgba(255,0,255,1)'
			//ctx.rect(x - x_offset * 2, Math.floor(y - noise_y_offset / 10),103,102)
			ctx.fill()
			ctx.fillText('-NO SIGNaL-', x - 2, y)
			ctx.closePath()
			ctx.beginPath()
			// Yellow
			ctx.fillStyle = 'rgba(255,255,0,1)'
			//ctx.rect(x - x_offset, y,100,100)
			ctx.fill()
			ctx.fillText('-NO SIGNAL-', x, y)
			//ctx.filter = 'blur(1px)'
			ctx.closePath()
		}
	}

	// Prepare canvas and noise frames on initial component mount
	useEffect(() => {

			const canvas = canvasRef.current
			const context = canvas.getContext('2d')
			
			// Make the noise canvas render at lower resolution for slight blur and performance improvement
			canvas.width = canvas.clientWidth * 0.65
			canvas.height = canvas.clientHeight * 0.65

			// Set global parameters
			context.globalCompositeOperation = 'lighter'
			context.imageSmoothingEnabled = false
	
			// Generate n noise frames
			for (let i = 0; i < noiseFrames; i++) {
				createNoise(context)
			}

	}, [])
	
	// Monitor hamburger activation to fire up the canvas animation
	useEffect(() => {

    if(naviContext.isHamburgerActive) {

			const canvas = canvasRef.current
			const context = canvas.getContext('2d')

			let animationFrameId
			let frameCount = 0
			let noiseFrameCount = 0
			
			// Draw and render
			const render = () => {

				// Will determine the noise frame update rate
				let noiseFrame = noiseFrameCount % noiseFrames

				// Rem op indicates the desired refresh rate of noise animation, typical 60Hz % 2 it'll run at 30fps, giving it more TV like look and save some performance
				if (frameCount % 2 === 0) {
					// Draw next noise frame
					drawNoise(context, noiseData, noiseFrame)
					// Mark noise frame as rendered
					noiseFrameCount++
				}

				drawText(context)

				// Request another frame
				animationFrameId = window.requestAnimationFrame(render)

				frameCount++
			}
			render()
			
			return () => {
				window.cancelAnimationFrame(animationFrameId)
			}
		}
	}, [naviContext.isHamburgerActive])


  return (
		<Transition
			in={naviContext.isHamburgerActive ? true :	false}
			timeout={fadeDuration}
			onEntering={fadeIn}
			onExiting={fadeOut}
		>
			<canvas id="gaze" className={`entity layer`} ref={canvasRef} {...props}/>
		</Transition>
  )
}

export default Noise