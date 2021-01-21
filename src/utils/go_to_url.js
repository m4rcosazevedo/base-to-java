export const goToUrl = (history, url, state) => {
  history.push({
    pathname: url,
    search: history.location.search,
    state
  })
}
