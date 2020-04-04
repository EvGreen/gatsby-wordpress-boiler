import React from "react"
import "./Header.scss"

import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Header(props) {

  return (
	<header id="master-header">

		<h4>Header is fixed</h4>
		<Link to="/">
			home
		</Link>, 
		<Link to="/sample-page">
			sample
		</Link>, 
		<Link to="/test">
			test
		</Link>
		<FontAwesomeIcon icon={faFacebookSquare} />
		<FontAwesomeIcon icon={faTwitter} />
		<FontAwesomeIcon icon={faYoutube} />
		<FontAwesomeIcon icon={faInstagram} />

	</header>
  )
}

export default Header