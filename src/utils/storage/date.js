import { addLocalStorage, getLocalStorage } from '../../infra/storage/localStorage'

export const getLastUpdated = () => {
  return getLocalStorage('lastUpdated')
}

export const setLastUpdated = async () => {
  await addLocalStorage('lastUpdated', new Date().toLocaleDateString())
}
