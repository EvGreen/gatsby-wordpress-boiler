import React from "react"
import "./Content.scss"

function Content(props) {

	const page = props.wordpressPage

  return (
		<section className="content">

			<div dangerouslySetInnerHTML={{__html: page.content}} />

		</section>
  )
}

export default Content