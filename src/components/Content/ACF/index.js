import React from 'react'
import './style.scss'
import './child.scss'

import ACFImage from './Image'
import ACFVideo from './Video'
import ACFWYSIWYG from './WYSIWYG'

function ACFBlocks(props) {
	
	// Building Blocks
	const blocks = props.block
	const blockMap = blocks?.map((node,i) => {

		// Main Settings
		const anchor = node.anchor
		const classes = node.classes

		// Returning Block
		return (
			<div key={node.id} id={anchor ? 'block-' + anchor : null}  className={`block block-${node.acf_fc_layout} ${classes ? classes : ''}`}>

				<ACFImage {...node} />

				<ACFVideo {...node} />

				<ACFWYSIWYG {...node} />

			</div>
		)
	})

	// Returning Section
  return blockMap
}

export default ACFBlocks