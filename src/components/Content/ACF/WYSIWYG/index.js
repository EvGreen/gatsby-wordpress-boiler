import React from 'react'
import './style.scss'

import Intro from '../../../../animations/Intro'
import { useInView } from 'react-intersection-observer'

function ACFWYSIWYG(props) {
	const [io, ioInView] = useInView({ triggerOnce: true })

	// Wysiwyg
	const wysiwyg = props.wysiwyg
	// Chain Animation
	const delay = 150 + props.inheritedDelay

	return wysiwyg ? (
		<div ref={io} className={`attached-to-${props.fieldGroupName}`}>
			<Intro visible={ioInView} in={{ fade: 500 }} delayIn={delay} mounted={true} stay={true} className={``}>
				<div className={`wysiwyg-inject`} dangerouslySetInnerHTML={{__html: wysiwyg}} />
			</Intro>
		</div>
  )
	: false
}

export default ACFWYSIWYG