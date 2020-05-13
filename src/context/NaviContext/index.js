import React, {useState, createContext} from 'react'

const NaviContext = createContext(false)

function NaviContextProvider(props) {
	const [isActive, setActive] = useState(false)

	return (
		<NaviContext.Provider value={{
      isActive,
      activeToggle: () => setActive(!isActive)
    }}>
      {props.children}
    </NaviContext.Provider>
	)
}

export default NaviContext
export { NaviContextProvider }