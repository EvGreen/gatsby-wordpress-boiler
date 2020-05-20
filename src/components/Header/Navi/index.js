import React, {useContext} from 'react'
import './style.scss'
import NaviContext from '../../../context/NaviContext'

import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'

function Navi(props) {
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
			<nav className='navi c0'>
				<div className='navi-items'>
					{menuItems}
				</div>
			</nav>
		</>
  )
}

export default Navi