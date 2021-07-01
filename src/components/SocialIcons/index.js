import React from 'react'
import './style.scss'
//import NaviContext from '../../context/NaviContext'
import { useStaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faGithub, faFacebookSquare, faYoutube } from '@fortawesome/free-brands-svg-icons'

function SocialIcons(props) {
	//const naviContext = useContext(NaviContext)

	// Get footer Image from WP Site Settings
	const data = useStaticQuery(graphql`
		query {
    	...acfOptions
  	}
	`)

	const icons = data?.wp?.options?.acfOptions?.socialIcons?.map((node,i) => {

		let icon = node.icon === 'facebook' ? <FontAwesomeIcon icon={faFacebookSquare} /> :
						   node.icon === 'twitter' ? <FontAwesomeIcon icon={faTwitter} /> :
						   node.icon === 'youtube' ? <FontAwesomeIcon icon={faYoutube} /> :
						   node.icon === 'instagram' ? <FontAwesomeIcon icon={faInstagram} /> :
						   node.icon === 'git' ? <FontAwesomeIcon icon={faGithub} /> :
							 null
		return (
			<div key={i} className={`social-icon hint--rounded ${props.hint ? 'hint--' + props.hint : 'hint--bottom'}`} data-hint={node.hint}>
				<a href={node.link} target='_blank' rel='noopener noreferrer'>
					{icon}
				</a>
			</div>
		)
	})

	
  return (
		<div className={`social-icons ${props.classes}`}>
			{icons}
		</div>
  )
}

export default SocialIcons