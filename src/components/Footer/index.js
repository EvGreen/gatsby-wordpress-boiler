import React from 'react'
import './style.scss'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

import CF7Basic from '../Form/CF7/Basic'

function Footer(props) {

	// Get footer Image from WP Site Settings
	const data = useStaticQuery(graphql`
		query {
    	...siteGeneralSettings
  	}
	`)
	const image = data?.siteGeneralSettings?.siteGeneralSettings?.acfOptions?.footerImage?.localFile?.childImageSharp.gatsbyImageData

  return (
		<footer className='master-footer c0 grid-12'>

			<div className="intro-box fs-85 clead x1">
				<h4>contact</h4>
			</div>

			{ image ?
				<GatsbyImage image={image} alt="" />
			: null }

			<div className="to-top c0 x0">
				<a href="#top" aria-label="Take me to top"><FontAwesomeIcon icon={faArrowUp} /></a>
			</div>

			<div className='footer-icons x1'>
				<a href='https://twitter.com/designsentry' className='hint--rounded hint--left' aria-label="Twitter Link" data-hint='@designsentry' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faTwitter} /></a>
				<a href='https://instagram.com/the242' className='hint--rounded hint--left' aria-label="Instagram Link" data-hint='@the242' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faInstagram} /></a>
				<a href='https://github.com/EvGreen?tab=repositories' className='hint--rounded hint--left' aria-label="GitHub Link" data-hint='@EvGreen' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faGithub} /></a>
			</div>

			<div className="details padd-2 c4 fs-85 text-left">
				<div className="content-box">
					<h6>what?</h6>
					<p>A crack commando unit from Poland that was sent to prison in 2011 for a crime they did not commit.</p><p>After promptly escaping from a maximum security stocade, they now survive as soldiers of fortune, still on the run from the military police.</p><p>They work for anyone who is in need of help and are innocent, hard-working people trying to make a living.</p>
					<h6>where?</h6>
					<p>Infinity at Brickell, 40 SW 13th St, PH 4-5, Miami FL 33130</p>
				</div>
			</div>

			<div id="contact" className="contact padd-2 c5 fs-85">
				<CF7Basic />
			</div>

			<div className='copy c0'>
				<p>Copyright &copy; 2020. Made with <FontAwesomeIcon icon={faHeart} /> by <span className='hint--rounded hint--top' data-hint='Much love!'>EvG</span>.</p>
			</div>

		</footer>
  )
}

export default Footer