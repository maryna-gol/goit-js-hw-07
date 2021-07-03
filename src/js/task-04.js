

let currentValueRef = document.querySelector('#value');
let value = 0;

const countAdd = document.querySelector('[data-action="increment"]')
.addEventListener('click', function increment (){
    value  += 1;    
    currentValue.textContent = value;    
  
    return  currentValueRef;
});


const countSub = document.querySelector('[data-action="decrement"]')
.addEventListener('click', function decrement (event){    
    value  -= 1;    
    currentValue.textContent = value;    
    
    return  currentValueRef;
});
