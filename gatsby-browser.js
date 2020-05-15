import React from "react"
import "./src/html.scss"
import Layout from "./src/components/layout"

import { NaviContextProvider } from './src/context/NaviContext'

import { TweenMax, SplitText, TimelineMax } from "gsap/all"

// Splitting text lines for animation
import Splitting from 'splitting'

//const transitionDelay = 200;

// Contexts
export const wrapRootElement = ({ element }) => (
  <NaviContextProvider>{element}</NaviContextProvider>
)

// Layout
export const wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props}>{element}</Layout>
  )
}

// Splitting
export const onRouteUpdate = () => {

  const isInview = document.querySelectorAll('.is-inview')
  const nodes = [...isInview]


  // Elements that are direct children of splittext-lines class
  const lines = document.querySelectorAll('.splittext-lines > *')
  
  // Wrap them once as per normal
  const linesSplittext = new SplitText(lines, {
    type: "lines",
    linesClass: "text-line"
  })
  let linesToAnimate = linesSplittext.lines

  // Wrap them again to prep for animation (overflow hidden)
  const linesSplittextOverflow = new SplitText(lines, {
    type: "lines",
    linesClass: "muhlines line-++"
  })

  // Set threshold for
  const config = {
    threshold: 0 // 0% of the element is visible
  }

  // Start GSAP timeline
  const tl = new TimelineMax()
  
  // Set up observer
  let observer = new IntersectionObserver(function(entries, self) {
    entries.forEach(entry => {
      console.log(entry.isIntersecting)
      if (entry.isIntersecting) {
        // If it's consecutive, cut next animation delay by overlap
        let overlap = '-=0.8'
        
        // If it's a new - don't
        if (!tl.isActive()) {
          overlap = '+=0'
        }
        
        tl.to(entry.target, 1, {x: 0, y: 0, autoAlpha: 1, ease: "power3.inOut"}, overlap)
        self.unobserve(entry.target)
      }
    })
  }, config)
  
  // Set up observers on all of the items
  linesToAnimate.forEach(box => {
    observer.observe(box)
  })

}

export const onInitialClientRender = () => {
  // Remove Loader
  document.getElementById("___loader").style.display = "none"
}

// export const onClientEntry = () => {
//   window.onload = () => {
//     setTimeout(function() {
//       document.getElementById("___loader").style.display = "none"
//     }, 20)
//   }
// }

// export const shouldUpdateScroll = ({
//   routerProps: { location },
//   getSavedScrollPosition
// }) => {
//   if (location.action === "PUSH") {
//     window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
//   } else {
//     const savedPosition = getSavedScrollPosition(location)
//     window.setTimeout(
//       () => window.scrollTo(...(savedPosition || [0, 0])),
//       transitionDelay
//     )
//   }
//   return false;
// }