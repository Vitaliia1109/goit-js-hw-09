const form = document.querySelector(".feedback-form")
const emailInput = form.querySelector("[name = email]")
const messageInput = form.querySelector("[name = message]")
const localStorageKey = "feedback-form-state"


form.addEventListener("input", (event) => {
    const formData = {
        email: emailInput.value,
        message: messageInput.value
    }
    localStorage.setItem(localStorageKey, JSON.stringify(formData))
})

const savedState = JSON.parse(localStorage.getItem(localStorageKey))

if (savedState) {
    emailInput = savedState.email
    messageInput = savedState.message
}

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const formData =  {
        email: emailInput.value,
        message: messageInput.value
    }
    console.log('Form data:', formData);

  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
})