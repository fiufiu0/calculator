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
    console.log(e)
    if(firstNum === ''){
        firstNum = e.target.dataset.value;
    displayValue = firstNum;
    displayNum.textContent = `${displayValue}`;
    } else {
        secondNum += e.target.dataset.value;
    displaySum.textContent = `${secondNum}`;
    } 
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

function sum(firstNum, secondNum, operatorNum){
    console.log(firstNum,secondNum,operatorNum)
    let summer = operate(firstNum, secondNum, operatorNum);
    console.log(summer)
    displaySum.textContent = `${summer}`
}
