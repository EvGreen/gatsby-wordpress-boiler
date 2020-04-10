import React from "react"
import "./Layout.scss"
import { Helmet } from "react-helmet"

import { ParallaxProvider } from "react-scroll-parallax"

import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

function Layout({ children, location }) {

  return (
  	<>
			<Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Open+Sans:wght@400;700;0,800;&display=swap" />
				{/* <link rel="stylesheet"
							href="https://fonts.googleapis.com/css?family=Quicksand:wght@400;500;600;700&display=swap" /> */}
				{/* <link rel="stylesheet"
							href="https://fonts.googleapis.com/css?family=Montserrat:wght@400;700;900;&display=swap" /> */}
      </Helmet>

			<Header />
			
				<div key={location.pathname} className="main-wrapper">
							
						<ParallaxProvider>
							{children}
						</ParallaxProvider>

						<Footer />

				</div>
  	</>
  )
}

export default Layout
