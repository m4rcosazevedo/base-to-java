import React from 'react'
import Routes from '../routes'
import { AlertBoxProvider } from '../../contexts/alert_box'
import AlertBox from '../ui/layout/alert_box'

const App = () => {
  return (
    <AlertBoxProvider>
      {/* <ModalBoxProvider> */}
      <Routes />
      {/* <Modal /> */}
      <AlertBox />
      {/* </ModalBoxProvider> */}
    </AlertBoxProvider>
  )
}

export default App
