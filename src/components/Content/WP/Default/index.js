import React from 'react'
import './style.scss'

import { useInView } from 'react-intersection-observer'

function Content(props) {
  const [ref, refInView] = useInView({ triggerOnce: true })

	const page = props.wordpressPage

  return (
		<>
			{ page.content ? 
			<section className='content c0'>

				<div ref={ref} className='content-box'>
					<div className='content-holder limit-width animated' style={{opacity: refInView ? 1 : 0}} dangerouslySetInnerHTML={{__html: page.content}} />
				</div>

			</section>
			: null }
		</>
  )
}

export default Content