import React from 'react'
import './style.scss'

import { useInView } from 'react-intersection-observer'

function Content(props) {
  const [ref, refInView, refEntry] = useInView({ triggerOnce: true })

	const page = props.wordpressPage

  return (
		<>
			{ page.content ? 
			<section ref={ref} className='content c0'>

				<div className='content-box animated' style={{opacity: refInView ? 1 : 0, transform: refInView ? "translateY(0px)" : "translateY(10px)"}} dangerouslySetInnerHTML={{__html: page.content}} />

			</section>
			: null }
		</>
  )
}

export default Content