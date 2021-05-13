import {suggestions} from "./suggestions"


export const dealWithEvent = (event) => {
  event.preventDefault()
  const input = document.querySelector("#testo")
  const inputText = input.value
  suggestions (inputText)
}
