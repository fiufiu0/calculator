const displayNum = document.getElementById('displayNum');
const displaySum = document.getElementById('displaySum');
const allClear = document.getElementById('allClear');
const clear = document.getElementById('clear');
const modulo = document.getElementById('modulo');
const divideBtn = document.getElementById('divide');
const addBtn = document.getElementById('addBtn');
const subtractBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');
const equalBtn = document.getElementById('equal');
const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
    button.addEventListener('click', displayNumbers)
})

addBtn.onclick = () => {
    secondNum = "+"
    displaySum.textContent = `${secondNum}`
}

let displayValue = '';
let firstNum = '';
let secondNum = '';


function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}


function operate(a,b,operator){
    switch (operator) {
        case "+":
            add(a,b);
            break;
        case "-":
            subtract(a,b);
            break;
        case "*":
            multiply(a,b);
            break;
        case "/":
            divide(a,b);
            break;
    }
}

function displayNumbers(e){
    console.log(e)
    firstNum = e.target.dataset.value;
    displayNum.textContent = `${firstNum}`;
   
    
}