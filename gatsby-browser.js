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
  const res = Splitting()
  res.forEach((splitResult) => {
    console.log(splitResult)

    const wrappedLines = splitResult.lines.map((line) => {
      // Line is array of word objects, getting first word
      const firstWordInLine = line[0]
      // Allows for reading it's parent
      const parentElement = firstWordInLine.parentNode
      // Create line wrapper element
      let newLine = document.createElement('span')
      // Give it line class
      newLine.className = 'line'
      // Put the words in the line element
      newLine.innerHTML = `${line.map((word) => `${word.outerHTML}<span class="whitespace"> </span>`).join('')}`
      // Clear old words
      line.map((word) => {
        parentElement.removeChild(word)
      })
      // Append new lines
      parentElement.appendChild(newLine)
    })

    //splitResult.el.innerHTML = wrappedLines
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