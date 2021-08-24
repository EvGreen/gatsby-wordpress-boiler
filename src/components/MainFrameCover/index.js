import React, {useContext} from 'react'
import './style.scss'
import NaviContext from '../../context/NaviContext'

function MainFrameCover() {
	const naviContext = useContext(NaviContext)

  return (
		<div id="mainframe-cover" className={`layer ${naviContext.isActive ? 'active' : ''}`} onClick={() => { naviContext.setActive(false); naviContext.hamburgerActiveToggle(true)}} onKeyDown={() => { naviContext.activeToggle(true); naviContext.hamburgerActiveToggle(true)}} role="button" tabIndex={0}>
			<div id="mainframe-bg-overlay" className="layer"></div>
		</div>
  )
}

export default MainFrameCover