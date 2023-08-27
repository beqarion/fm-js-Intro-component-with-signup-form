import { isNameValid, isEmailValid } from "./utilities.js"
const inputs = Array.from(document.getElementsByClassName("input-field"))
const submitBtn = document.getElementById("submit-btn")

console.log(inputs)
inputs.forEach((el) => {
  el.addEventListener("blur", function (e) {
    console.log(this)
  })
})
