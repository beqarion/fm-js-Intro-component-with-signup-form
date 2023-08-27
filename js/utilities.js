const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
export function isNameValid(name) {
  return name ? true : false
}
export function isEmailValid(email) {
  return email.match(emailRegex) ? true : false
}
