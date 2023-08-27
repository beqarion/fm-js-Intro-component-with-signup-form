import { validateInput, validateInputBoolean } from "./utilities.js"
const inputs = Array.from(document.getElementsByClassName("input-field"))
const submitBtn = document.getElementById("submit-btn")
const form = document.getElementById("my-form")

inputs.forEach((el) => {
  el.addEventListener("blur", function (e) {
    validateInput.bind(this)(e)
  })
  el.addEventListener("keyup", validateInput)
})
submitBtn.addEventListener("click", function (e) {
  e.preventDefault()
  inputs.forEach((el) => {
    validateInput.bind(el)()
  })
  if (inputs.every(validateInputBoolean)) {
    console.log("every passed")
    form.submit()
  }
})
