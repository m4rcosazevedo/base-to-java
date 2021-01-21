import Cookie from 'js-cookie'

export const clearStorage = () => {
  localStorage.clear()
  sessionStorage.clear()

  Object.keys(Cookie.get()).forEach((item) => {
    Cookie.remove(item)
  })
}
