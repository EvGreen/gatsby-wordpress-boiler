import React, { useContext, useState } from 'react'
import './style.scss'
import NaviContext from '../../../../context/NaviContext'

import NaviItem from '../NaviItem'
//import { Transition, TransitionGroup } from 'react-transition-group'
//import anime from 'animejs'

function NaviPrimary(props) {
	const naviContext = useContext(NaviContext)
	const [dropDown, setDropDown] = useState([])

	// Menu feed
	const menuNodes = props.wpgraphql.wpNaviPrimary.nodes[0].menuItems.nodes
	// Re-organized menu feed
	let usedNodes = [
		[]
	]

	function executeDropDown(e,lvl,id) {
		e.preventDefault()
		// Copy parents
		let newArr = [...dropDown]
		// Set currently open
		newArr[lvl] = id
		// Cut the already open subitems, if we're rolling back
		newArr.length = lvl + 1
		// Put into state
		setDropDown(newArr)
	}

	function executeBlur(e) {
		if ( !e.currentTarget.contains( e.relatedTarget ) ) {
			setDropDown([])
    }
	}

	// Mark navi items that have children
	function markParent(id, array) {
		for (var key in array) {
			if(array.hasOwnProperty(key)) {
				array[key].map((item) => {
					if(item.id === id) {
						return item['itHasChildren'] = id
					}
				})
			}
		}
	}

	// Organize all menu items into arrays of parents
	function organizeMenuNodes(item) {
		const parent = item.parentId

		if(parent) {
			// Mark navi item that have children
			markParent(parent, usedNodes)
			// Has parent that already has its array, add to it
			if(usedNodes[parent]) {
				usedNodes[parent].push(item)
			// Has parent that doesn't have its array, create array for said parent, put it there
			} else {
				usedNodes[parent] = [item]
			}
		// No parents (First level)
		} else {
			usedNodes[0].push(item)
		}

		return item
	}

	const menuNodesMap = menuNodes.map(organizeMenuNodes)

	function menuServe(naviNodes, key, lvl) {
		let result = []
		lvl++
		
		result.push(naviNodes[key].map((item) => {
			return [(
				<NaviItem
					key={item.id}
					{ ...item }
					dropDownClickHandle={item.itHasChildren ? (e) => executeDropDown(e,lvl,item.id) : () => setDropDown([])}
				>
					{item.itHasChildren && dropDown[lvl] === item.id ?
						<div className={`sub-nav-items level-${lvl}`}>
							{menuServe(naviNodes, item.itHasChildren, lvl)}
						</div>
					: null}
				</NaviItem>
			)]
		}))

		return result
	}

  return (
		<nav className='navi navi-primary'>
			<div
				className='navi-items'
				onBlur={(e) => executeBlur(e)}
			>
				{menuServe(usedNodes, 0, 0)}
			</div>
		</nav>
  )
}

export default NaviPrimary