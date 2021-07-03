
const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);


const textDef = 'незнакомец';
function onInputChange(event)
{
    if (event.currentTarget.value === '' || event.currentTarget.value === ' ') {
        output.textContent = textDef;
    } else {
        output.textContent = event.currentTarget.value;
    }
 } 


