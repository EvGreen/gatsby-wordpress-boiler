import React, {useContext, useEffect} from 'react'
import './style.scss'
import NaviContext from '../../context/NaviContext'

import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

import { useStaticQuery, graphql } from 'gatsby'

import Hamburger from './Hamburger'

function Header(props) {
	const naviContext = useContext(NaviContext)

	const data = useStaticQuery(graphql`
	{
		wordpressWpApiMenusMenusItems {
			items {
				wordpress_id
				title
				object
				target
				classes
				url
			}
		}
	}
	`)

	const menuItems = data.wordpressWpApiMenusMenusItems.items.map(
		(item, i) => {
			if ( item.object === 'custom' ) {
				return (
					<div
						key={item.wordpress_id}
						className={`nav-item ${item.classes ? item.classes.replace('coming', 'hint--rounded hint--bottom') : ''}`}
						data-hint={item.classes === 'coming' ? 'Coming soon!' : null}
					>
						{ item.classes === 'coming' ? 
							<div className='coming'>{item.title}</div>
							:
							<a href={item.url} target={item.target === '_blank' ? '_blank' : null} rel={item.target === '_blank' ? 'noopener noreferrer' : null}>{item.title}</a>
						}
					</div>
				)
			}
			return (
				<div
					key={item.wordpress_id}
					className={`nav-item ${item.classes ? item.classes.replace('coming', 'hint--rounded hint--bottom') : ''}`}
					data-hint={item.classes === 'coming' ? 'Coming soon!' : null}
				>
					{ item.classes === 'coming' ? 
						<div className='coming'>{item.title}</div>
							:
						<Link to={item.url}>{item.title}</Link>
					}
				</div>
			)
		}
	)
	
  return (
		<>
		<Hamburger />
		<header id='master-header' className={`x0 t ${props.mutate ? 'mutate' : '' }`}>
			<div className='logo x1 c5'>
				<Link to='/'>
					.logo
				</Link>
			</div>
			<nav className='navi c0'>
				<div className='navi-items'>
					{menuItems}
				</div>
				<div className='social-icons'>
					{/* <div className='social-icon hint--rounded hint--bottom' data-hint='FaceBook'>
						<a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
							<FontAwesomeIcon icon={faFacebookSquare} />
						</a>
					</div> */}
					<div className='social-icon hint--rounded hint--bottom' data-hint='@designsentry'>
						<a href='https://twitter.com/designsentry' target='_blank' rel='noopener noreferrer'>
							<FontAwesomeIcon icon={faTwitter} />
						</a>
					</div>
					{/* <div className='social-icon hint--rounded hint--bottom' data-hint='YouTube'>
						<a href='https://youtube.com' target='_blank' rel='noopener noreferrer'>
							<FontAwesomeIcon icon={faYoutube} />
						</a>
					</div> */}
					<div className='social-icon hint--rounded hint--bottom' data-hint='@the242'>
						<a href='https://instagram.com/the242' target='_blank' rel='noopener noreferrer'>
							<FontAwesomeIcon icon={faInstagram} />
						</a>
					</div>
					<div className='social-icon hint--rounded hint--bottom' data-hint='@EvGreen'>
						<a href='https://github.com/EvGreen?tab=repositories' target='_blank' rel='noopener noreferrer'>
							<FontAwesomeIcon icon={faGithub} />
						</a>
					</div>
				</div>
			</nav>

		</header>
		</>
  )
}

export default Header