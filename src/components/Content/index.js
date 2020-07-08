import React, {useState} from 'react'
import './style.scss'

import Img from 'gatsby-image'
import Typewriter from "typewriter-effect"
import Hero from "../Hero"

import ACFWithImage from "./ACF/WithImage"

function Content(props) {
	
	const Sections = props.wordpressPage.acf.sections_page.map((section, i) => {
		
		if(section.__typename === 'WordPressAcf_hero') {
			// const image = section.slides[0].img.localFile.childImageSharp.fluid
			// const content = section.slides[0].wysiwyg

			return (
				<div key="hero-main">
					{/* <Hero size={section.size} slides={section.slides} image={image} content={content} /> */}
					{/* Point of reference for past hero observer threashold, so we can calculate if the user is past hero or not */}
					<div id="header-fold-breakpoint"></div>
				</div>
			)
		}

		if(section.__typename === 'WordPressAcf_content') {
			
			return (
				<ACFWithImage { ...section } />
			)
		}
	})

  return (
		<>
			{Sections}
		</>
  )
}

export default Content