import styled from 'styled-components'
import PropTypes from 'prop-types'
import { customTheme } from '../../../../styles/theme'

const sizes = ['sm', 'md', 'lg', 'xl', 'xxl']
const defaultSize = 'xl'

const getPosSize = (size) => {
  return sizes.indexOf(size) >= 0 ? sizes.indexOf(size) : sizes.indexOf(defaultSize)
}

const handleMediaContainer = (value) => {
  switch (value) {
    case 'sm': return customTheme.breakpoints[0]
    case 'md': return customTheme.breakpoints[1]
    case 'lg': return customTheme.breakpoints[2]
    case 'xl': return customTheme.breakpoints[3]
    case 'xxl': return customTheme.breakpoints[4]
    default: return 0
  }
}

const handleMaxWContainer = (value) => {
  switch (value) {
    case 'sm': return '540px'
    case 'md': return '720px'
    case 'lg': return '960px'
    case 'xl': return '1140px'
    case 'xxl': return '1320px'
    default: return 0
  }
}

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  ${(props) => {
    if (!props.fluid) {
      let html = ''
      for (let i = 0; i <= getPosSize(props.size); i++) {
         html += `
          @media (min-width: ${handleMediaContainer(sizes[i])}) {
            max-width: ${handleMaxWContainer(sizes[i])};
          }      
        `
      }
      return html
    }
  }}
`

Container.defaultProps = {
  size: defaultSize,
  fluid: false
}

Container.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),
  fluid: PropTypes.bool
}
