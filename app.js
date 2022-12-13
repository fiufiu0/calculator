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

divideBtn.onclick = () => evaluate();
addBtn.onclick = () => evaluate();
subtractBtn.onclick = () => evaluate();
multiplyBtn.onclick = () => evaluate();

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

    // if(addBtn == 'click'){
    //     secondNum = e.target.dataset.value;
    //     // displayNum.textContent += secondNum;
    // }
   
}

function evaluate(){
    console.log("evaluate")
}