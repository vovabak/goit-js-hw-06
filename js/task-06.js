const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputBlur)


function onInputBlur(event) {
    
    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
        event.currentTarget.classList.remove('invalid');
        event.currentTarget.classList.add('valid');        
    } else {
        event.currentTarget.classList.remove('valid');
        event.currentTarget.classList.add('invalid');    
    }
}
