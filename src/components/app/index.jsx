import React from 'react'
import Routes from '../routes'
import { AlertBoxProvider } from '../../contexts/alert_box'
import { ModalBoxProvider } from '../../contexts/modal_box'
import { AlertBox, Modal } from '../ui/layout'

const App = () => {
  return (
    <AlertBoxProvider>
      <ModalBoxProvider>
        <Routes />
        <Modal />
        <AlertBox />
      </ModalBoxProvider>
    </AlertBoxProvider>
  )
}

export default App
