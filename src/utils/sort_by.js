export const sortBy = (property) => {
  const sortOrder = 1

  return (a, b) => {
    const result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0
    return result * sortOrder
  }
}
