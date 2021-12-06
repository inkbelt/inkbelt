//
//    flashcards.js
//

const debug = 0;
let longLog = '';
function log(shortLog) { if (debug == true) {
    longLog = longLog + ' ' + shortLog; console.log(longLog);  } }
function pickFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

let num1 = 1;
let num2 = 1;
let den1 = 1;
let den2 = 1;
let num1ID = document.getElementById('num1');
let num2ID = document.getElementById('num2');
let den1ID = document.getElementById('den1');
let den2ID = document.getElementById('den2');
let numerator1 = document.getElementById('numerator1');
let numerator2 = document.getElementById('numerator2');
let denominator1 = document.getElementById('denominator1');
let denominator2 = document.getElementById('denominator2');
let feedback = '';
let operand = '+';
let operandID = document.getElementById('operand');
let operands = ['+'];
let answer = 1;
let response = 1;
let responseID = document.getElementById('response');
let thinking = false;
let feedbackID = document.getElementById('feedback');

let easyMultipliers = [2, 3, 4, 5];
let mediumMultipliers = [6, 7, 8, 9];
let hardMultipliers = [11, 12, 13, 14];
let multipliers = easyMultipliers;
let multiplier = 1;

const swapArrow = document.getElementById('nav0d');
const vertArrow = document.getElementById('nav0v');
let position = 'right';
let vPosition = 'top';

console.log(num2ID);
newCard();

function newCard() {
  log('\n\nNew Card.\n');
  adjustMultipliers();
  chooseMultiplier();
  createNumbers();
  num1ID.innerHTML = num1;
  den1ID.innerHTML = den1;
  den2ID.innerHTML = den2;
  updateResponse();
  setTimeout(clearFeedback, 300);
}


function adjustMultipliers() {
  if (level.self.innerHTML === 'Easy') {
    multipliers = easyMultipliers;
  } else if (level.self.innerHTML === 'Medium') {
    multipliers = mediumMultipliers;
  } else {
    multipliers = hardMultipliers;
  }
}

function chooseMultiplier() {
  multiplier = pickFromArray(multipliers);
  console.log(multiplier);
}

function createNumbers() {
  if (level.self.innerHTML === 'Easy') {
    num1 = Math.floor(Math.random() * 5 + 1);
    den1 = Math.floor(Math.random() * 4 + 2);
  } else if (level.self.innerHTML === 'Medium') {
    num1 = Math.floor(Math.random() * 12);
    den1 = Math.floor(Math.random() * 12 + 1);
  } else {
    num1 = Math.floor(Math.random() * 16);
    den1 = Math.floor(Math.random() * 16 + 1);
  }
  noImpropers();
  den2 = den1 * multiplier;
  answer = num1 * multiplier;
  if (reduce.active) {
    num2 = num1;
    num1 = answer;
    answer = num2;
    num2 = den1;
    den1 = den2;
    den2 = num2;
  }
}

function noImpropers() {
  if (num1 > den1) {
    num2 = num1; num1 = den1; den1 = num2;
  }
  if (num1 == den1) {
    num1 -= 1;
  }
}

function helpInfo() {
  if (help.active == true) {
    feedbackID.innerHTML = num1 + '/' + den1 + '   =   ' +
      answer + '/' + den2;
  }
}

function clearFeedback() {
  feedback = '';
  feedbackID.innerHTML = feedback;
  log('Feedback cleared.');
  helpInfo();
}

function updateFeedback() {
  feedbackID.innerHTML = feedback;
  log('Feedback updated.');
  setTimeout(helpInfo, 300);
}

function updateResponse() {
  setTimeout(function() {
    thinking = false;
    focusCursor();
    responseID.value = '';
    log('Response updated.');
  }, 150);
}

function focusCursor() {
  responseID.focus();
}

function submit() {
  thinking = true;
  focusCursor();
  response = responseID.value;
  log('Submitted. Response:  '+response+'.  Answer:  '+answer+'.');
  if (response == answer) {
    feedback = 'Correct!';
    log(' CORRECT ');
    playCorrect();
    updateFeedback();
    newCard();
  } else {
    feedback = 'Try again.';
    log(' INCORRECT ');
    playWrong();
    updateFeedback();
    updateResponse();
    setTimeout(clearFeedback, 500);
  }
}


function swapSides() {
  thuck.play();
  splishZap.play();
  if (position === 'right') {
    position = 'left';
    swapArrow.innerHTML = '&#8652;';
  } else {
    position = 'right';
    swapArrow.innerHTML = '&#8651;';
  }
  side2Side();
}

function swapVertical() {
  thuck.play();
  splishZap.play();
  if (vPosition === 'top') {
    vPosition = 'bottom';
    vertArrow.innerHTML = '&#10607;';
  } else {
    vPosition = 'top';
    vertArrow.innerHTML = '&#10606;';
  }
  top2Bottom();
}

function side2Side() {
  let child1 = document.getElementById('numerator1').children[0];
  let child2 = document.getElementById('denominator1').children[0];
  let child3 = document.getElementById('numerator2').children[0];
  let child4 = document.getElementById('denominator2').children[0];
  numerator1.removeChildren;
  numerator2.removeChildren;
  numerator1.appendChild(child3);
  numerator2.appendChild(child1);
  denominator1.removeChildren;
  denominator2.removeChildren;
  denominator1.appendChild(child4);
  denominator2.appendChild(child2);
  focusCursor();  
}

function top2Bottom() {
  let child1 = document.getElementById('numerator1').children[0];
  let child2 = document.getElementById('denominator1').children[0];
  let child3 = document.getElementById('numerator2').children[0];
  let child4 = document.getElementById('denominator2').children[0];
  numerator1.removeChildren;
  denominator1.removeChildren;
  numerator1.appendChild(child2);
  denominator1.appendChild(child1);
  numerator2.removeChildren;
  denominator2.removeChildren;
  numerator2.appendChild(child4);
  denominator2.appendChild(child3);
  focusCursor();
}


