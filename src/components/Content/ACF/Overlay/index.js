import React from 'react'
import './style.scss'

function ACFOverlay(props) {

	// Overlay
	const overlay = props.bgOverlay

	// Returning Section
  return (
		<>
			{ overlay ?
					<div className='bg-overlay' style={{opacity: overlay}} />
			: null }
		</>
  )
}

export default ACFOverlay