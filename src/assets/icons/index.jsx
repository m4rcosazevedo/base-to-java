import React from 'react'
import PropTypes from 'prop-types'
import { AngleDownLight } from './angle_down_light'
import { AngleLeftLight } from './angle_left_light'
import { AngleRightLight } from './angle_right_light'

export const Icon = ({ name }) => {
  switch (name) {
    case 'angle-down-light': return <AngleDownLight />
    case 'angle-left-light': return <AngleLeftLight />
    case 'angle-right-light': return <AngleRightLight />
  }
}

Icon.propTypes = {
  name: PropTypes.oneOf([
    'angle-down-light',
    'angle-left-light',
    'angle-right-light'
  ]).isRequired
}
