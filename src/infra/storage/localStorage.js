export const addLocalStorage = (key: string, value: any): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      localStorage.setItem(key, value)
      resolve()
    } catch (e) {
      reject(e)
    }
  })
}

export const getLocalStorage = (key: string): any => {
  return localStorage.getItem(key)
}

export const removeLocalStorage = (key: string): any => {
  return localStorage.removeItem(key)
}
