import React from 'react'
import './style.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faInfoCircle, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

function Footer(props) {

  return (
		<footer id='master-footer' className='c5'>

			<div className='footer-body border'>
				<div className='footer-icons'>
					<a href='tel:+1-555-555-5555' className='hint--rounded hint--top' data-hint='(+1) 555-555-5555'><FontAwesomeIcon icon={faPhoneAlt} /></a>
					<a href='mailto:info@mail.com' className='hint--rounded hint--top' data-hint='info@mail.com'><FontAwesomeIcon icon={faInfoCircle} /></a>
					<a href='mailto:mail@mail.com' className='hint--rounded hint--top' data-hint='mail@mail.com'><FontAwesomeIcon icon={faEnvelope} /></a>
				</div>
				<h6>Get in touch</h6>
			</div>

			<div className='copy'>
				<p>Copyright &copy; 2020. Made with <FontAwesomeIcon icon={faHeart} /> by <span className='hint--rounded hint--top' data-hint='Much love!'>EvG</span>.</p>
			</div>

		</footer>
  )
}

export default Footer