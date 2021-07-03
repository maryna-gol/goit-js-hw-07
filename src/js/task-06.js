
const inputRef = document.querySelector('input');

inputRef.addEventListener('blur', validationHandler);

function validationHandler(event) {
  const inputDataLength = Number(inputRef.getAttribute('data-length'));

  if (event.currentTarget.value.length === inputDataLength) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
}