import React from 'react'
import './style.scss'

import ACFBlocks from "./ACF"

function Content(props) {
	
	// Map through acf flexible content sections
	const sectionsMap = props.wpPage?.pageBuilder?.sections.map((node, i) => {

		// Spit it out only if typename is not registered (only one in graphql), or when it's specifically content type (default in our setup)
		if(!node.__typename || node.__typename === 'WordPressAcf_content') {

			// Main Settings
			const anchor = node.anchor
			const classes = node.classes
			
			return (
				<section key={i} id={anchor ? 'section-' + anchor : null} className={`content ${classes ? classes : ''}`}>
					
					{anchor ?
						<div id={anchor} className="anchor"></div>
					: null}

					<ACFBlocks { ...node } />

					{ i === 0 ?
						<>
							{/* Point of reference for past hero observer threashold, so we can calculate if the user is past hero or not */}
							<div id="header-fold-breakpoint"></div>
						</>
					: null }

				</section>
			)
		}

		return null

	})

  return sectionsMap
}

export default Content