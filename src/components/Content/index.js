import React from 'react'
import './style.scss'

function Content(props) {

	const page = props.wordpressPage

  return (
		<>
		{ page.content ? 
		<section className='content'>

			<div className='content-box' dangerouslySetInnerHTML={{__html: page.content}} />

		</section>
		: null }
		</>
  )
}

export default Content