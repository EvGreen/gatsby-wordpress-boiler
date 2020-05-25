import React, {useState, createContext, useEffect, useCallback} from 'react'
import { throttle } from 'lodash'

const NaviContext = createContext(false)

function NaviContextProvider({children, location}) {
  // State for telling if the navi is expanded or not
  const [isActive, setActive] = useState(false)
  // State for scrolling direction
  const [scrollingDirectionIsDown, setScrollingDirectionIsDown] = useState(null)
  // State for detecting if we're in the hero zone
  const [beforeHeaderBreakpoint, setBeforeHeaderBreakpoint] = useState(null)
  

  /* ==========================================================================
    Before Breakpoint Check
  ========================================================================== */

  // This one is for telling if user is scrolling before or after hero, this will come in handy when showing/hiding navi
  useEffect(() => {
    // Div in page.js that marks end of hero element
    const observer_target = document.getElementById('header-fold-breakpoint')

    // Set up what the observer will be doing
    let observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          setBeforeHeaderBreakpoint(true)
        } else {
          setBeforeHeaderBreakpoint(false)
        }
      })
    })
    
    // Initialize observer on the target
    observer.observe(observer_target)

    return () => {
      observer.unobserve(observer_target)
    }

  },[location])


  /* ==========================================================================
    Scrolling up or down
  ========================================================================== */

  // This one monitors if user is scrolling up or down, tried intersect observer before but didn't work out due to its limitations, maybe if the API gets expanded. For now we throttle scroll event so it's not horrible.
  const throttledScrollDirectionDetection = useCallback(throttle(() => checkScrollingDirection(), 500), [
    scrollingDirectionIsDown
  ])

  // Starting with offset at 0, as base for comparison
  let lastYOffset = 0

  // As the name says, setting delta at 30px so user could slowly pan across the site without triggering animations left and right
  function checkScrollingDirection() {
    const currentYOffset = window.pageYOffset
    const delta = lastYOffset - currentYOffset
    if(delta > 30) {
      setScrollingDirectionIsDown(false)
    } else if (delta < -30) {
      setScrollingDirectionIsDown(true)
    }
    lastYOffset = currentYOffset
  }

  useEffect(() => {
    // Listen to scroll, use throttled function
    window.addEventListener('scroll', throttledScrollDirectionDetection)
    // Fire once at page load
    throttledScrollDirectionDetection()
  },[])



	return (
		<NaviContext.Provider value={{
      isActive,
      activeToggle: () => setActive(!isActive),
      beforeHeaderBreakpoint,
      scrollingDirectionIsDown
    }}>
      {children}
    </NaviContext.Provider>
	)
}

export default NaviContext
export { NaviContextProvider }