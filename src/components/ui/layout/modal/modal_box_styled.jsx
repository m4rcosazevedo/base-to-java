import styled from 'styled-components'
import { customTheme } from '../../../../styles/theme'

export const ModalDialogOverlay = styled.div`
  background: rgba(0, 0, 0, 0.35);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 60;
`

export const ModalDialogContent = styled.div`
  position: fixed;
  width: 100%;
  background: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  z-index: 61;
  max-width: 90%;
  @media (min-width: ${customTheme.breakpoints[0]}) {
    max-width: 480px;
  }
  @media (min-width: ${customTheme.breakpoints[1]}) {
    max-width: 700px;
  }
  @media (min-width: ${customTheme.breakpoints[3]}) {
    max-width: 920px;
  }
  @media (min-width: ${customTheme.breakpoints[3]}) {
    max-width: 1000px;
  }
`

export const ModalDialogHeader = styled.div`
  display: flex;
`

export const ModalDialogHeaderTitle = styled.h3`
  margin: 0;
  padding: 0;
`

export const ModalDialogClose = styled.div`
  cursor: pointer;
  margin-left: auto;
  font-size: 25px;
  width: 30px;
  text-align: center;
  background: ${customTheme.colors.black};
  color: ${customTheme.colors.white};
`

export const ModalDialogBody = styled.div`
  padding: 15px;
`

export const ModalDialogFooter = styled.div``
