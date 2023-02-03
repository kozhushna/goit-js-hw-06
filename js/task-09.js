const refs = {
  spanEl: document.querySelector('.color'),
  btnEl: document.querySelector('.change-color'),
};

refs.btnEl.addEventListener('click', onBackgroundColorChange);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onBackgroundColorChange() {
  const backgroundColor = getRandomHexColor();
  document.body.style.backgroundColor = backgroundColor;
  refs.spanEl.textContent = backgroundColor;
}
