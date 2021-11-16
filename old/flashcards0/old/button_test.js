//
//    button_test.js
//



window.addEventListener("load", FixButtonColors);


const color_on = '#eee';
const color_off = '#aaa';



let plus = { active: true,
             operand: '+',
             style: document.getElementById('plus').style };
let minus = { active: false, 
              operand: '-',
              style: document.getElementById('minus').style };
let multiply = { active: false, 
              operand: 'x',
              style: document.getElementById('multiply').style };
let divide = { active: false, 
              operand: '&divide;',
              style: document.getElementById('divide').style };

let operand_objects = [plus, minus, multiply, divide];

function FixColor(symbol) {
  if (symbol.active == true) {
    symbol.style.background = color_on;
  } else {
    symbol.style.background = color_off;
  }
}

function FixButtonColors() {
  operand_objects.forEach(function(symbol){
    FixColor(symbol);
  })
  // FixColor(plus);
  // FixColor(minus);
  // FixColor(multiply);
  // FixColor(divide);
}



function OperButton_Go(symbol) {
  FocusCursor();
  if (symbol.active == true) {
    if (operands.length == 1) { return; }
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

function Plus_Go() { OperButton_Go(plus); }
function Minus_Go() { OperButton_Go(minus); }
function Multiply_Go() { OperButton_Go(multiply); }
function Divide_Go() { OperButton_Go(divide); }


function UpdateOperands() {
  operands = [];
  operand_objects.forEach(function(symbol){
    if (symbol.active == true) {
      operands.push(symbol.operand);
    }
    console.log(operands.length)
  })
  // if (operands.length == 0) {
  //   plus.active = true;
  //   plus.style.background = color_on;
  //   operands = ['+'];
  // }
}





function FocusCursor() {
  document.getElementById('response').focus();
}

