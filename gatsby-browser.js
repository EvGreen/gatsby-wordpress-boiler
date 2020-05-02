import React from "react"
import "./src/html.scss"
import Layout from "./src/components/layout"

// Splitting text lines for animation
import Splitting from 'splitting'


//const transitionDelay = 200;

export const wrapPageElement = ({ element, props }) => {

  return (
    <Layout {...props}>{element}</Layout>
  )
}

export const onRouteUpdate = () => {
  // Run Splitting, awaits data-splitting="" chars/words/lines
  Splitting()
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