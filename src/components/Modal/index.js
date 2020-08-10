import React, {useContext} from 'react'
import './style.scss'

import anime from 'animejs'
import { Transition } from 'react-transition-group'

import ModalContext from '../../context/ModalContext'

function Modal(props) {
	const modalContext = useContext(ModalContext)

	console.log(modalContext)
	
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
	}

  return (
		<>
			<Transition
				in={modalContext.isActive && props.trigger === modalContext.dataAttr ? true : false}
				timeout={baseDuration}
				onEntering={fadeInLogo}
				onExiting={fadeOutLogo}
				mountOnEnter
				unmountOnExit
			>
				<section className='evg-modal' onClick={(e) => { if(e.target !== e.currentTarget) { return } modalContext.setActive(false)}}>

					<div className="box c2">
						<div className="button-positioner">
							<button className="close" onClick={() => modalContext.setActive(false)}></button>
						</div>
						<div className="content padd-3">
							{props.children}
						</div>
					</div>

				</section>
			</Transition>
		</>
  )
}

export default Modal