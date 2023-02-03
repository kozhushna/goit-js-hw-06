const refs = {
  input: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};
setFontSize(refs.input.value);

refs.input.addEventListener('input', onInputRange);

function onInputRange() {
  setFontSize(refs.input.value);
}

function setFontSize(size) {
  refs.text.style.fontSize = size + 'px';
}
