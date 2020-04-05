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

			<Img fluid={data.file.childImageSharp.fluid}
				objectFit="cover"
				objectPosition="50% 50%"
				fadeIn={false}
			/>

			<div className="bg-overlay">
				<div className="bg-overlay-gradient"></div>
			</div>

			<div className="hero-content">
				<h1>Hero</h1>
			</div>

		</section>
  )
}

export default Hero