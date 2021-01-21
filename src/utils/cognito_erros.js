import { I18n } from 'aws-amplify'

const { get } = I18n
export const exceptionsError = (exception, message) => {
  switch (exception) {
    case 'CodeMismatchException':
      return get('CodeMismatchException')
    case 'ExpiredCodeException':
      return get('ExpiredCodeException')
    case 'LimitExceededException':
      return get('LimitExceededException')
    case 'NewPasswordRequired':
      return get('NewPasswordRequired')
    case 'NotAuthorizedException':
      return notAuthorizedException(message)
    case 'UsernameExistsException':
      return get('UsernameExistsException')
    case 'UserNotConfirmedException':
      return get('UserNotConfirmedException')
    case 'UserNotFoundException':
      return userNotFoundException(message)
    default:
      return get('DefaultException')
  }
}

const userNotFoundException = (message) => {
  if (message && message.toLowerCase() === 'username/client id combination not found.') {
    return get('ExpiredCodeException')
  }
  return get('UserNotFoundException')
}

const notAuthorizedException = (message) => {
  if (message && message.toLowerCase() === 'temporary password has expired and must be reset by an administrator.') {
    return get('NotAuthorizedExceptionTempPasswordExpired')
  }
  return get('NotAuthorizedException')
}
