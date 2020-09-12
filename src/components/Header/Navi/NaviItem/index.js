import React, { useContext } from 'react'
import './style.scss'
import NaviContext from '../../../../context/NaviContext'
//import { Transition, TransitionGroup } from 'react-transition-group'
//import anime from 'animejs'

import { Link } from 'gatsby'

function NaviItem(props) {
	const naviContext = useContext(NaviContext)

	const id = props.id
	const label = props.label
	const title = props.title
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
	const path = props.path
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
						to={path}
						onClick={() => { naviContext.setHamburgerActive(false)}}
						onKeyDown={() => { naviContext.setHamburgerActive(false)}}
						onClick={dropDownClickHandle}
					>
						{label}
					</Link>
				:
					<div className="disabled">
						{label}
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
				</a>
			:
				<div className="disabled">
					{label}
				</div>
			}
			{props.children}
		</div>
	)
}

export default NaviItem