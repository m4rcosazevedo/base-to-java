import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const AlertBoxContext = createContext(null)

export const AlertBoxProvider = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [content, setContent] = useState(null)

  const alertBox = (ctt) => {
    setOpen(true)
    setContent(ctt)
  }

  return (
    <AlertBoxContext.Provider value={{
      open,
      setOpen,
      content,
      setContent,
      alertBox
    }}
    >
      {children}
    </AlertBoxContext.Provider>
  )
}

AlertBoxProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export const useAlertBox = () => {
  const context = useContext(AlertBoxContext)

  if (!context) throw new Error('useAlertBox must be used within a provider AlertBoxProvider')

  return { ...context }
}
