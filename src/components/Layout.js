import React from "react"
import "./Layout.scss"
import { Helmet } from "react-helmet"

import { ParallaxProvider } from "react-scroll-parallax"

//import animationData from "../DATA/animationData"
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
              href="https://fonts.googleapis.com/css?family=Open+Sans:ital,wght@300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" />
				<link rel="stylesheet"
							href="https://fonts.googleapis.com/css?family=Quicksand:wght@300;400;500;600;700&display=swap" />
				<link rel="stylesheet"
							href="https://fonts.googleapis.com/css?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />
      </Helmet>
			
			<Header />
			
			{/* <AnimatePresence exitBeforeEnter> */}
				<div key={location.pathname} className="main-wrapper">

					{/* <motion.div
						initial={animationData.pageAnimation.initial}
						animate={animationData.pageAnimation.active}
						className="page-animator"
					> */}
							
						<ParallaxProvider>
							{children}
						</ParallaxProvider>

						<Footer />

					{/* </motion.div> */}

					{/* <motion.div
						initial={animationData.fader.initial}
						exit={animationData.fader.exit}
						className="fader"
					>
						<div id="page-loader" className="loader">
							<div className="glitchframe">
								<div className="glitch cmyk-c">
									<div className="circle"></div>
								</div>
								<div className="glitch cmyk-m">
									<div className="circle"></div>
								</div>
								<div className="glitch cmyk-y">
									<div className="circle"></div>
								</div>
							</div>
						</div>
					</motion.div> */}

					{/* <motion.div
						initial={animationData.swiper.initial}
						animate={animationData.swiper.active}
						className="swiper"
					>
						<div id="page-loader" className="loader">
							<div className="glitchframe">
								<div className="glitch cmyk-c">
									<div className="circle"></div>
								</div>
								<div className="glitch cmyk-m">
									<div className="circle"></div>
								</div>
								<div className="glitch cmyk-y">
									<div className="circle"></div>
								</div>
							</div>
						</div>
					</motion.div> */}

				</div>
			{/* </AnimatePresence> */}
  	</>
  )
}

export default Layout
