import React, {useContext} from 'react'
import './style.scss'
import NaviContext from '../../../context/NaviContext'

function Logo(props) {
	const naviContext = useContext(NaviContext)

  return (
		<div id="master-logo" className='logo x1 c5'>
			.logo
		</div>
  )
}

export default Logo