export function validateUsername(username: string) {
  if (!username) return false

  const userLength = username.length
  const hasMinLenght = userLength >= 3
  const hasMaxLenght = userLength <= 10

  return hasMinLenght && hasMaxLenght ? true : false
}

export function validateName(name: string) {
  const re = /\W/gi
  return !re.test(name)
}

export function validateEmail(email: string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}
