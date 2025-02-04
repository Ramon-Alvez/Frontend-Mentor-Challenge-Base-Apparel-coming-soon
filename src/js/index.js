const email = document.getElementById('email')
const emailRejex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
const errorMessage = document.querySelector('span.error')
const submitButton = document.querySelector('button.submit-button')


email.addEventListener('change', () => {
    if (!emailRejex.test(email.value)) {
        email.classList.add('invalid')
        errorMessage.classList.remove('hidden')
        submitButton.disabled = true
    }
    else {
        email.classList.remove('invalid')
        errorMessage.classList.add('hidden')
        submitButton.disabled = false
    }
})