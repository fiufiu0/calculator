const displayNum = document.getElementById('displayNum');
const displaySum = document.getElementById('displaySum');
const allClear = document.getElementById('allClear');
const clear = document.getElementById('clear');
const modulo = document.getElementById('modulo');
const equalBtn = document.getElementById('equalBtn');
const buttons = document.querySelectorAll('.btn');
const operators = document.querySelectorAll('[data-operator]');

let displayValue = '';
let firstNum = '';
let secondNum = '';
let operatorNum = '';

buttons.forEach((button) => {
    button.addEventListener('click', displayNumbers)
})

operators.forEach((button) => {
    button.addEventListener('click', evaluate)
})

equalBtn.onclick = () => sum();

allClear.onclick = () => {
    firstNum = '';
    secondNum = '';
    operatorNum = '';
    displayValue = '';
    displayNum.textContent = '';
    displaySum.textContent = '0';
}


function displayNumbers(e){
    displayValue += e.target.dataset.value;
    displaySum.textContent = displayValue;
    if(displayValue.length > 10) {
        displaySum.innerText = displayValue.substring(0, 10);
    }
}

function evaluate(e){
    firstNum = displayValue;
    operatorNum = e.target.innerText;
    displayNum.textContent = `${firstNum} ${operatorNum}`;
    console.log("displayvalue przed", displayValue)
    displayValue = '';
    console.log("displayvalue po", displayValue)
    displaySum.textContent = secondNum;
    
}


function sum(){
    secondNum = displaySum.textContent;
    displayNum.textContent = `${firstNum} ${operatorNum} ${secondNum}`;
    let sumDigits = operate(operatorNum, firstNum, secondNum)
    displaySum.textContent = sumDigits;
}


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

function operate(operator, a, b){
    a = Number(a);
	b = Number(b);
    switch (operator) {
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
    }
}
