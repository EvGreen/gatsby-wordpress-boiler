import React, {useState, createContext} from 'react'

const FSLightBoxContext = createContext(false)

function FSLightBoxContextProvider({children, location}) {
  // State for telling if the modal is active or not
	const [sources, setSources] = useState()
	const [slide, setSlide] = useState(1)
	const [toggler, setToggler] = useState(false)
	const [type, setType] = useState('image')


	return (
		<FSLightBoxContext.Provider value={{
			slide,
			setSlide: (number) => setSlide(number),
			sources,
			setSources: (source) => setSources(source),
			toggler,
			setToggler: (toggle) => setToggler(toggle),
			type,
			setType: (type) => setType(type),
    }}>
      {children}
    </FSLightBoxContext.Provider>
	)
}

export default FSLightBoxContext
export { FSLightBoxContextProvider }