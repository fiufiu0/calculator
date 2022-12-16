const displayNum = document.getElementById('displayNum');
const displaySum = document.getElementById('displaySum');
const allClear = document.getElementById('allClear');
const clear = document.getElementById('clear');
const modulo = document.getElementById('modulo');
const divideBtn = document.getElementById('divideBtn');
const addBtn = document.getElementById('addBtn');
const subtractBtn = document.getElementById('subtractBtn');
const multiplyBtn = document.getElementById('multiplyBtn');
const equalBtn = document.getElementById('equalBtn');
const buttons = document.querySelectorAll('.btn');

let displayValue = '';
let firstNum = '';
let secondNum = '';
let operatorNum = '';

buttons.forEach((button) => {
    button.addEventListener('click', displayNumbers)
})

divideBtn.onclick = (e) => evaluate(e);
addBtn.onclick = (e) => evaluate(e);
subtractBtn.onclick = (e) => evaluate(e);
multiplyBtn.onclick = (e) => evaluate(e);

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
    displayValue = firstNum;
    displayNum.textContent = `${displayValue}`;

    
}

function evaluate(e){
    console.log(e)
    if(firstNum === ''){
        return;
    } else {
        operatorNum = e.target.innerText;
        displayValue = firstNum + operatorNum;
        displayNum.textContent = `${displayValue}`
    }
    
}