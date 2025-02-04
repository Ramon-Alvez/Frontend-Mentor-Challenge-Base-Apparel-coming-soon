const form = document.getElementById('subscribe-form')
const email = document.getElementById('email')
const emailRejex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
const errorMessage = document.querySelector('span.error')

function addError() {
    email.classList.add('invalid')
    errorMessage.classList.remove('hidden')
}
function removeError() {
    email.classList.remove('invalid')
    errorMessage.classList.add('hidden')
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
   
    if (email.value.length === 0 || !emailRejex.test(email.value)) addError()
    else {
        removeError()
        form.submit()
    }
})