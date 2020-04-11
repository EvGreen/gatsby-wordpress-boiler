import React from "react"
import "./Header.scss"

import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

function Header(props) {

  return (
	<header id="master-header">
		<div className="logo">
			<Link to="/">
				.logo
			</Link>
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
				{/* <div className="social-icon hint--rounded hint--bottom" data-hint="FaceBook">
					<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faFacebookSquare} />
					</a>
				</div> */}
				<div className="social-icon hint--rounded hint--bottom" data-hint="@designsentry">
					<a href="https://twitter.com/designsentry" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faTwitter} />
					</a>
				</div>
				{/* <div className="social-icon hint--rounded hint--bottom" data-hint="YouTube">
					<a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faYoutube} />
					</a>
				</div> */}
				<div className="social-icon hint--rounded hint--bottom" data-hint="@the242">
					<a href="https://instagram.com/the242" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faInstagram} />
					</a>
				</div>
				<div className="social-icon hint--rounded hint--bottom" data-hint="@EvGreen">
					<a href="https://github.com/EvGreen?tab=repositories" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faGithub} />
					</a>
				</div>
			</div>
		</nav>

	</header>
  )
}

export default Header