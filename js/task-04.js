let counterValue = 0;
const btnDecrRef = document.querySelector('[data-action="decrement"]');
const btnIncrRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');


console.log(btnDecrRef)

btnDecrRef.addEventListener('click', OnDecreaseBtnClick);
btnIncrRef.addEventListener('click', OnIncreaseBtnClick);

function OnDecreaseBtnClick () {
    counterValue -= 1
    valueRef.textContent = counterValue;
}

function OnIncreaseBtnClick() {
    counterValue += 1
    valueRef.textContent = counterValue;
}