import React from 'react'
import './style.scss'

import ACFContent from "./ACF/Content"

function Content(props) {
	
	const Sections = props.wordpressPage.acf.sections_page.map((section, i) => {

		if(!section.__typename || section.__typename === 'WordPressAcf_content') {
			
			return (
				<React.Fragment key={section.id}>
				<ACFContent { ...section } />
				{ i === 0 ?
					<>
						{/* Point of reference for past hero observer threashold, so we can calculate if the user is past hero or not */}
						<div id="header-fold-breakpoint"></div>
					</>
				: null }
				</React.Fragment>
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