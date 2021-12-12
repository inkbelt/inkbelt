//
//    flashcards.js
//

const debug = 0;
let longLog = '';
function log(shortLog) { if (debug == true) { console.clear();
    longLog = longLog + ' ' + shortLog; console.log(longLog);  } }
function pickFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

let num1 = 1;
let num2 = 1;
let numX = 1;
let den1 = 1;
let den2 = 1;
let answer = 1;
let response = 1;
let num1ID = document.getElementById('num1');
let num2ID = document.getElementById('num2');
let den1ID = document.getElementById('den1');
let den2ID = document.getElementById('den2');
let box1 = document.getElementById('numerator1');
let box2 = document.getElementById('denominator1');
let box3 = document.getElementById('numerator2');
let box4 = document.getElementById('denominator2');
let box5 = document.getElementById('temp');
let boxes = [box1, box2, box3, box4, box5];
let child1 = box1.children[0];
let child2 = box2.children[0];
let child3 = box3.children[0];
let child4 = box4.children[0];
let child5 = box5.children[0];
let children = [child1, child2, child3, child4, child5];
let feedback = '';
let responseID = document.getElementById('response');
let thinking = false;
let feedbackID = document.getElementById('feedback');

let easyMultipliers = [2, 3, 4, 5];
let mediumMultipliers = [3, 4, 5, 6, 7, 8];
let hardMultipliers = [9, 11, 12, 13, 14, 15];
let multipliers = easyMultipliers;
let multiplier = 1;

const horizArrow = document.getElementById('nav0h');
const vertArrow = document.getElementById('nav0v');
let hPosition = 'right';
let vPosition = 'top';

newCard();

function newCard() {
  log('\nNew Card.');
  adjustMultipliers();
  chooseMultiplier();
  makeNumbers();
  noImpropers();
  makeFrac2();
  if (reduce.active) { reduceFraction(); }
  getAnswer();
  updateInnerHTML();
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
  log('Multiplier: ' + multiplier + '.');
}

function makeNumbers() {
  if (level.self.innerHTML === 'Easy') {
    num1 = Math.floor(Math.random() * 4 + 1);
    den1 = Math.floor(Math.random() * 5 + 1);
  } else if (level.self.innerHTML === 'Medium') {
    num1 = Math.floor(Math.random() * 5 + 2);
    den1 = Math.floor(Math.random() * 6 + 2);
  } else {
    num1 = Math.floor(Math.random() * 8 + 4);
    den1 = Math.floor(Math.random() * 12 + 3);
  }
}

function noImpropers() {
  if (num1 > den1) {
    numX = num1; num1 = den1; den1 = numX;
  }
  if (num1 === den1) {
    den1 += 1;
  }
}

function makeFrac2() {
  num2 = num1 * multiplier;
  den2 = den1 * multiplier;
}

function reduceFraction() {
  numX = num1;
  num1 = num2;
  num2 = numX;

  numX = den1;
  den1 = den2;
  den2 = numX;
}

function getAnswer() {  
  if (vPosition === 'top') { answer = num2;
                    } else { answer = den2; }
  console.log(answer); log('Answer: ' + answer + '.');
}

function updateInnerHTML() {
  num1ID.innerHTML = num1;
  num2ID.innerHTML = num2;
  den1ID.innerHTML = den1;
  den2ID.innerHTML = den2;
}

function helpInfo() {
  if (help.active == true) {
    if (hPosition === 'right') {
      feedbackID.innerHTML = '' +
      num1 + '/' + den1 + '   =   ' + num2 + '/' + den2;
    } else {
      feedbackID.innerHTML = '' +
      num2 + '/' + den2 + '   =   ' + num1 + '/' + den1;
    }
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
  log('Response: ' + response + '. Answer: ' + answer + '.');
  if (response == answer) {
    feedback = 'Correct!';
    log('CORRECT.');
    playCorrect();
    updateFeedback();
    newCard();
  } else {
    feedback = 'Try again.';
    log('INCORRECT.');
    playWrong();
    updateFeedback();
    updateResponse();
    setTimeout(clearFeedback, 500);
  }
}

function swapHorizontal() {
  thuck.play();
  splishZap.play();
  if (hPosition === 'right') {
    hPosition = 'left';
    horizArrow.innerHTML = '&#8652;';
  } else {
    hPosition = 'right';
    horizArrow.innerHTML = '&#8651;';
  }
  side2Side();
  clearFeedback();
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

function getChildren() {
  child1 = box1.children[0];
  child2 = box2.children[0];
  child3 = box3.children[0];
  child4 = box4.children[0];
  child5 = box5.children[0];
}

function removeChildren() {
  for (box of boxes) {
    box.removeChildren;
  }
}

function side2Side() {
  getChildren();
  removeChildren();
  box1.appendChild(child3);
  box2.appendChild(child4);
  box3.appendChild(child1);
  box4.appendChild(child2);
  box5.appendChild(child5);
  focusCursor();  
}

function top2Bottom() {
  getChildren();
  removeChildren();
  if (hPosition === 'right') {   log("RIGHT");
    if (vPosition === 'top') {   log("TOP");
      box3.appendChild(child4);
      box4.appendChild(child5);
      box5.appendChild(child3);
    } else {                     log("BOTTOM");
      box3.appendChild(child5);
      box4.appendChild(child3);
      box5.appendChild(child4);
    }
  } else {                       log("LEFT");
    if (vPosition === 'top') {   log("TOP");
      box1.appendChild(child2);
      box2.appendChild(child5);
      box5.appendChild(child1);
    } else {                     log("BOTTOM");
      box1.appendChild(child5);
      box2.appendChild(child1);
      box5.appendChild(child2);
    }
  }
  getAnswer();
  focusCursor();
}

