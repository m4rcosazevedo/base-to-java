export const addLocalStorage = (key, value) => {
  return new Promise((resolve, reject) => {
    try {
      localStorage.setItem(key, value)
      resolve()
    } catch (e) {
      reject(e)
    }
  })
}

export const getLocalStorage = (key) => {
  return localStorage.getItem(key)
}

export const removeLocalStorage = (key) => {
  return localStorage.removeItem(key)
}
