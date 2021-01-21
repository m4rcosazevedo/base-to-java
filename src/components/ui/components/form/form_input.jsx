import styled from 'styled-components'
import { customTheme } from '../../../../styles/theme'
import icoEye from '../../../../assets/icons/ico-eye.png'

export const FormInput = styled.input`
  width: 100%;
  height: 38px;
  padding: 0 12px;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 1.428;
  color: #313131;
  background: transparent;
  border: 1px solid ${customTheme.colors.gray['300']};
  transition: all .3s ease;
  &:focus {
    border-color: ${customTheme.colors.blue['200']};
  }
`

export const IcoView = styled.div`
  position: absolute;
  top: 8px;
  right: 20px;
  cursor: pointer;
  width: 25px;
  height: 25px;
  background: url('${icoEye}') no-repeat top center;
  &.slash {
    background-position: bottom center;
  }
`
