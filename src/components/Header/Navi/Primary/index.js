import React, { useContext } from 'react'
import './style.scss'
import NaviContext from '../../../../context/NaviContext'
import _ from 'lodash'

import NaviItem from '../NaviItem'
//import { Transition, TransitionGroup } from 'react-transition-group'
//import anime from 'animejs'

function NaviPrimary(props) {
	const naviContext = useContext(NaviContext)

	const menuNodes = props.wpgraphql.wpNaviPrimary.nodes[0].menuItems.nodes
	let usedNodes = [
		[]
	]

	function organizeMenuNodes(item) {
		const parent = item.parentId
		const id = item.id
		const label = item.label
		const order = item.order

		if(parent) {
			if(usedNodes[parent]) {
				usedNodes[parent].push(item)
			} else {
				usedNodes[parent] = [item]
			}
		} else {
			usedNodes[0].push(item)
		}

		return item
	}

	const menuNodesMap = menuNodes.map(organizeMenuNodes)

	console.log('usedNodes', menuNodesMap, usedNodes.length, usedNodes)

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



	const menuItems = menuNodes.map(
		(item) => {
			const parent = item.parentId
			let submenuItems = null
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
		
			return (
				<NaviItem key={item.id} { ...item }>
					{submenuItems}
				</NaviItem>
			)
		}
	)

	
  return (
		<>
			{menuItems}
		</>
  )
}

export default NaviPrimary