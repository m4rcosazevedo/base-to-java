import { addLocalStorage, getLocalStorage } from '../../infra/storage/localStorage'

export const getUserIri = () => {
  const user = getLocalStorage('user')
  if (user) {
    const data = JSON.parse(user)
    return `/users/${data.id}`
  }

  return null
}

export const getUser = () => {
  const user = getLocalStorage('user')
  return JSON.parse(user) || null
}

export const setUser = async (user) => {
  await addLocalStorage('user', JSON.stringify(user))
}
