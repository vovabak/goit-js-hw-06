const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputBlur)


function onInputBlur(event) {
    
    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
        event.currentTarget.classList.remove('invalid');
        return event.currentTarget.classList.add('valid');
    }
    event.currentTarget.classList.remove('valid');
    return event.currentTarget.classList.add('invalid');
}
