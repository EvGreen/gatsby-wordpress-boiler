import React, { useContext } from 'react'
import './style.scss'
import NaviContext from '../../../context/NaviContext'
//import { Transition, TransitionGroup } from 'react-transition-group'
//import anime from 'animejs'

import NaviPrimary from './Primary'

function Navi(props) {
	const naviContext = useContext(NaviContext)

  return (
		<>
			<nav className='navi navi-primary'>
				<div className='navi-items'>
					<NaviPrimary { ...props } />
				</div>
			</nav>
		</>
  )
}

export default Navi