let counterValue = 0;
const btnDecrRef = document.querySelector('[data-action="decrement"]');
const btnIncrRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');


console.log(btnDecrRef)

btnDecrRef.addEventListener('click', onDecreaseBtnClick);
btnIncrRef.addEventListener('click', onIncreaseBtnClick);

function onDecreaseBtnClick () {
    counterValue -= 1
    valueRef.textContent = counterValue;
}

function onIncreaseBtnClick() {
    counterValue += 1
    valueRef.textContent = counterValue;
}