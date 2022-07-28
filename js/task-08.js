const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const { elements } = event.currentTarget;

    if (elements.email.value === '' || elements.password.value === '') {
        alert("Необхідно заповнити усі поля");
        return;
    }

    const formData = { email: elements.email.value, password: elements.password.value }
    
    console.log(formData)

    event.currentTarget.reset();
}
