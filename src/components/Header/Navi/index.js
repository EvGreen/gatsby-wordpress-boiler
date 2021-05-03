import React from 'react'
import './style.scss'

import NaviPrimary from './Primary'

function Navi(props) {

  return (
		<>
			<NaviPrimary { ...props } />
		</>
  )
}

export default Navi