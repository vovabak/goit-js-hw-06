const inputRef = document.querySelector('#font-size-control');
const inputLabelRef = document.querySelector('#text');

inputRef.addEventListener('change', onInputChange);

function onInputChange(event) {    
    inputLabelRef.style.fontSize = event.currentTarget.value + 'px';
}