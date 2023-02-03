const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const target = event.currentTarget;
  const formData = {
    email: target.elements.email.value.trim(),
    password: target.elements.password.value.trim(),
  };
  if (formData.email === '' || formData.password === '') {
    alert('Всі поля повинні бути заповнені');
    return;
  }

  console.log(formData);
  form.reset();
}
