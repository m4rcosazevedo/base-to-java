import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from '../../components'
import { customTheme } from '../../../../styles/theme'

const Row = ({ children }) => {
  return (
    <Flex flexWrap="wrap" mx={`-${customTheme.gutters}`}>
      {children}
    </Flex>
  )
}

Row.propTypes = {
  children: PropTypes.node.isRequired
}

export default Row
