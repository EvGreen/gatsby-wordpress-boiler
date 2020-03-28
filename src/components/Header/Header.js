import React from "react"
import "./Header.scss"

import { Link } from "gatsby"


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

	</header>
  )
}

export default Header