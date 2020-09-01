import React, { useContext } from 'react'
import './style.scss'
import NaviContext from '../../../../context/NaviContext'
import { Link } from 'gatsby'

import NaviItem from '../NaviItem'
//import { Transition, TransitionGroup } from 'react-transition-group'
//import anime from 'animejs'

function NaviPrimary(props) {
	const naviContext = useContext(NaviContext)

	const menuItems = props.wpgraphql.wpNaviPrimary.nodes[0].menuItems.nodes.map(
		(item, i) => {
			const parent = item.parentId
			const children = item.childItems.nodes

			if(!parent) {
				return (
					<NaviItem key={item.id} { ...item } />
				)
			} else {
				return
			}
		}
	)
	
  return (
		<>
			{menuItems}
		</>
  )
}

export default NaviPrimary