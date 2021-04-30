import React, { useContext } from 'react'
import './style.scss'
import NaviContext from '../../../../context/NaviContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
//import { Transition, TransitionGroup } from 'react-transition-group'
//import anime from 'animejs'

import { Link } from 'gatsby'

function NaviItem(props) {
	const naviContext = useContext(NaviContext)

	const id = props.id
	const label = props.label
	//const title = props.title
	const description = props.description

	// disabled flag
	let enabled = true
	const classes = props.cssClasses.map((cssClass) => {
		// if one of the classes is disabled, set the flag
		if (cssClass === 'disabled') {
			enabled = false
		}
		// if it has description, add the hint classes
		if (description) {
			return cssClass + ' hint--rounded hint--bottom'
		} else {
			return cssClass
		}
	}).join(' ')

	const target = props.target
	const path = props.url
	const parentId = props.parentId
	const internal = props.connectedNode
	const dropDownClickHandle = props.dropDownClickHandle

	if ( internal ) {
		return (
			<div
				key={id}
				className={`nav-item ${classes} ${parentId ? 'sub' : ''}`}
				data-hint={description}
			>
				{enabled ?
					<Link
						to={path.replace(process.env.GATSBY_WP_URL, '/')}
						onClick={() => { naviContext.setHamburgerActive(false); dropDownClickHandle(); }}
						onKeyDown={() => { naviContext.setHamburgerActive(false)}}
					>
						{label}
						{props.itHasChildren ? <FontAwesomeIcon icon={faAngleDown} className="caret" /> : null}
					</Link>
				:
					<div className="disabled">
						{label}
						{props.itHasChildren ? <FontAwesomeIcon icon={faAngleDown} className="caret" /> : null}
					</div>
				}
				{props.children}
			</div>
		)
	}

	return (
		<div
			key={id}
			className={`nav-item ${classes} ${parentId ? 'sub' : ''}`}
			data-hint={description}
		>
			{enabled ?
				<a 
					href={path}
					target={target}
					rel={target === '_blank' ? 'noopener noreferrer' : null}
					onClick={dropDownClickHandle}
				>
					{label}
					{props.itHasChildren ? <FontAwesomeIcon icon={faAngleDown} className="caret" /> : null}
				</a>
			:
				<div className="disabled">
					{label}
					{props.itHasChildren ? <FontAwesomeIcon icon={faAngleDown} className="caret" /> : null}
				</div>
			}
			{props.children}
		</div>
	)
}

export default NaviItem