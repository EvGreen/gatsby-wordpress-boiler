import React, {useContext, useEffect} from 'react'
import './style.scss'
import NaviContext from '../../../context/NaviContext'

import Starfall from '../../Starfall'

function Hamburger(props) {
	const naviContext = useContext(NaviContext)
	
  return (			
		<div id="main-hamburger" className={naviContext.isActive ? 'hamburger hamburger--close1 open' : 'hamburger hamburger--close1'} onClick={() => naviContext.activeToggle(true)}>
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
  )
}

export default Hamburger