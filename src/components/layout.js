import React from 'react'
import '../EVG/css/_core.scss';

import { Helmet } from 'react-helmet'
import { ParallaxProvider } from 'react-scroll-parallax'

if (typeof window !== 'undefined') {
	// eslint-disable-next-line global-require
	require('smooth-scroll')('a[href*="#"]', {
		speed: 800,
		speedAsDuration: true,
		easing: 'easeInOutCubic'
	})
}

function Layout({ children }) {
  return (
  	<>

			<Helmet>
				<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
			
			<ParallaxProvider>
				{children}
			</ParallaxProvider>

  	</>
  )
}

export default Layout
