import React from "react"
import "./Layout.scss"

import { motion, AnimatePresence } from "framer-motion"
import { ParallaxProvider } from "react-scroll-parallax"

import animationData from "../DATA/animationData"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

const Layout = ({ children, location }) => (
  <>

    <Header />
    
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={location.pathname}
        initial={animationData.pageAnimation.initial}
        animate={animationData.pageAnimation.active}
        exit={animationData.pageAnimation.exit}
        className="page-animator"
      >
        <ParallaxProvider>
          {children}
        </ParallaxProvider>
        <Footer />
      </motion.div>
    </AnimatePresence>

  </>
)

export default Layout
