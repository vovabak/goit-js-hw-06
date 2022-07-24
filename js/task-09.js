function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnRef = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

changeColorBtnRef.addEventListener('click', onChangeColorBtnClick);

function onChangeColorBtnClick(event) {
  const newColor = getRandomHexColor();

  changeColorBtnRef.style.backgroundColor = newColor;
  colorSpan.style.backgroundColor = newColor;
  colorSpan.style.color = newColor;
}