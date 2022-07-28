function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnRef = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

changeColorBtnRef.addEventListener('click', onChangeColorBtnClick);

function onChangeColorBtnClick(event) {
  const newColor = getRandomHexColor();
  
  document.body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
}