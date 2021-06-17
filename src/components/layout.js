import React, {useContext} from 'react'
import '../EVG/css/_core.scss';

import Header from './Header'

import { Helmet } from 'react-helmet'
import { ParallaxProvider } from 'react-scroll-parallax'

import FsLightbox from 'fslightbox-react'
import FSLightBoxContext from '../context/FSLightBoxContext'

if (typeof window !== 'undefined') {

	// eslint-disable-next-line global-require
	require('smooth-scroll')('a[href*="#"]:not([href="#"])', {
		speed: 800,
		speedAsDuration: true,
		easing: 'easeInOutCubic',
		offset: window.innerHeight * 0.5
	})
}

function Layout(props) {
	const lightBoxContext = useContext(FSLightBoxContext)

  return (
  	<>

			<Helmet>
				<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
			</Helmet>

			<Header {...props.data} />
			
			<ParallaxProvider>
				{props.children}
			</ParallaxProvider>

			{lightBoxContext.sources ?
				<FsLightbox
					toggler={lightBoxContext.toggler}
					sources={lightBoxContext.sources}
					slide={lightBoxContext.slide}
					key={lightBoxContext.sources[0]}
					type={lightBoxContext.type}
				/>
			: null }

  	</>
  )
}

export default Layout