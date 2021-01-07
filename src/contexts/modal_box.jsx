import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const ModalBoxContext = createContext(null)

export const ModalBoxProvider = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [content, setContent] = useState(null)

  const modalBox = (ctt) => {
    setOpen(true)
    setContent(ctt)
  }

  return (
    <ModalBoxContext.Provider value={{
      open,
      setOpen,
      content,
      setContent,
      modalBox
    }}
    >
      {children}
    </ModalBoxContext.Provider>
  )
}

ModalBoxProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export const useModalBox = () => {
  const context = useContext(ModalBoxContext)

  if (!context) throw new Error('useModalBox must be used within a provider ModalBoxProvider')

  return { ...context }
}
