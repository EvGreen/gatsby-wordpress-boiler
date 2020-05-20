import React, {useContext, useEffect} from 'react'
import './style.scss'
import NaviContext from '../../../context/NaviContext'

import Starfall from '../../Starfall'
import Logo from '../Logo'

function Hamburger(props) {
	const naviContext = useContext(NaviContext)
	
  return (			
		<div id="master-hamburger" className="c5" onClick={() => naviContext.activeToggle(true)}>
			{ !naviContext.isActive ?
				<Logo />
			: null }
			{naviContext.scrollingDirectionUp ? 'up' : 'down'}
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