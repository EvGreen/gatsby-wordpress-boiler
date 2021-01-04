import React, { useContext, useRef, useEffect } from 'react'
import NaviContext from '../../context/NaviContext'

import { Transition, TransitionGroup } from 'react-transition-group'
import anime from 'animejs'

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
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
		ctx.globalCompositeOperation = 'screen'
		// ctx.beginPath()
		// ctx.fillStyle = '#000000'
		// ctx.rect(0,0,ctx.canvas.width,ctx.canvas.height)
		// ctx.fill()
		// ctx.closePath()
		for(let i = 0; i < 20; i++) {
			let x = Math.random() * ctx.canvas.width
			let y = Math.random() * ctx.canvas.height
			ctx.beginPath()
			ctx.fillStyle = 'rgba(255,0,0,0.5)'
			ctx.rect(x - 15,y - 13,100,100)
			ctx.fill()
			ctx.closePath()
			ctx.beginPath()
			ctx.fillStyle = 'rgba(0,255,0,0.5)'
			ctx.rect(x-10,y-10,75,75)
			ctx.fill()
			ctx.closePath()
			ctx.beginPath()
			ctx.fillStyle = 'rgba(0,0,255,0.5)'
			ctx.rect(x-20,y,50,50)
			ctx.fill()
			ctx.closePath()
		}
	}
	
	const canvasRef = useRef(null)
	useEffect(() => {
		console.log('x')
    if(naviContext.isHamburgerActive) {
			const canvas = canvasRef.current
			const context = canvas.getContext('2d')
			let frameCount = 0
			let animationFrameId
			
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