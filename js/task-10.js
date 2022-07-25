function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const containerRef = document.querySelector('#boxes');
const inputRef = document.querySelector('#controls > input');

createBtn.addEventListener('click', onCreateBtnClick);
destroyBtn.addEventListener('click', onDestroyBtnClick);


function createBoxes(amount) {
    const collectionElements = [];  

    for (let i = 1; i <= amount; i += 1) {
      collectionElements.push(`<div>el${i}</div>`)
    }

    return collectionElements.join('');  
}
  
function onCreateBtnClick() {
  
  const amount = inputRef.value;

  containerRef.innerHTML = createBoxes(amount);

  addStyleToBoxesElements();  
}

function onDestroyBtnClick() {
  inputRef.value = '';
  containerRef.innerHTML = '';
}

function addStyleToBoxesElements() {

  for (const child of containerRef.children) {
    child.classList.add('boxes__element')
    child.style.backgroundColor = getRandomHexColor();
    child.style.width = '30px';
    child.style.height = '30px';
  }
}