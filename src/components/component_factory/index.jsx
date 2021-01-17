import React from 'react'
import PropTypes from 'prop-types'
import ComponentsList from './components_list'

const ComponentFactory = (block) => {
  const ComponentRender = ComponentsList[block.componentName]

  if (ComponentRender) {
    return <ComponentRender {...block} />
  }

  return null
}

ComponentFactory.propTypes = {
  position: PropTypes.number.isRequired,
  container: PropTypes.string.isRequired,
  componentName: PropTypes.string.isRequired,
  content: PropTypes.any.isRequired,
  block: PropTypes.any.isRequired
}

export default ComponentFactory
