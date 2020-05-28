import React, {useContext, useEffect, useState} from 'react'
import './style.scss'
import NaviContext from '../../../context/NaviContext'
import { Transition } from 'react-transition-group'
import anime from 'animejs'

import Starfall from '../../Starfall'
import Logo from '../Logo'

function Hamburger(props) {
	const naviContext = useContext(NaviContext)

	// Keeping track of Header Logo Width
	const [logoWidthOffset, setLogoWidthOffset] = useState(0)
	useEffect(() => {
		const logo = document.getElementById('master-logo')
		const hamburger = document.getElementById('master-hamburger-container')
		const offset = logo.offsetWidth - hamburger.offsetWidth
		setLogoWidthOffset(offset)
	}, [])

	// Animations
	const baseDuration = 300
	// Animating fade in/out
	const fadeInLogo = element => {
		anime
			.timeline()
			.add({
				targets: element,
				opacity: [0, 1],
				delay: baseDuration,
				duration: baseDuration / 2,
				easing: 'easeInOutSine'
			})
			.add({
				targets: element.parentElement.parentElement,
				translateX: [-logoWidthOffset, 0],
				duration: baseDuration / 2,
				easing: 'easeInOutSine'
			}, `-=${baseDuration}`)
	}
	const fadeOutLogo = element => {
		anime
			.timeline()
			.add({
				targets: element,
				opacity: [1, 0],
				duration: baseDuration,
				easing: 'easeInOutSine'
			})
			.add({
				targets: element.parentElement.parentElement,
				translateX: [0, -logoWidthOffset],
				duration: baseDuration,
				easing: 'easeInOutSine'
			}, `-=${baseDuration}`)
	}
	const fadeInHamburger = element => {
		anime({
				targets: element,
				opacity: [0, 1],
				translateY: [-10, 0],
				delay: baseDuration,
				duration: baseDuration,
				easing: 'easeInOutQuad'
			})
	}
	const fadeOutHamburger = element => {
		anime({
				targets: element,
				opacity: [1, 0],
				translateY: [0, -10],
				duration: baseDuration,
				easing: 'easeInOutQuad'
			})
	}
	
  return (
		<div id="master-hamburger" className="c5" onClick={() => naviContext.activeToggle(true)}>
			<Transition
				in={naviContext.beforeHeaderBreakpoint ? true :	false}
				timeout={baseDuration}
				onEntering={fadeInLogo}
				onExiting={fadeOutLogo}
			>
				<Logo />
			</Transition>
				<div id="master-hamburger-positioner">
					<Transition
						in={naviContext.beforeHeaderBreakpoint ? false :	true}
						timeout={baseDuration}
						onEntering={fadeInHamburger}
						onExiting={fadeOutHamburger}
					>
						<div style={{opacity: 0}} id="master-hamburger-container">
							<div className={naviContext.isActive ? 'hamburger-container hamburger hamburger--close1 open' : 'hamburger-container hamburger hamburger--close1'}>
								<div className="hamburger__icon">
									<div className="hamburger__line hamburger__line--1"></div>
									<div className="hamburger__line hamburger__line--2"></div>
									<div className="hamburger__line hamburger__line--3"></div>
								</div>
								
								{ naviContext.isActive ?
								<div className="starfall-wrap">
									<Starfall />
								</div>
								: null }
							</div>
						</div>
					</Transition>
				</div>
		</div>
  )
}

export default Hamburger