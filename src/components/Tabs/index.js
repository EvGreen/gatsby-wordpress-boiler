import React, { useState } from 'react'
import "./style.scss"

function Tabs (props) {
	const [currentTab, setCurrentTab] = useState(0)

	// Tabs
	const TabPack = props.tabs.map((node, i) => {
		return (
			<button className={`button-tab ${i === currentTab ? 'current' : ''}`} key={i} onClick={() => onTabChange(i)} onKeyDown={() => onTabChange(i)} role="button" tabIndex={0}>
				{node.tab}
			</button>
		)
	})

	// Tabs Content
	const TabContentPack = props.tabs.map((node, i) => {
		if (i === currentTab) {
			return (
				<div 
					key={i}
				>
					{node.tabContent}
				</div>
			)
		}
		return false
	})

	// On Parent Tab Change
	function onTabChange(i) {
		setCurrentTab(i)
	}

  return (
		<>
			<div className={`${props.tabWrapClass} tabs`}>
				{TabPack}
			</div>
			<div className={`${props.tabContentWrapClass} tabs-content`}>
				{TabContentPack}
			</div>
		</>
  )
}

export default Tabs