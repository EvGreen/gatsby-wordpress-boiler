import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import PropTypes from "prop-types"
import "./Hero.scss"
import Img from "gatsby-image"

function Hero(props) {
	const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "placeholders/storm.jpg" }) {
        childImageSharp {
					fluid (
						maxWidth: 2560,
						quality: 70,
					) {
						...GatsbyImageSharpFluid_tracedSVG
					}
        }
      }
    }
  `)

	return (
		<section className="hero">

			{ props.wordpressPage.acf.hero_page ?
				<Img fluid={props.wordpressPage.acf.hero_page[0].img.localFile.childImageSharp.fluid}
					objectFit="cover"
					objectPosition="50% 50%"
					fadeIn={true}
					durationFadeIn={2000}
				/>
			: null }

			<div className="bg-overlay">
				<div className="bg-overlay-gradient"></div>
			</div>

			<div className="hero-content" dangerouslySetInnerHTML={{__html: props.wordpressPage.acf.hero_page ? props.wordpressPage.acf.hero_page[0].content : null}} />

		</section>
  )
}

export default Hero