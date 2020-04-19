import React from 'react'
import '../EVG/css/_core.scss';

import { Helmet } from 'react-helmet'
import { ParallaxProvider } from 'react-scroll-parallax'

function Layout({ children, location }) {
  return (
  	<div className='layout-framed'>

			<Helmet>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
        />
				<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
				<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" /> 
      </Helmet>
			
			<ParallaxProvider>
				{children}
			</ParallaxProvider>

  	</div>
  )
}

export default Layout
