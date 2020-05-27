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
	const [logoWidth, setLogoWidth] = useState(0)
	useEffect(() => {
		const logo = document.getElementById('master-logo')
		setLogoWidth(logo.offsetWidth)
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
				duration: baseDuration,
				easing: 'easeInOutSine'
			})
			.add({
				targets: element.parentElement.parentElement,
				translateX: [-logoWidth, 0],
				duration: baseDuration,
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
				translateX: [0, -logoWidth],
				duration: baseDuration,
				easing: 'easeInOutSine'
			}, `-=${baseDuration}`)
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
  )
}

export default Hamburger