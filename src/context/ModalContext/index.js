import React, {useState, createContext, useEffect} from 'react'

const ModalContext = createContext(false)

function ModalContextProvider({children, location}) {
  // State for telling if the modal is active or not
	const [isActive, setActive] = useState(false)
	const [dataAttr, setDataAttr] = useState()
	
  /* ==========================================================================
    Modal Activity Check
  ========================================================================== */

  useEffect(() => {
		//setActive(true)
		const btn = document.querySelectorAll('[href*="#evg-modal-"]')
		if(btn.length){
			btn.forEach(item => {
				item.addEventListener('click', event => {
					event.preventDefault()
					setDataAttr(event.currentTarget.attributes.href.nodeValue)
					setActive(true)
				})
			})		
		}
  },[location])

	return (
		<ModalContext.Provider value={{
      isActive,
			setActive: (trueOrFalse) => setActive(trueOrFalse),
			dataAttr
    }}>
      {children}
    </ModalContext.Provider>
	)
}

export default ModalContext
export { ModalContextProvider }