const input = document.querySelector('#validation-input');
const length = Number(input.dataset.length);

input.addEventListener('blur', onInputBlur);

function onInputBlur() {
  const message = input.value.trim();
  if (message.length === length) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}
