import React, { useContext, useRef, useEffect } from 'react'
import NaviContext from '../../../context/NaviContext'

import { Transition } from 'react-transition-group'
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
				opacity: [0, 0.2],
				duration: fadeDuration,
				easing: 'easeInOutSine'
			})
	}
	const fadeOut = element => {
		anime
			.timeline()
			.add({
				targets: element,
				opacity: [0.2, 0],
				duration: fadeDuration,
				easing: 'easeInOutSine'
			})
	}

	

	function noise(ctx) {
		console.log('ctx')

		var w = ctx.canvas.width,
				h = ctx.canvas.height,
				idata = ctx.createImageData(w, h),
				buffer32 = new Uint32Array(idata.data.buffer),
				len = buffer32.length,
				run = 0,
				color = 0,
				m = Math.random() * 6 + 4,
				band = Math.random() * 256 * 256,
				p = 0,
				i = 0;

		for (; i < len;) {
				if (run < 0) {
						run = m * Math.random();
						p = Math.pow(Math.random(), 0.4);
						color = (255 * p) << 24;
				}
				run -= 1;
				buffer32[i++] = color;
		}

		ctx.putImageData(idata, 0, 0);
	}

	const draw = (ctx, frameCount, noiseData) => {
		console.log('draw')
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

		 // Play Noise
		ctx.putImageData(noiseData[frameCount % 11], 0, 0)

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
	
	const canvasRef = useRef(null)
	useEffect(() => {
    if(naviContext.isHamburgerActive) {
			const canvas = canvasRef.current
			canvas.width = canvas.clientWidth
			canvas.height = canvas.clientHeight

			const context = canvas.getContext('2d')
			let frameCount = 0
			let animationFrameId
			

			// Create Noise
			let noiseData = []
			const createNoise = () => {
				console.log('cn')
				const idata = context.createImageData(canvas.width, canvas.height)
				const buffer32 = new Uint32Array(idata.data.buffer)
				const len = buffer32.length
	
				for (let i = 0; i < len; i++) {
						if (Math.random() < 0.35) {
								buffer32[i] = 0xff000000
						}
				}
	
				noiseData.push(idata)
			}
	
			for (let i = 0; i < 11; i++) {
				createNoise()
			}

			// Set global parameters
			context.globalCompositeOperation = 'screen'
			context.imageSmoothingEnabled = false

			
			//Our draw came here
			const render = () => {
				frameCount++
				//draw(context, frameCount, noiseData)
				noise(context)
				animationFrameId = window.requestAnimationFrame(render)
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
			mountOnEnter={true}
			unmountOnExit={true}
		>
			<canvas id="gaze" className={`entity layer`} ref={canvasRef} {...props}/>
		</Transition>
  )
}

export default Gaze