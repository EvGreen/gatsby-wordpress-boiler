import React from "react"
import "./src/html.scss"
import Layout from "./src/components/layout"

import { NaviContextProvider } from './src/context/NaviContext'

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

  // Run Splitting, awaits data-splitting="" chars/words/lines
  const res = Splitting()
  // res.forEach((splitResult) => {

  //   const wrappedLines = splitResult.lines.map((line) => {
  //     // Line is array of word objects, getting first word
  //     const firstWordInLine = line[0]
  //     // Allows for reading it's parent
  //     const parentElement = firstWordInLine.parentNode
  //     // Create line wrapper element
  //     let newLine = document.createElement('span')
  //     // Give it line class
  //     newLine.className = 'line'
  //     // Put the words in the line element
  //     newLine.innerHTML = `${line.map((word) => `${word.outerHTML}<span class="whitespace"> </span>`).join('')}`
  //     // Clear old words
  //     line.map((word) => {
  //       parentElement.removeChild(word)
  //     })
  //     // Append new lines
  //     parentElement.appendChild(newLine)
  //   })

  // })
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