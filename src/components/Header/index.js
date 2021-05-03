import React, {useContext} from 'react'
import './style.scss'
import NaviContext from '../../context/NaviContext'
import { Transition } from 'react-transition-group'
import anime from 'animejs'

import Hamburger from './Hamburger'
import NaviPrimary from './Navi/Primary'
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

	// Fire up expanded navi on hamburger activation alone
	const naviExpanded = naviContext.isHamburgerActive

  return (
		<header className={'x0 t master-header'}>
			<Hamburger baseDuration={baseDuration} />

			{/* {naviContext.beforeHeaderBreakpoint ? 'true' :	
			naviContext.scrollingDirectionIsDown ? 'false' : 'true'} */}
			{/* {naviContext.windowSize?.mobile} */}
			<Transition
				in={naviExpanded}
				timeout={baseDuration}
				appear={true}
				onEntering={fadeInLogo}
				onExiting={fadeOutLogo}
				mountOnEnter
				unmountOnExit
			>
				<div className={`master-navi x0`}>
					<NaviPrimary { ...props } baseDuration={baseDuration} />
					<SocialIcons />
				</div>
			</Transition>
		</header>
  )
}

export default Header