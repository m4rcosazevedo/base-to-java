import React from 'react'
import { Amplify, I18n } from 'aws-amplify'
import Routes from '../routes'
import { AlertBoxProvider } from '../../contexts/alert_box'
import { ModalBoxProvider } from '../../contexts/modal_box'
import { AlertBox, Modal } from '../ui/layout'
import { GlobalStyle } from '../../styles/global'

import awsExports from '../../aws-exports'
import { dictionary } from '../../dictionary'

Amplify.configure(awsExports)
I18n.setLanguage('pt_BR')
I18n.putVocabularies(dictionary)

const App = () => {
  return (
    <AlertBoxProvider>
      <ModalBoxProvider>
        <GlobalStyle />
        <Routes />
        <Modal />
        <AlertBox />
      </ModalBoxProvider>
    </AlertBoxProvider>
  )
}

export default App
