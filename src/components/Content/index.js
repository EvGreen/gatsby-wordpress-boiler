import React from 'react'
import './style.scss'

import ACFHero from "./ACF/Hero"
import ACFContent from "./ACF/Content"

function Content(props) {
	
	const Sections = props.wordpressPage.acf.sections_page.map((section, i) => {
		
		if(section.__typename === 'WordPressAcf_hero') {

			return (
				<div key="hero-main">
					<ACFHero { ...section } />
					{/* Point of reference for past hero observer threashold, so we can calculate if the user is past hero or not */}
					<div id="header-fold-breakpoint"></div>
				</div>
			)
		}

		if(section.__typename === 'WordPressAcf_content') {
			
			return (
				<ACFContent key={section.id} { ...section } />
			)
		}

		return null
	})

  return (
		<>
			{Sections}
		</>
  )
}

export default Content