import React from 'react'
import './style.scss'

import CF7Basic from '../../../Form/CF7/Basic'

function ACFCustom(props) {

	console.log(props.anchor)

	if (props.acf_fc_layout === 'custom' && props.anchor === 'custom-x') {
		return (
			<div id="contact" className="contact padd-2 c5 fs-85">
				<CF7Basic />
			</div>
		)
	}

  return false
}

export default ACFCustom