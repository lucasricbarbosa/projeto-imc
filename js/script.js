import { Modal } from '../js/modal.js'
import { AlertError } from '../js/alert-error.js'
import { calculateIMC, notNumber } from '../js/utils.js'

// variáveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = (event) => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

    if(weightOrHeightIsNotANumber) {
        AlertError.open()
        return
    }

    AlertError.close()

    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

function displayResultMessage(result) {
    const message = `Seu IMC é ${result}`

    Modal.message.innerText = message
    // modalWrapper.classList.add('open')
    Modal.open()
}
