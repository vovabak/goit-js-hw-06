const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');


inputRef.addEventListener('input', OnInputChange);

function OnInputChange(event) {
    
    outputRef.textContent = event.currentTarget.value;
}