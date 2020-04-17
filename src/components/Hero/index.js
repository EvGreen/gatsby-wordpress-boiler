import React, { useEffect, useRef } from 'react'
//import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import anime from 'animejs'

import Starfall from '../Starfall'

//import PropTypes from 'prop-types'
import './style.scss'

const fadeInCreepDown = item =>
	anime({
		targets: item,
		opacity: [0,1],
		translateY: [30,0],
		duration: 1000,
		easing: 'easeInOutSine'
	})

const fadeInCreepUp = item =>
	anime({
		targets: item,
		opacity: [0,1],
		translateY: [20,0],
		duration: 1000,
		easing: 'easeInOutSine'
	})

	const fadeIn = item =>
		anime({
			targets: item,
			opacity: [0,1],
			duration: 800,
			easing: 'easeInOutSine'
	})

	const fadeOut = item =>
		anime({
			targets: item,
			opacity: [1,0],
			duration: 1000,
			delay: 400,
			easing: 'easeInSine'
		})


function Hero(props) {
	const heroContent = useRef(false)
	console.log(props.wordpressPage)

	useEffect(() => {
		fadeInCreepDown('.hero-content')
	},[])

	function fireOnLoad() {
		fadeInCreepUp('.gatsby-image-wrapper')
		fadeIn('.glare')
		fadeOut('.fatbar')
	}

	// const data = useStaticQuery(graphql`
  //   query {
  //     file(relativePath: { eq: 'placeholders/storm.jpg' }) {
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
		<section className='hero' style={{backgroundColor: '#000'}}>
			
			{ props.wordpressPage.acf.hero_page[0].img ?
				<Img fluid={props.wordpressPage.acf.hero_page[0].img.localFile.childImageSharp.fluid}
					imgStyle={{objectFit: 'cover'}}
					objectPosition='50% 50%'
					loading='eager'
					fadeIn={false}
					backgroundColor='#000000'
					style={{opacity: 0, backgroundColor: '#000'}}
					onLoad={fireOnLoad}
				/>
			: null }

			<div className='bg-overlay'>
				<div className='fatbar'></div>
				<div className='bg-overlay-x'></div>
				<div className='glare' style={{opacity: 0}}></div>
			</div>

			<div ref={heroContent} className='hero-content cc5' style={{opacity: 0}}>
				<div className='hero-content-box' dangerouslySetInnerHTML={{__html: props.wordpressPage.acf.hero_page ? props.wordpressPage.acf.hero_page[0].content : null}} />
				<div className='starfall-space'>
					<Starfall />
				</div>
			</div>

		</section>
  )
}

export default Hero