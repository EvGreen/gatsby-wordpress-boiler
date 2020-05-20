import React, {useState, createContext, useEffect} from 'react'

const NaviContext = createContext(false)

function NaviContextProvider(props) {
  // State for telling if the navi is expanded or not
  const [isActive, setActive] = useState(false)
  // State for scrolling direction
  const [scrollingDirectionUp, setScrollingDirectionUp] = useState(null)
  
  // This one is for telling if user is scrolling up or down, will come to play when showing/hiding navi
  useEffect(() => {

    // Set threshold array to not type them all out, also allow gradual changes in density
    const thresholdArray = steps => Array(steps + 1)
        .fill(0)
        .map((_, index) => index / steps || 0)
    
    // Config for IntersectionObserver
    const config = {
      threshold: thresholdArray(50)
    }

    // Absolutely positioned div in layout.js that has height of whole document height minus 150% of viewport (editable in EVG/css/core/_helpers.scss)
    const observer_target = document.getElementById('observer-target')

    let lastPosition = 0

    // Set up what the observer will be doing
    let observer = new IntersectionObserver(function(entries, self) {
      entries.forEach(entry => {
        const currentPosition = entry.intersectionRatio
        if(currentPosition < lastPosition) {
          setScrollingDirectionUp(true)
        } else {
          setScrollingDirectionUp(false)
        }
        lastPosition = currentPosition
      })
    }, config)
    
    // Initialize observer on the target
    observer.observe(observer_target)
    
  }, [])

	return (
		<NaviContext.Provider value={{
      isActive,
      activeToggle: () => setActive(!isActive),
      scrollingDirectionUp
    }}>
      {props.children}
    </NaviContext.Provider>
	)
}

export default NaviContext
export { NaviContextProvider }