import React from "react"
import "./Footer.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function Footer(props) {

  return (
		<footer id="master-footer" className="c5">

			<div className="copy">
				<p>Copyright &copy; 2020. Made with <FontAwesomeIcon icon={faHeart} /> by <span className="hint--rounded hint--top" data-hint="Much love!">EvG.</span></p>
			</div>

	</footer>
  )
}

export default Footer