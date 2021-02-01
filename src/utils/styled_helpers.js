import { customTheme } from '../styles/theme'
import { spinalCase } from './case_styles'
import PropTypes from 'prop-types'

const renderValue = (value) => {
  return typeof value === 'number' ? `${value}px` : value
}

const renderResponsive = (index, prop, value) => {
  if (index) {
    return `
      @media (min-width: ${customTheme.breakpoints[index + 1]}) {
        ${prop}: ${renderValue(value)};
      }
    `
  }
  return `${prop}: ${renderValue(value)};`
}

const removeAbbr = (prop) => {
  switch (prop) {
    case 'd': return 'display'
    case 'w': return 'width'
    case 'h': return 'height'
    case 'px': return ['padding-left', 'padding-right']
    case 'py': return ['padding-top', 'padding-bottom']
    case 'pl': return 'padding-left'
    case 'pr': return 'padding-right'
    case 'pt': return 'padding-top'
    case 'pb': return 'padding-bottom'
    case 'p': return 'padding'
    case 'mx': return ['margin-left', 'margin-right']
    case 'my': return ['margin-top', 'margin-bottom']
    case 'ml': return 'margin-left'
    case 'mr': return 'margin-right'
    case 'mt': return 'margin-top'
    case 'mb': return 'margin-bottom'
    case 'm': return 'margin'
    case 'pos': return 'position'
    case 'bg': return 'background'
    case 'bgc': return 'background-color'
    default: return prop
  }
}

const getProps = (key, value) => {
  if (typeof value === 'object') {
    return value.map((v, i) => renderResponsive(i, key, v)).join('')
  }

  return renderResponsive(0, key, value)
}

const propsAllowed = [
  'd',
  'w', 'h',
  'px', 'py', 'pl', 'pr', 'pt', 'pb', 'p',
  'mx', 'my', 'ml', 'mr', 'mt', 'mb', 'm',
  'display', 'flexWrap', 'flexDir', 'flexBasics', 'flexGrow',
  'alignItems', 'alignContent',
  'justifyItems', 'justifyContent',
  'textAlign', 'pos',
  'bg', 'bgc',
  'opacity'
]

export const applyProps = (props) => {
  return Object.keys(props).filter(key => propsAllowed.includes(key)).map(key => {
    const attr = removeAbbr(key)

    if (typeof attr === 'object') {
      return attr.map(at => getProps(spinalCase(at), props[key])).join('\n')
    }

    const prop = getProps(spinalCase(attr), props[key])
    return typeof prop === 'object' ? prop.join('\n') : prop
  })
}

const propDefault = PropTypes.oneOfType([
  PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  PropTypes.arrayOf(PropTypes.string)
])

export const propTypesStyledHTML = {
  w: propDefault,
  h: propDefault,
  px: propDefault,
  py: propDefault,
  pl: propDefault,
  pr: propDefault,
  pt: propDefault,
  pb: propDefault,
  p: propDefault,
  mx: propDefault,
  my: propDefault,
  ml: propDefault,
  mr: propDefault,
  mt: propDefault,
  mb: propDefault,
  m: propDefault,
  bg: propDefault,
  bgc: propDefault,
  d: propDefault
}
