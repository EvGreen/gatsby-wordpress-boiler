import React, { useEffect } from "react"
//import { useStaticQuery, graphql } from "gatsby"
import anime from "animejs"

//import PropTypes from "prop-types"
import "./Hero.scss"
import Img from "gatsby-image"

//import animationData from "../../DATA/animationData"

	



function Hero(props) {
	 
	useEffect(() => {
    anime({
			targets: '.gatsby-image-wrapper',
			opacity: [0,1],
			translateY: [20,0],
			duration: 1000,
			easing: 'easeInOutSine'
		})
    anime({
			targets: '.fatbar',
			opacity: [1,0],
			duration: 1800,
			easing: 'easeInSine'
		})
    anime({
			targets: '.hero-content',
			opacity: [0,1],
			duration: 500,
			easing: 'easeInOutSine'
		})
	},[])

	// const data = useStaticQuery(graphql`
  //   query {
  //     file(relativePath: { eq: "placeholders/storm.jpg" }) {
  //       childImageSharp {
	// 				fluid (
	// 					maxWidth: 2560,
	// 					quality: 70,
	// 				) {
	// 					...GatsbyImageSharpFluid_tracedSVG
	// 				}
  //       }
  //     }
  //   }
	// `)

	return (
		<section className="hero" style={{backgroundColor: "#000"}}>
			
			{ props.wordpressPage.acf.hero_page ?
				<Img fluid={props.wordpressPage.acf.hero_page[0].img.localFile.childImageSharp.fluid}
					objectFit="cover"
					objectPosition="50% 50%"
					loading="eager"
					fadeIn={false}
					backgroundColor="#000000"
					style={{opacity: 0, backgroundColor: "#000"}}
				/>
			: null }

			<div className="bg-overlay">
				<div className="fatbar"></div>
				<div className="bg-overlay-gradient"></div>
			</div>

			<div className="hero-content" style={{opacity: 0}} dangerouslySetInnerHTML={{__html: props.wordpressPage.acf.hero_page ? props.wordpressPage.acf.hero_page[0].content : null}} />

		</section>
  )
}

export default Hero