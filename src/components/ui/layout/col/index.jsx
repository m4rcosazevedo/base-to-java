import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '../../components'
import { customTheme } from '../../../../styles/theme'
import { propTypesStyledHTML } from '../../../../utils/styled-helpers'

const Col = ({ children, ...rest }) => {
  return (
    <Box px={customTheme.gutters} mb={`${parseInt(customTheme.gutters) * 2}px`} {...rest}>
      {children}
    </Box>
  )
}

Col.propTypes = {
  children: PropTypes.node.isRequired,
  ...propTypesStyledHTML
}

export default Col
