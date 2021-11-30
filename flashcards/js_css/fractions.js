//
//    flashcards.js
//

const debug = 0;
let longLog = '';
function log(shortLog) {
  if (debug == true) {
    longLog = longLog + ' ' + shortLog;
    console.log(longLog);
  } 
}


let num1 = 1;
let num2 = 1;
let den1 = 1;
let den2 = 1;
let num1ID = document.getElementById('num1');
let num2ID = document.getElementById('num2');
let den1ID = document.getElementById('den1');
let den2ID = document.getElementById('den2');
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

newCard();

function newCard() {
  log('\n\nNew Card.\n');
  adjustMultipliers();
  chooseMultiplier();
  createNumbers();
  // makeAnswer();

  // createNumbers();


  // getAnswer();
  // response = 0;
  num1ID.innerHTML = num1;
  // num2ID.innerHTML = num2;
  den1ID.innerHTML = den1;
  den2ID.innerHTML = den2;
  updateResponse();
  setTimeout(clearFeedback, 300);

  // chooseOperand();
  // operandID.innerHTML = operand;
  // num2Parentheses();
}

function pickFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
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
    noImpropers();
  } else if (level.self.innerHTML === 'Medium') {
    num1 = Math.floor(Math.random() * 12); //(9 + 12*negify) + 4 - 12*negify);
    den1 = Math.floor(Math.random() * 12 + 1); //(9 + 12*negify) + 4 - 12*negify);
  } else {
    num1 = Math.floor(Math.random() * 16); //(4 + 15*negify) + 12 - 15*negify);
    den1 = Math.floor(Math.random() * 16 + 1); //(4 + 15*negify) + 12 - 15*negify);
  }
  den2 = den1 * multiplier;
  answer = num1 * multiplier;
}

function noImpropers() {
  if (num1 > den1) {
    num2 = num1; num1 = den1; den1 = num2; // swap numbers
  }
  if (num1 == den1) {
    num1 -= 1;
  }
}

function getAnswer() {
  answer = 5;
  // if (operand == '+') {  answer = num1 + num2; }
  // if (operand == '&ndash;') {  answer = num1 - num2; }
  // if (operand == 'x') {  answer = num1 * num2; }
  // if (operand == '&divide;') { divideIt(); }
}

function helpInfo() {
  if (help.active == true) {
  feedbackID.innerHTML = num1 + '/' + den1 + '  =  ' +
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
