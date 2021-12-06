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
let position = 'right';


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

function swapSides() {
  thuck.play();
  splishZap.play();
  if (position === 'right') {
    right2Left();
    position = 'left';
    swapArrow.innerHTML = '&#8652;';
  } else {
    left2Right();
    position = 'right';
    swapArrow.innerHTML = '&#8651;';
  }
}

function right2Left() {
  numerator1.removeChild(num1ID);
  numerator2.removeChild(responseID);
  numerator1.appendChild(responseID);
  numerator2.appendChild(num1ID);
  denominator1.removeChild(den1ID);
  denominator2.removeChild(den2ID);
  denominator1.appendChild(den2ID);
  denominator2.appendChild(den1ID);
  focusCursor();
}

function left2Right() {
  numerator1.removeChild(responseID);
  numerator2.removeChild(num1ID);
  numerator1.appendChild(num1ID);
  numerator2.appendChild(responseID);
  denominator1.removeChild(den2ID);
  denominator2.removeChild(den1ID);
  denominator1.appendChild(den1ID);
  denominator2.appendChild(den2ID);
  focusCursor();
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
