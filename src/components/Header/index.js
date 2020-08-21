import React, {useContext, useEffect} from 'react'
import './style.scss'
import NaviContext from '../../context/NaviContext'
import { Transition } from 'react-transition-group'
import anime from 'animejs'

import Hamburger from './Hamburger'
import Navi from './Navi'
import SocialIcons from '../SocialIcons'

function Header(props) {
	const naviContext = useContext(NaviContext)

	// Animating fade in/out
	const baseDuration = 250
	const fadeInLogo = element => {
		const links = element.querySelectorAll('.nav-item, .social-icons a')
		anime
			.timeline()
			.add({
				targets: element,
				opacity: [0, 1],
				duration: baseDuration,
				easing: 'easeInOutSine',
			})
			.add({
				targets: links,
				opacity: [0, 1],
				translateX: [-22, 0],
				duration: baseDuration,
				easing: 'easeInOutSine',
				delay: anime.stagger(50)
			}, `-=${baseDuration}`)
	}
	const fadeOutLogo = element => {
		anime
			.timeline()
			.add({
				targets: element,
				opacity: [1, 0],
				duration: baseDuration / 2,
				easing: 'linear'
			})
	}

  return (
		<header id='master-header' className={'x0 t'}>
			<Hamburger />

			{/* {naviContext.beforeHeaderBreakpoint ? 'true' :	
			naviContext.scrollingDirectionIsDown ? 'false' : 'true'} */}
			<Transition
				in={naviContext.isActive ? true :	false}
				timeout={baseDuration}
				appear={true}
				onEntering={fadeInLogo}
				onExiting={fadeOutLogo}
				mountOnEnter
				unmountOnExit
			>
				<div className={`navi-animator x0 ${naviContext.isHamburgerActive && !naviContext.beforeHeaderBreakpoint ? null : 't'}`}>
					<Navi />
					<SocialIcons />
				</div>
			</Transition>
		</header>
  )
}

export default Header