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

// divideBtn.onclick = (e) => evaluate(e);
// addBtn.onclick = (e) => evaluate(e);
// subtractBtn.onclick = (e) => evaluate(e);
// multiplyBtn.onclick = (e) => evaluate(e);
equalBtn.onclick = () => sum();
allClear.onclick = () => {
    firstNum = '';
    secondNum = '';
    operatorNum = '';
    displayValue = '';
    displayNum.textContent = '';
    displaySum.textContent = '0';
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
    console.log(operator)
    switch (operator) {
        case "+":
            console.log(operator,a,b)
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
    }
}

function displayNumbers(e){
    displayValue += e.target.dataset.value;
    displaySum.textContent = displayValue;
}

function evaluate(e){
    console.log(e)
    firstNum = displaySum.textContent;
    console.log("first num", firstNum)
    operatorNum = e.target.innerText;
    displayNum.textContent = `${firstNum} ${operatorNum}`;
    
    displayValue = '';
    console.log(secondNum)
    displaySum.textContent = secondNum;
    
}


function sum(){
    secondNum = displaySum.textContent;
    displayNum.textContent = `${firstNum} ${operatorNum} ${secondNum}`;
    console.log(secondNum, firstNum, operatorNum)
    // displaySum.textContent = operate(firstNum, secondNum, operatorNum)
    let sumDigits = operate(operatorNum, firstNum, secondNum)
    displaySum.textContent = sumDigits;
}
