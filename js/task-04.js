let counterValue = 0;
const btnDecrRef = document.querySelector('[data-action="decrement"]');
const btnIncrRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');


console.log(btnDecrRef)

btnDecrRef.addEventListener('click', decreaseCounter);
btnIncrRef.addEventListener('click', increaseCounter);

function decreaseCounter () {
    counterValue -= 1
    valueRef.textContent = counterValue;
}

function increaseCounter() {
    counterValue += 1
    valueRef.textContent = counterValue;
}