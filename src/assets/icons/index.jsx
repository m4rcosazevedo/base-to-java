import React from 'react'
import PropTypes from 'prop-types'
import { AngleDownLight } from './angle_down_light'
import { AngleLeftLight } from './angle_left_light'
import { AngleRightLight } from './angle_right_light'
import { Heart, HeartFull } from './heart'
import { MinusCircleLight } from './minus_circle_light'
import { PlusCircleLight } from './plus_circle_light'

export const Icon = ({ name, ...rest }) => {
  switch (name) {
    case 'angle-down-light': return <AngleDownLight{...rest} />
    case 'angle-left-light': return <AngleLeftLight {...rest} />
    case 'angle-right-light': return <AngleRightLight {...rest} />
    case 'heart-full': return <HeartFull {...rest} />
    case 'heart': return <Heart {...rest} />
    case 'minus-circle-light': return <MinusCircleLight {...rest} />
    case 'plus-circle-light': return <PlusCircleLight {...rest} />
    default: return null
  }
}

Icon.propTypes = {
  name: PropTypes.oneOf([
    'angle-down-light',
    'angle-left-light',
    'angle-right-light',
    'heart-full',
    'heart',
    'minus-circle-light',
    'plus-circle-light',
  ]).isRequired
}
