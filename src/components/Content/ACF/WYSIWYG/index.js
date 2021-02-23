import React from 'react'
import './style.scss'

function ACFWYSIWYG(props) {

	// Wysiwyg
	const wysiwyg = props.wysiwyg

	// Returning Section
  return (
		<>
			{ wysiwyg ?
				<div className={`attached-to-${props.acf_fc_layout}`}>
					<div className={`wysiwyg-inject animated`} dangerouslySetInnerHTML={{__html: wysiwyg}} />
				</div>
			: null }
		</>
  )
}

export default ACFWYSIWYG