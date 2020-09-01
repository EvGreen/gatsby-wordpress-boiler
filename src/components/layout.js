import React from 'react'
import { graphql } from "gatsby"
import '../EVG/css/_core.scss';

import Header from './Header'

import { Helmet } from 'react-helmet'
import { ParallaxProvider } from 'react-scroll-parallax'

if (typeof window !== 'undefined') {
	// eslint-disable-next-line global-require
	require('smooth-scroll')('a[href*="#"]', {
		speed: 800,
		speedAsDuration: true,
		easing: 'easeInOutCubic',
		offset: window.innerHeight * 0.5
	})
}

function Layout(props) {
	console.log('Layout:', props)
  return (
  	<>

			<Helmet>
				<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>

			<Header {...props.data} />
			
			<ParallaxProvider>
				{props.children}
			</ParallaxProvider>

  	</>
  )
}

export default Layout