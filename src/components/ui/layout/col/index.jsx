import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '../../components'
import { customTheme } from '../../../../styles/theme'
import { propTypesStyledHTML } from '../../../../utils/styled_helpers'

const Col = ({ children, ...rest }) => {
  const positions = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']
  const numColumns = 12
  const colValue = 100 / numColumns
  const size = new Array(positions.length).fill(12)

  positions.forEach((value, index) => {
    if (rest[value]) {
      size.fill(`${parseFloat((rest[value] * colValue).toFixed(5))}%`, index)
      Reflect.deleteProperty(rest, value)
    }
  })

  return (
    <Box px={customTheme.gutters} mb={`${parseInt(customTheme.gutters) * 2}px`} w={size} {...rest}>
      {children}
    </Box>
  )
}

Col.propTypes = {
  children: PropTypes.node.isRequired,
  ...propTypesStyledHTML
}

export default Col
