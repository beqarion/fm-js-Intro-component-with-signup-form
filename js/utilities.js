const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
function isNameValid(name) {
  return Boolean(name)
}
function isEmailValid(email) {
  return email.match(emailRegex) ? true : false
}
function addErrorClass(target, errMsg, errIcon, inputContainer) {
  target.classList.add("error-class")
  errMsg.style.display = "block"
  errIcon.style.display = "block"
  inputContainer.style.marginBottom = "22px"
}
function removeErrorClass(target, errMsg, errIcon, inputContainer) {
  target.classList.remove("error-class")
  errMsg.style.display = "none"
  errIcon.style.display = "none"
  inputContainer.style.marginBottom = "0px"
}

export function validateInput(e) {
  const errMsg = this.parentNode.querySelector(".error-message")
  const errIcon = this.parentNode.querySelector(".error-icon")
  const inputContainer = this.parentNode
  if (this.type === "email" && !isEmailValid(this.value)) {
    addErrorClass(this, errMsg, errIcon, inputContainer)
    return
  } else if (!isNameValid(this.value)) {
    addErrorClass(this, errMsg, errIcon, inputContainer)
    return
  }
  removeErrorClass(this, errMsg, errIcon, inputContainer)
}
export function validateInputBoolean(input) {
  console.log(input)
  if (input.type === "email" && !isEmailValid(input.value)) {
    return false
  } else if (!isNameValid(input.value)) {
    return false
  }
  return true
}
