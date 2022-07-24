const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const element = event.currentTarget.elements;

    
    if (element.email.value === '' || element.password.value === '') {
        alert("Необхідно заповнити усі поля");
    }
    
    return formData;
}

