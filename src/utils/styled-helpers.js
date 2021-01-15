import { customTheme } from '../styles/theme'
import { spinalCase } from './case-styles'
import PropTypes from 'prop-types'

const renderResponsive = (index, prop, value) => {
  if (index) {
    return `
      @media (min-width: ${customTheme.breakpoints[index + 1]}) {
        ${prop}: ${value};
      }
    `
  }
  return `${prop}: ${value};`
}

const removeAbbr = (prop) => {
  switch (prop) {
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
    default: return prop
  }
}

const getProps = (key, value) => {
  if (typeof value === 'object') {
    return value.map((v, i) => renderResponsive(i, key, v))
  }

  return renderResponsive(0, key, value)
}

const propsAllowed = [
  'w', 'h',
  'px', 'py', 'pl', 'pr', 'pt', 'pb', 'p',
  'mx', 'my', 'ml', 'mr', 'mt', 'mb', 'm',
  'display', 'flexWrap', 'flexDir', 'flexBasics', 'flexGrow',
  'alignItems', 'alignContent',
  'justifyItems', 'justifyContent'
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

export const propTypesStyledHTML = {
  w: PropTypes.any,
  h: PropTypes.any,
  px: PropTypes.any,
  py: PropTypes.any,
  pl: PropTypes.any,
  pr: PropTypes.any,
  pt: PropTypes.any,
  pb: PropTypes.any,
  p: PropTypes.any,
  mx: PropTypes.any,
  my: PropTypes.any,
  ml: PropTypes.any,
  mr: PropTypes.any,
  mt: PropTypes.any,
  mb: PropTypes.any,
  m: PropTypes.any
}
