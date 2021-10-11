//
//    button_test.js
//

let plus = true;
let minus = false;
let multiply = false;
let divide = false;

let plus_style = document.getElementById('plus').style
let minus_style = document.getElementById('minus').style
let multiply_style = document.getElementById('multiply').style
let divide_style = document.getElementById('divide').style


function Math_Go(sign, style) {
  console.log(sign);
  if (sign == false) {
    sign = true;
    style.background = '#eee';
  }
  else {
    sign = false;
    style.background = '#aaa';
  }
}


function Plus_Go2() {
  Math_Go(plus, plus_style);
}


function Plus_Go() {
  console.log(plus)
  if (plus == false) {
    plus = true;
    plus_style.background = '#eee';
  } 
  else {
    plus = false;
    plus_style.background = '#aaa';
  }
}



function Minus_Go() {
  if (minus == true) {
    minus = false;
    minus_style.background = '#eee';
  } else {
    minus = true;
    minus_style.background = '#aaa';
  }
  console.log(minus)
}


function Mult_Go() {
  if (multiply == true) {
    multiply = false;
    multiply_style.background = '#eee';
  } else {
    multiply = true;
    multiply_style.background = '#aaa';
  }
  console.log(multiply)
}


function Div_Go() {
  if (divide == true) {
    divide = false;
    divide_style.background = '#eee';
  } else {
    divide = true;
    divide_style.background = '#aaa';
  }
  console.log(divide)
}

