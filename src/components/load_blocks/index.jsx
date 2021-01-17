import React from 'react'
import PropTypes from 'prop-types'
import { sortBy } from '../../utils/sort_by'
import ComponentFactory from '../component_factory'

const LoadBlocks = ({ containers, locale, sort = 'position' }) => {
  return (
    <>
      {containers.filter(({ container }) => container === locale)
        .sort(sortBy(sort))
        .map((block, index) => (
          <ComponentFactory key={`${locale}-${index}`} {...block} />
        ))}
    </>
  )
}

LoadBlocks.propTypes = {
  containers: PropTypes.array.isRequired,
  locale: PropTypes.string.isRequired,
  sort: PropTypes.string
}

export default LoadBlocks
