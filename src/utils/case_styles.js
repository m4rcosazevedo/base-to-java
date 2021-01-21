export function spinalCase (str) {
  const noCamel = str.replace(/([a-z](?=[A-Z]))/g, '$1 ')
  const newStr = noCamel.replace(/\s|_/g, '-')
  return newStr.toLowerCase()
}
