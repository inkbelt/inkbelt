//
//    buttons.js
//



window.addEventListener("load", FixButtonColors);


const color_on = '#eee';
const color_off = '#aaa';



let plus = { active: true,
             content: '+',
             style: document.getElementById('plus').style };
let minus = { active: false, 
              content: '-',
              style: document.getElementById('minus').style };
let multiply = { active: false, 
              content: 'x',
              style: document.getElementById('multiply').style };
let divide = { active: false, 
              content: '&divide;',
              style: document.getElementById('divide').style };

let help = { active: false,
             style: document.getElementById('help').style };
let level = { //level: 'Easy',
             //style: document.getElementById('level').style,
             self: document.getElementById('level') };

// let level_value = level.self.innerHTML;

let op_objects = [plus, minus, multiply, divide];

// let difficulty_objects = [level];



function FixColor(symbol) {
  if (symbol.active == true) {
    symbol.style.background = color_on;
  } else {
    symbol.style.background = color_off;
  }
}

function FixButtonColors() {
  op_objects.forEach(function(symbol){
    FixColor(symbol);
  });
  FixColor(help);
  // difficulty_objects.forEach(function(symbol){
  //   FixColor(symbol);
  // });
}


function Help_Go() {
  LogIt('help go');
  if (help.active == true) {
    help.active = false;
    help.style.background = color_off;
  } else {
    help.active = true;
    help.style.background = color_on;
  }
  UpdateFeedback();
  FocusCursor();
}

function Level_Go() {
  if (level.self.innerHTML == 'Easy') {
    level.self.innerHTML = 'Medium';
  } else if (level.self.innerHTML == 'Medium') {
    level.self.innerHTML = 'Hard';
  } else {
    level.self.innerHTML = 'Easy';
  }
  LogIt(level.self.innerHTML);
  NewCard();
  // document.getElementById('level').innerHTML = "hello";
}


function Op_Go(symbol) {
  FocusCursor();
  if (symbol.active == true) {
    if (operands.length == 1) { return; }
    symbol.active = false;
    symbol.style.background = color_off;
  } else {
    symbol.active = true;
    symbol.style.background = color_on;
  }
  LogIt(symbol);
  UpdateOperands();
  NewCard();
}

// function Plus_Go() { Op_Go(plus); }
// function Minus_Go() { Op_Go(minus); }
// function Multiply_Go() { Op_Go(multiply); }
// function Divide_Go() { Op_Go(divide); }


function UpdateOperands() {
  operands = [];
  op_objects.forEach(function(symbol){
    if (symbol.active == true) {
      operands.push(symbol.content);
    }
    LogIt(operands.length)
  });
  // if (operands.length == 0) {
  //   plus.active = true;
  //   plus.style.background = color_on;
  //   operands = ['+'];
  // }
}





// function FocusCursor() {
//   document.getElementById('response').focus();
// }

