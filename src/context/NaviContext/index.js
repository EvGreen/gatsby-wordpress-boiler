import React, {useState, createContext, useEffect} from 'react'
import { throttle } from 'lodash'

const NaviContext = createContext(false)

function NaviContextProvider(props) {
  // State for telling if the navi is expanded or not
  const [isActive, setActive] = useState(false)
  // State for scrolling direction
  const [scrollingDirectionUp, setScrollingDirectionUp] = useState(null)
  // State for detecting if we're past hero
  const [pastHeaderBreakpoint, setPastHeaderBreakpoint] = useState(null)
  
  // This one is for telling if user is scrolling past or before hero, this will come in handy when showing/hiding navi
  useEffect(() => {

    // Div in layout.js that marks end of hero element
    const observer_target = document.getElementById('header-fold-breakpoint')

    // Set up what the observer will be doing
    let observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          setPastHeaderBreakpoint(false)
        } else {
          setPastHeaderBreakpoint(true)
        }
      })
    })
    
    // Initialize observer on the target
    observer.observe(observer_target)

  }, [])

	return (
		<NaviContext.Provider value={{
      isActive,
      activeToggle: () => setActive(!isActive),
      pastHeaderBreakpoint,
      scrollingDirectionUp
    }}>
      {props.children}
    </NaviContext.Provider>
	)
}

export default NaviContext
export { NaviContextProvider }