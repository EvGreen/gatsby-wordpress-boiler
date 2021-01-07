import React, { useContext, useRef, useEffect, useState } from 'react'
import NaviContext from '../../../context/NaviContext'

import { Transition } from 'react-transition-group'
import anime from 'animejs'

import img_noise from './noise.png'

import './style.scss'

function Noise(props) {
	const naviContext = useContext(NaviContext)
	const [noiseData, setNoiseData] = useState([])
	const noiseFrames = 67
	const [noiseFrame, setNoiseFrame] = useState(noiseFrames)

	const canvasRef = useRef(null)

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

	

	function createNoise(ctx) {
		console.log('fn: createNoise')

		var w = ctx.canvas.width,
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
				i = 0;

		for (; i < len;) {
				if (run < 0) {
						run = m * Math.random();
						p = Math.pow(Math.random(), 0.4);
						// Banding
						if (i > band && i < band + 512 * 256) {
								p = Math.random();
						}
						color = (255 * p) << 24;
				}
				run -= 1;
				buffer32[i++] = color;
		}

		setNoiseData((noiseData) => {
			noiseData.push(idata)
			return noiseData
		})

	}

	const draw = (ctx, noiseData, noiseFrame) => {
		//console.log('fn: draw', noiseFrame)
		// // Prep Noise PNG
		// let noise = new Image()
		// noise.src = img_noise

		// Clear Canvas
		//ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

		// // Draw Noise PNG with random offsets
		// let min = -2
		// let max = 0
		// let expand = (Math.abs(min) + Math.abs(max)) + 2
		// let noise_x_offset = Math.floor(Math.random() * (max - min) + min)
		// let noise_y_offset = Math.floor(Math.random() * (max - min) + min)
		//ctx.drawImage(noise, noise_x_offset, noise_y_offset, ctx.canvas.width + expand, ctx.canvas.height + expand)
		
		// ctx.beginPath()
		// ctx.fillStyle = '#000000'
		// ctx.rect(0,0,ctx.canvas.width,ctx.canvas.height)
		// ctx.fill()
		// ctx.closePath()

		 // Play Noise frames depending on framecount
		ctx.putImageData(noiseData[noiseFrame - 1], 0, 0)

		// for(let i = 0; i < 100; i++) {
		// 	let x = Math.random() * ctx.canvas.width
		// 	let y = Math.random() * ctx.canvas.height
		// 	ctx.beginPath()
		// 	// Cyan
		// 	ctx.fillStyle = 'rgba(0,255,255,1)'
		// 	ctx.rect(x + noise_x_offset * 2, Math.floor(y + noise_y_offset / 10),103,102)
		// 	ctx.fill()
		// 	ctx.closePath()
		// 	ctx.beginPath()
		// 	// Magenta
		// 	ctx.fillStyle = 'rgba(255,0,255,1)'
		// 	ctx.rect(x - noise_x_offset * 2, Math.floor(y - noise_y_offset / 10),103,102)
		// 	ctx.fill()
		// 	ctx.closePath()
		// 	ctx.beginPath()
		// 	// Yellow
		// 	ctx.fillStyle = 'rgba(255,255,0,1)'
		// 	ctx.rect(x - noise_x_offset, y,100,100)
		// 	ctx.fill()
		// 	//ctx.filter = 'blur(1px)'
		// 	ctx.closePath()
		// }
	}

	useEffect(() => {

			const canvas = canvasRef.current
			const context = canvas.getContext('2d')
			
			// Make the noise canvas render at lower resolution for slight blur and performance improvement
			canvas.width = canvas.clientWidth * 0.65
			canvas.height = canvas.clientHeight * 0.65

			// Set global parameters
			context.globalCompositeOperation = 'screen'
			context.imageSmoothingEnabled = false
	
			// Generate n noise frames
			for (let i = 0; i < noiseFrames; i++) {
				createNoise(context)
			}

	}, [])
	
	useEffect(() => {

    if(naviContext.isHamburgerActive) {

			const canvas = canvasRef.current
			const context = canvas.getContext('2d')

			let animationFrameId

			
			//Our draw came here
			const render = () => {

				// Run noise frame cycle, so 
				setNoiseFrame((i) => {
					if(i === noiseFrames) {
						i = 0
					}
					i++
					if (i % 2) {
						animationFrameId = window.requestAnimationFrame(render)
						return i
					}
					draw(context, noiseData, i)
					animationFrameId = window.requestAnimationFrame(render)
					return i
				})
			}
			render()
			
			return () => {
				window.cancelAnimationFrame(animationFrameId)
			}
		}
	}, [naviContext.isHamburgerActive])
	
	
	// useEffect(() => {
	// 	const script = document.createElement('script');
	// 	script.src = "https://frontrunner-restaurant.popmenu.com/s/embeds/zjyivlda.js";
	// 	script.async = true;
	// 	document.body.appendChild(script);
	// 	return () => {
	// 		document.body.removeChild(script);
	// 	}
	// },[])

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