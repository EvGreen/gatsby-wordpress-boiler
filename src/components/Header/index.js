import React, {useContext} from 'react'
import './style.scss'
import NaviContext from '../../context/NaviContext'

import Hamburger from './Hamburger'
import Navi from './Navi'
import SocialIcons from '../SocialIcons'

function Header(props) {
	const naviContext = useContext(NaviContext)


  return (
		<header id='master-header' className={'x0 t'}>
			<Hamburger />

			{/* {naviContext.beforeHeaderBreakpoint ? 'true' :	
			naviContext.scrollingDirectionIsDown ? 'false' : 'true'} */}
			{ naviContext.isActive ?
				<>
					<Navi />
					<SocialIcons />
				</>
			: null }
		</header>
  )
}

export default Header