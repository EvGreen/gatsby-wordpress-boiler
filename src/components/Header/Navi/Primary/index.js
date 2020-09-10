import React, { useContext } from 'react'
import './style.scss'
import NaviContext from '../../../../context/NaviContext'

import NaviItem from '../NaviItem'
//import { Transition, TransitionGroup } from 'react-transition-group'
//import anime from 'animejs'

function NaviPrimary(props) {
	const naviContext = useContext(NaviContext)

	const menuNodes = props.wpgraphql.wpNaviPrimary.nodes[0].menuItems.nodes
	let usedNodes = [
		[]
	]

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
		const id = item.id
		const label = item.label
		const order = item.order

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
		// No Parents
		} else {
			usedNodes[0].push(item)
		}

		return item
	}

	const menuNodesMap = menuNodes.map(organizeMenuNodes)

	//console.log('usedNodes', menuNodesMap, usedNodes.length, usedNodes)

	// const menuClearedItems = menuNodes.map(
	// 	(item) => {
	// 		if(!usedNodes.includes(item.id)) {
	// 			usedNodes.push(item.id)
	// 			const children = item.childItems.nodes
	// 			if(children.length > 0) {

	// 				let submenuItems = children.map(
	// 					(item) => {
	// 						if(!usedNodes.includes(item.id)) {
	// 							usedNodes.push(item.id)
	// 							return item
	// 						}
	// 					}
	// 				)
	// 			}
	// 			return item
	// 		}
	// 	}
	// )

	function menuServe(naviNodes, key) {
		let result = []

		result.push(naviNodes[key].map((item) => {
			return [(
				<NaviItem key={item.id} { ...item }>
					{item.itHasChildren ? menuServe(naviNodes, item.itHasChildren) : null}
				</NaviItem>
			)]
		}))

		return result 
	}

	const menuItems = usedNodes.map(
		(item) => {
			const parent = item.parentId
			let submenuItems = null
			//console.log('xxx',item)
			//const children = item.childItems.nodes

			// if(children.length > 0) {
			// 	submenuItems = children.map(
			// 		(item) => {

			// 				return (
			// 					<NaviItem key={item.id} { ...item }/>
			// 				)
						
			// 		}
			// 	)
			// }
			return item.map((item) => {
				return (
					<NaviItem key={item.id} { ...item }>
						{submenuItems}
					</NaviItem>
				)
			})
		}
	)

	
  return (
		<>
			{menuServe(usedNodes, 0)}
		</>
  )
}

export default NaviPrimary