import { addLocalStorage, getLocalStorage } from '../../infra/storage/localStorage'

export const getSambaPlayerKey = () => {
  const setting = getLocalStorage('sambatech_player_key')
  if (setting) {
    const data = JSON.parse(setting)
    return data.value || null
  }

  return null
}

export const setSambaPlayerKey = async (data) => {
  await addLocalStorage('sambatech_player_key', JSON.stringify(data))
}
