import React from "react"
import "./Header.scss"

import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Header(props) {

  return (
	<header id="master-header">
		<div className="logo">
			.logo
		</div>
		<nav className="navi">
			<div className="navi-items">
				<Link to="/">
					home
				</Link>
				<Link to="/sample-page">
					sample
				</Link>
				<Link to="/test">
					test
				</Link>
			</div>
			<div className="social-icons">
				<div className="social-icon">
					<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faFacebookSquare} />
					</a>
				</div>
				<div className="social-icon">
					<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faTwitter} />
					</a>
				</div>
				<div className="social-icon">
					<a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faYoutube} />
					</a>
				</div>
				<div className="social-icon">
					<a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faInstagram} />
					</a>
				</div>
			</div>
		</nav>

	</header>
  )
}

export default Header