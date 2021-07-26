const currentElement = document.querySelector(".zweite");
const previusElement = document.querySelector(".erste");

const acButton = document.querySelector(".ac");
const pmButton = document.querySelector(".pm");
const percentButton = document.querySelector(".percent");

const  additionButton = document.querySelector(".addition");
const subtractionButton = document.querySelector(".subtraction");
const multiplicationButton = document.querySelector(".multiplication");
const divisionButton = document.querySelector(".division");
const equalButton = document.querySelector(".equal");

const decimalButton = document.querySelector(".decimal");
const number0 = document.querySelector(".number-0");
const number1 = document.querySelector(".number-1");
const number2 = document.querySelector(".number-2");
const number3 = document.querySelector(".number-3");
const number4 = document.querySelector(".number-4");
const number5 = document.querySelector(".number-5");
const number6 = document.querySelector(".number-6");
const number7 = document.querySelector(".number-7");
const number8 = document.querySelector(".number-8");
const number9 = document.querySelector(".number-9");
const numberArray = [
    number0,
    number1,
    number2,
    number3,
    number4,
    number5,
    number6,
    number7,
    number8,
    number9
];


let previusOperant = '';
let currentOperant = '';
let operation = undefined;
let temporaryOperand;
let result;

function DisplayShow(){
    previusElement.innerHTML=previusOperant;
    currentElement.innerHTML=currentOperant;
}
function AppendNumber(number){
    if (number==="." && currentOperant.includes(".")) return;
    if (number === 0 && currentOperant ==="0") return;
    if (currentOperant.length>5) return;
    currentOperant=currentOperant.toString()+number.toString();
    console.log(number)
    DisplayShow();
}
function ChooseOperation (selectedOperation){
    if (temporaryOperand){
        previusOperant=temporaryOperand.toString();
        currentOperant='';
        temporaryOperand='';
        operation=selectedOperation;
        DisplayShow();
        return;
    }
    operation=selectedOperation;
    previusOperant=currentOperant;
    currentOperant='';
    DisplayShow();
}
function ClearAll(){
    if (!previusOperant){
        currentOperant=currentOperant.slice(0, currentOperant.length-1)
    }else{
    previusOperant='';
    currentOperant='';
    operation=undefined;
    acButton.innerHTML='C'
    }
    DisplayShow();
}
function PlusMinus(){
    currentOperant=currentOperant*-1;
    DisplayShow();
}

function Calculate() {
    const previus = parseFloat(previusOperant);
    const current = parseFloat(currentOperant);
    if (operation) return;
    if (isNaN(previus)|| isNaN(current))return;
    switch(operation){
        case "+":
            result = previus + current;
            break;
        case "-":
            result = previus - current;
            break;
        case "*":
            result = previus * current;
            break;
        case "/":
            result = previus / current;
            break;
        default:
            break;
    }
    // if (isNaN())
    currentOperant=result;
    previusOperant='';
    console.log("sonuc",previusOperant);
    DisplayShow();
    temporaryOperand=currentOperant;
}

acButton.addEventListener("click", ()=>ClearAll())
pmButton.addEventListener("click", ()=>PlusMinus())

additionButton.addEventListener("click", ()=>{
    ChooseOperation("+");
    console.log("kalam")
})
subtractionButton.addEventListener("click", ()=>{
    ChooseOperation("-")
})
divisionButton.addEventListener("click", ()=>{
    ChooseOperation("/")
})
multiplicationButton.addEventListener("click", ()=>{
    ChooseOperation("*")
})

for (let i = 0; i < numberArray.length; i++) {
    const number = numberArray[i];
    number.addEventListener("click", ()=>{
        console.log("Number ", i)
        AppendNumber(i);
        temporaryOperand='';
    })
    
}
decimalButton.addEventListener("click", ()=>{
    AppendNumber(".");
})
equalButton.addEventListener("click", ()=>Calculate());
