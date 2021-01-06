import React from 'react'
import PropTypes from 'prop-types'

const BaseLayout = ({ children }) => {
  return (
    <>
      <>Header</>
      {children}
      <>Footer</>
    </>
  )
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default BaseLayout
