import React from 'react'
import { graphql } from "gatsby"
import '../EVG/css/_core.scss';

import Header from './Header'

import { Helmet } from 'react-helmet'
import { ParallaxProvider } from 'react-scroll-parallax'

import CanvasNoise from './Canvas/Noise'


if (typeof window !== 'undefined') {

	// Set up pace js
	window.paceOptions = {
		className: 'dss-loader',
		ajax: false, // ajax monitoring - disabled
		restartOnPushState: false, // no restart on push state
		document: false, // document ready state monitoring - disabled
		eventLag: false, // monitoring of event loop lag, signaling js is being executed - disabled
		elements: {
			selectors: ['.hero', '.main-frontpage'] // looks for existance of this element
		}
	}

	// eslint-disable-next-line global-require
	require('smooth-scroll')('a[href*="#"]:not([href="#"])', {
		speed: 800,
		speedAsDuration: true,
		easing: 'easeInOutCubic',
		offset: window.innerHeight * 0.5
	})
}

function Layout(props) {

  return (
  	<>

		<Helmet>
			<script src="./js/pace/pace.min.js"></script>
			<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
		</Helmet>

		<Header {...props.data} />

		<CanvasNoise />
		
		<ParallaxProvider>
			{props.children}
		</ParallaxProvider>

  	</>
  )
}

export default Layout