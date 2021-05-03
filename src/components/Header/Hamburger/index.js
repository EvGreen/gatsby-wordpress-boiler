import React, {useContext, useEffect, useState} from 'react'
import './style.scss'
import NaviContext from '../../../context/NaviContext'
import { Transition } from 'react-transition-group'
import anime from 'animejs'

import Starfall from '../../Starfall'
import Logo from '../Logo'

function Hamburger({baseDuration}) {
	const naviContext = useContext(NaviContext)

	// Keeping track of Header Logo Width
	const [logoWidthOffset, setLogoWidthOffset] = useState(0)
	useEffect(() => {
		const logo = document.getElementsByClassName('master-logo')
		const hamburger = document.getElementsByClassName('master-hamburger-container')
		const offset = logo[0].clientWidth - hamburger[0].clientWidth
		setLogoWidthOffset(offset)
	}, [])

	// Animating fade in/out
	const fadeInLogo = element => {
		const hamburger = document.getElementsByClassName('master-hamburger-container')
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
			.add({
				targets: hamburger,
				opacity: 0,
				duration: baseDuration / 2,
				easing: 'easeInOutQuad'
			}, `-=${baseDuration * 1.5}`)
	}
	const fadeOutLogo = element => {
		const hamburger = document.getElementsByClassName('master-hamburger-container')
		anime
			.timeline()
			.add({
				targets: element,
				opacity: [1, 0],
				duration: baseDuration * .75,
				easing: 'easeInOutSine'
			})
			.add({
				targets: element.parentElement.parentElement,
				translateX: [0, -logoWidthOffset],
				duration: baseDuration * .75,
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
		<div
			className="c5 master-hamburger"
			onClick={
				() => {
					naviContext.activeToggle(true)
					naviContext.hamburgerActiveToggle(true)
				}
			}
			onKeyDown={
				() => {
					naviContext.activeToggle(true)
					naviContext.hamburgerActiveToggle(true)
				}
			}
			role="button"
			tabIndex={0}
		>
			<div className="cover"></div>
			<Transition
				in={naviContext.beforeHeaderBreakpoint ? true :	false}
				timeout={baseDuration}
				onEntering={fadeInLogo}
				onExiting={fadeOutLogo}
			>
				<Logo />
			</Transition>
			<div className="master-hamburger-positioner">
				<div style={{opacity: 0}} className="master-hamburger-container">
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