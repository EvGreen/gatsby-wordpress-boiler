import React from "react"
import "./src/html.scss"
import Layout from "./src/components/layout"

import { NaviContextProvider } from "./src/context/NaviContext"
import { ModalContextProvider } from "./src/context/ModalContext"

//import { SplitText, TimelineMax } from "gsap/all"

// Splitting text lines for animation
import Splitting from "splitting"

//const transitionDelay = 200;

// Contexts
// export const wrapPageElement = ({ element }) => (
//   <NaviContextProvider>{element}</NaviContextProvider>
// )

// Layout
export const wrapPageElement = ({ element, props }) => {
  return (
    <NaviContextProvider {...props}><ModalContextProvider {...props}><Layout {...props}>{element}</Layout></ModalContextProvider></NaviContextProvider>
  )
}

// Splitting
export const onRouteUpdate = () => {

  const isInview = document.querySelectorAll('.is-inview')
  const nodes = [...isInview]


  // Elements that are direct children of splittext-lines class
  const lines = document.querySelectorAll('.splittext-lines > h1, .splittext-lines > h2, .splittext-lines > h3, .splittext-lines > h4, .splittext-lines > h5, .splittext-lines > h6')
  
  Splitting({
    target: lines,
    by: 'lines',
    key: null
  });
  
  // // Wrap them once as per normal
  // const linesSplittext = new SplitText(lines, {
  //   type: "lines",
  //   linesClass: "text-line"
  // })
  // let linesToAnimate = linesSplittext.lines

  // // Wrap them again to prep for animation (overflow hidden)
  // const linesSplittextOverflow = new SplitText(lines, {
  //   type: "lines",
  //   linesClass: "muhlines line-++"
  // })

  // Set threshold for
  const config = {
    threshold: 0 // 0% of the element is visible
  }

  // // Start GSAP timeline
  // const tl = new TimelineMax()
  
  // Set up observer
  let observer = new IntersectionObserver(function(entries, self) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('inview')
      } else {
        //entry.target.classList.remove('inview')
      }
    })
  }, config)
  
  // Set up observers on all of the items
  nodes.forEach(box => {
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