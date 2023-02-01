const refs = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  const message = event.currentTarget.value;
  refs.span.textContent = message === '' ? 'Anonymous' : message;
}
