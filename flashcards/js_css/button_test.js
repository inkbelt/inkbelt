//
//    button_test.js
//



window.addEventListener("load", FixButtonColors)


const color_on = '#eee';
const color_off = '#aaa';



let plus = { active: true,
             operand: '+',
             style: document.getElementById('plus').style }
let minus = { active: false, 
              operand: '-',
              style: document.getElementById('minus').style }
let multiply = { active: false, 
              operand: 'x',
              style: document.getElementById('multiply').style }
let divide = { active: false, 
              operand: '&divide;',
              style: document.getElementById('divide').style }

let operand_objects = [plus, minus, multiply, divide];

function FixColor(symbol) {
  if (symbol.active == true) {
    symbol.style.background = color_on
  } else {
    symbol.style.background = color_off
  }
}

function FixButtonColors() {
  FixColor(plus);
  FixColor(minus);
  FixColor(multiply);
  FixColor(divide);
}



function Math_Go(symbol) {
  if (symbol.active == true) {
    symbol.active = false;
    symbol.style.background = color_off;
  }
  else {
    symbol.active = true;
    symbol.style.background = color_on;
  }
  console.log(symbol);
  UpdateOperands();
}

function Plus_Go() { Math_Go(plus); }
function Minus_Go() { Math_Go(minus); }
function Multiply_Go() { Math_Go(multiply); }
function Divide_Go() { Math_Go(divide); }


function UpdateOperands() {
  operands = [];
  operand_objects.forEach(function(symbol){
    if (symbol.active == true) {
      operands.push(symbol.operand);
    }

  })
}


