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
		const offset = logo.clientWidth - hamburger.clientWidth
		setLogoWidthOffset(offset)
	}, [])

	let animateThis = anime.timeline()

	// Animations
	const baseDuration = 300
	// Animating fade in/out
	const fadeInLogo = element => {
		const hamburger = document.getElementById('master-hamburger-container')
		animateThis.add({
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
			.add({
				targets: hamburger,
				opacity: 0,
				duration: baseDuration / 2,
				easing: 'easeInOutQuad'
			}, `-=${baseDuration * 1.5}`)
	}
	const fadeOutLogo = element => {
		const hamburger = document.getElementById('master-hamburger-container')
		animateThis.add({
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
			.add({
				targets: hamburger,
				opacity: 1,
				translateY: [-10, 0],
				delay: 300,
				duration: baseDuration,
				easing: 'easeInOutQuad'
			}, `-=${baseDuration}`)
	}
	
  return (
		<div id="master-hamburger" className="c5" onClick={() => { naviContext.activeToggle(true); naviContext.hamburgerActiveToggle(true)}} onKeyDown={() => { naviContext.activeToggle(true); naviContext.hamburgerActiveToggle(true)}} role="button" tabIndex={0}>
			<Transition
				in={naviContext.beforeHeaderBreakpoint ? true :	false}
				timeout={baseDuration}
				onEntering={fadeInLogo}
				onExiting={fadeOutLogo}
			>
				<Logo />
			</Transition>
				<div id="master-hamburger-positioner">
					<div style={{opacity: 0}} id="master-hamburger-container">
						<div className={`hamburger-container hamburger hamburger--close1 ${naviContext.isHamburgerActive ? 'open' : null }`}>
							<div className="hamburger__icon">
								<div className="hamburger__line hamburger__line--1"></div>
								<div className="hamburger__line hamburger__line--2"></div>
								<div className="hamburger__line hamburger__line--3"></div>
							</div>
							
							{ naviContext.isHamburgerActive ?
							<div className="starfall-wrap">
								<Starfall />
							</div>
							: null }
						</div>
					</div>
				</div>
		</div>
  )
}

export default Hamburger