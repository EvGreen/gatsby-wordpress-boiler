import React from 'react'
import './style.scss'
import Img from 'gatsby-image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

import CF7Basic from '../Form/CF7/Basic'

function Footer(props) {
	const image = props.image

  return (
		<footer id='master-footer' className='c0'>

			{ image ?
				<Img fluid={image}
					imgStyle={{objectFit: 'cover'}}
					objectPosition='50% 50%'
					loading='eager'
					backgroundColor="#ccc"
					fadeIn={true}
				/>
			: null }

			<div className="to-top c0 x0">
				<a href="#top"><FontAwesomeIcon icon={faArrowUp} /></a>
			</div>

			<div className="intro-box fs-85 clead x1">
				<h4>contact</h4>
			</div>

			<div className="master-footer-container">

				<div className='x1 footer-icons'>
					<a href='https://twitter.com/designsentry' className='hint--rounded hint--left' data-hint='@designsentry' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faTwitter} /></a>
					<a href='https://instagram.com/the242' className='hint--rounded hint--left' data-hint='@the242' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faInstagram} /></a>
					<a href='https://github.com/EvGreen?tab=repositories' className='hint--rounded hint--left' data-hint='@EvGreen' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faGithub} /></a>
				</div>

				<div className="g50vw padd2 c4 fs-85 text-left">
					<div className="content-box">
						<h6>what?</h6>
						<p>A crack commando unit from Poland that was sent to prison in 2011 for a crime they did not commit.</p><p>After promptly escaping from a maximum security stocade, they now survive as soldiers of fortune, still on the run from the military police.</p><p>They work for anyone who is in need of help and are innocent, hard-working people trying to make a living.</p>
						<h6>where?</h6>
						<p>al. Księcia Józefa Poniatowskiego 1, 03-901 Warszawa</p>
					</div>
				</div>

				<div id="contact" className="g33vw padd2 c5 fs-85">
					<CF7Basic />
				</div>

				<div className='copy c0'>
					<p>Copyright &copy; 2020. Made with <FontAwesomeIcon icon={faHeart} /> by <span className='hint--rounded hint--top' data-hint='Much love!'>EvG</span>.</p>
				</div>

			</div>

		</footer>
  )
}

export default Footer