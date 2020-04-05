import React from "react"
import "./Layout.scss"

import { motion, AnimatePresence } from "framer-motion"
import { ParallaxProvider } from "react-scroll-parallax"

import animationData from "../DATA/animationData"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

function Layout({ children, location }) {

  return (
  	<>
			<Header />
			
			<AnimatePresence exitBeforeEnter>
				<div key={location.pathname} className="main-wrapper">

					<motion.div
							initial={animationData.pageAnimation.initial}
							animate={animationData.pageAnimation.active}
							className="page-animator"
						>
							
						<ParallaxProvider>
							{children}
						</ParallaxProvider>

						<Footer />

					</motion.div>

					<motion.div
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
					</motion.div>

					<motion.div
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
					</motion.div>

				</div>
			</AnimatePresence>
  	</>
  )
}

export default Layout
