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
  amount = inputRef.value;
  
    for (let i = 1; i <= amount; i += 1) {
      collectionElements.push(`<div></div>`)
    }

    return collectionElements.join('');  
}
  
function onCreateBtnClick() {
  
  containerRef.insertAdjacentHTML("beforeend", createBoxes());
 
  let elSize = 20;
  
  for (const child of containerRef.children) {
    elSize += 10;    
    
    child.style.backgroundColor = getRandomHexColor();
    child.style.width = elSize + 'px';
    child.style.height = elSize + 'px';
  }
}

function onDestroyBtnClick(amount) {

  amount = inputRef.value;

  if (amount > containerRef.children.length) {
    containerRef.innerHTML = '';
    return;
  }

  for (let i = 0; i < amount; i++) {
    containerRef.lastElementChild.remove();
  } 
}

