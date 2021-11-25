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
let num3 = 1;
let negify = 0;
// let num4;
let num1ID = document.getElementById('num1');
let num2ID = document.getElementById('num2');
let feedback = '';
let operand = '+';
let operandID = document.getElementById('operand');
let operands = ['+'];
let answer = 1;
let response = 1;
let responseID = document.getElementById('response');
let thinking = false;
let feedbackID = document.getElementById('feedback');

newCard();

function newCard() {
	log('\n\nNew Card.\n');
	// playCorrect();
  createNumbers();
  chooseOperand();
	noNegatives();
	getAnswer();
	response = 0;
	num1ID.innerHTML = num1;
	operandID.innerHTML = operand;
	num2Parentheses();
	num2ID.innerHTML = num2;
	updateResponse();
	setTimeout(clearFeedback, 300);
}

function pickFromArray(array) {
	return array[Math.floor(Math.random() * array.length)];
}

function createNumbers() {
	if (level.self.innerHTML === 'Easy') {
	num1 = Math.floor(Math.random() * (6 + 6*negify) - 6*negify);
	num2 = Math.floor(Math.random() * (6 + 6*negify) - 6*negify);
	} else if (level.self.innerHTML === 'Medium') {
	num1 = Math.floor(Math.random() * (9 + 12*negify) + 4 - 12*negify);
	num2 = Math.floor(Math.random() * (6 + 12*negify) + 3 - 12*negify);
	} else {
	num1 = Math.floor(Math.random() * (4 + 15*negify) + 12 - 15*negify);
	num2 = Math.floor(Math.random() * (8 + 15*negify) + 5 - 15*negify);
	}
}

function num2Parentheses() {
	if (num2 < 0) {	num2 = '(' + num2 + ')'; }
}


//const randomElement = array[Math.floor(Math.random() * array.length)];
function chooseOperand() {
	operand = pickFromArray(operands);
	log(operand);
}

function noNegatives() {
	if (negatives.active == false &&
      operand == '&ndash;' && num2 > num1) {
			  num3 = num1; num1 = num2; num2 = num3; // swap numbers
	}
}

function divideIt() {
	num3 = num1 * num2;
	answer = num1;
	num1 = num3;				// WHAT ABOUT ZERO?!!!
	if (num2 === 0) {answer = 0;}
}

function getAnswer() {
	if (operand == '+') {	answer = num1 + num2; }
	if (operand == '&ndash;') {	answer = num1 - num2; }
	if (operand == 'x') {	answer = num1 * num2; }
	if (operand == '&divide;') { divideIt(); }
}

function helpInfo() {
	if (help.active == true) {
	feedbackID.innerHTML = num1 + ' '
			+ operand + ' ' + num2 + ' = '
			+ answer;
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

// document.onkeydown = function() {	 // Enter key submits
//   if (window.event.keyCode == '13') {
//   	if (thinking != 1) { Submit(); }
//   }
// }

function submit() {
	thinking = true;
	focusCursor();
	response = responseID.value;
	log('Submitted. Response:  '+response+'.  Answer:  '+answer+'.');
	if (response == answer) {
		feedback = 'Correct!';
		playCorrect();
		log(' CORRECT ');
		updateFeedback();
		newCard();
	} else {
		feedback = 'Try again.';
		playWrong();
		log(' INCORRECT ');
		updateFeedback();
		updateResponse();
		setTimeout(clearFeedback, 500);
	}
}
