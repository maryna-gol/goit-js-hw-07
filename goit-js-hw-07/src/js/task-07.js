const fontSizeRef = document.querySelector('#font-size-control');
const fontSizeText = document.querySelector('#text');
let fontSizeValue = fontSizeRef.value;
fontSizeText.style.fontSize = `${fontSizeValue}px`;

fontSizeRef.addEventListener('input', getInputRefChange);

function getInputRefChange(event) {
  console.dir(event);
  let fontSizeValue = event.currentTarget.value;
  fontSizeText.style.fontSize = `${fontSizeValue}px`;
  console.log(fontSizeText.style.fontSize);
}
