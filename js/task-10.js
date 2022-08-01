function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const containerRef = document.querySelector('#boxes');
const inputRef = document.querySelector('#controls > input');

createBtn.addEventListener('click', onCreateBtnClick);
destroyBtn.addEventListener('click', onDestroyBtnClick);


function onCreateBtnClick(amount) {
  const collectionElements = [];
  amount = inputRef.value;
  
  for (let i = 1; i <= amount; i += 1) {
    collectionElements.push('<div></div>')      
  }  

  containerRef.insertAdjacentHTML("beforeend", collectionElements.join(''));
  
  for (let i = 0; i < amount; i++) {    
    containerRef.children[(containerRef.children.length - 1) - i].style.backgroundColor = getRandomHexColor();
  }

  let elSize = 20; 
    
  for (const child of containerRef.children) {
    elSize += 10;    
    
    child.style.width = elSize + 'px';
    child.style.height = elSize + 'px';    
  }  
}


function onDestroyBtnClick() {

  inputRef.value = '';

  containerRef.innerHTML = '';  
}

// function onDestroyBtnClick(amount) {

//   amount = inputRef.value;

//   if (amount > containerRef.children.length) {
//     containerRef.innerHTML = '';
//     return;
//   }

//   for (let i = 0; i < amount; i++) {
//     containerRef.lastElementChild.remove();
//   } 
// }

