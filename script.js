const dataNumber = document.querySelectorAll("[data-number]");
const dataOperator = document.querySelectorAll("[data-operator]");
const equalBtn = document.querySelector("[data-equal]");
const resetBtn=document.querySelector("[data-reset]");
let memoryDisplay = document.querySelector(".memory-text");
let outcomeDisplay = document.querySelector(".outcome-text");

let value1='';
let value2='';
let operator='';
let isOperatorChoosen=false;
let isContinued=false;

function enterValue(){
    dataNumber.forEach(element => {
        element.addEventListener("click",()=>{
            if(memoryDisplay.textContent==0) memoryDisplay.textContent="";
            memoryDisplay.textContent+=element.textContent;
            if(!isContinued && !isOperatorChoosen)value1+=element.textContent;
            else value2+=element.textContent;
        });
    });
}
function enterOperator(){
    dataOperator.forEach(element=> {
        element.addEventListener("click",()=>{
            if(!isOperatorChoosen){
                memoryDisplay.textContent+=` ${element.textContent} `;
                isOperatorChoosen=true;
                operator=element.textContent;
            }
        });
    });
}
resetBtn.addEventListener("click",()=>{
    value1='';
    value2='0';
    operator='';
    isOperatorChoosen=false;
    isContinued=false;
    outcomeDisplay.textContent=0;
    memoryDisplay.textContent=0;
});
function outcomeLength(){
    let amountOfSign=outcomeDisplay.textContent.length;
    if(amountOfSign>=0 && amountOfSign<=6)outcomeDisplay.style.fontSize="5rem";
    else if(amountOfSign>=7 && amountOfSign<=8)outcomeDisplay.style.fontSize="4rem";
    else if(amountOfSign>=9 && amountOfSign<=11)outcomeDisplay.style.fontSize="3rem";
    else outcomeDisplay.style.fontSize="2rem"; 
}
enterValue();
enterOperator()
function operate(operator,num1,num2){
        if(operator == "+")return add(num1,num2);
        else if(operator == "-")return subtract(num1,num2);
        else if(operator == "x")return multiply(num1,num2);
        else if(operator == "÷")return divide(num1,num2);
        else if(operator == "%")return percentage(num1);
        else if(operator == "."){
            if(value1==0) outcomeDisplay.textContent=0.0;
            isOperatorChoosen =false;
            isContinued = false;
            return decimal(num1);
        }
        else {
            if(value1==0.0) outcomeDisplay.textContent=0;
            isContinued=false;
            return num1;
        }
            
}
equalBtn.addEventListener("click",()=>{
    outcomeDisplay.textContent=operate(operator,value1,value2)
    console.log(outcomeDisplay.textContent);
    isOperatorChoosen = false;
    isContinued=true;
    outcomeLength()
    value1=operate(operator,value1,value2);
    value2='';
});

/*----------Calculation Functions----------*/
function add(num1,num2){
    return (+num1)+(+num2);
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}
function percentage(num1){
    return num1/100;
}
function decimal(num1){
    return `${num1}.0`;
}

/*
const operator =prompt("Provide operator");
const num1 = prompt("Provide 1st number");
const num2 = prompt("Provide 2nd number");
console.log(operate(operator,num1,num2));
*/

