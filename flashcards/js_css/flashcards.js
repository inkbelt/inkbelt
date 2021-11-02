//
//    flashcards.js
//

const debug = false;
let longLog = '';
function log(shortLog) {
	if (debug == true) {
		longLog = longLog + ' ' + shortLog;
		console.log(longLog);
	} 
}


let num1;
let num2;
let num3;
let num4;
let num1ID = document.getElementById('num1');
let num2ID = document.getElementById('num2');
let feedback = '';
let operand;
let operandID = document.getElementById('operand');
let operands = ['+'];
let answer;
let response;
let responseID = document.getElementById('response');
let thinking = 0;
let feedbackID = document.getElementById('feedback');

// let level = 'easy';  // 'easy' 'medium' 'hard'

// operands = ['+'];


newCard();
//	FocusCursor();

function newCard() {
	log('\n\nNew Card.\n');
  createNumbers();
  chooseOperand();
	noNegatives();
	getAnswer();
	response = 0;
	num1ID.innerHTML = num1;
	operandID.innerHTML = operand;
	num2ID.innerHTML = num2;
	updateResponse();
	setTimeout(function() { clearFeedback(); }, 700);
}


//const randomElement = array[Math.floor(Math.random() * array.length)];


function createNumbers() {
	if (level.self.innerHTML == 'Easy') {
	num1 = Math.floor(Math.random() * 6);
	num2 = Math.floor(Math.random() * 6);
	} else if (level.self.innerHTML == 'Medium') {
	num1 = Math.floor(Math.random() * 9 + 4);
	num2 = Math.floor(Math.random() * 6 + 3);
	} else {
	num1 = Math.floor(Math.random() * 4 + 12);
	num2 = Math.floor(Math.random() * 8 + 5);
	}
}


function chooseOperand() {
	operand = operands[Math.floor(Math.random() * operands.length)];
	log(operand);
}

function noNegatives() {
	if (negatives.active == false) {
		if (operand == '-' && num2 > num1) {
			num3 = num1; num1 = num2; num2 = num3; // swap numbers
		}
	}
}

function divideIt() {
	num3 = num1 * num2;
	answer = num1;
	num1 = num3;
	//return num4;
}

function getAnswer() {
	if (operand == '+') {	answer = num1 + num2; }
	if (operand == '-') {	answer = num1 - num2; }
	if (operand == 'x') {	answer = num1 * num2; }
	if (operand == '&divide;') { DivideIt(); }
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
	setTimeout(HelpInfo, 700);
}

function updateResponse() {
	setTimeout(function() {
		thinking = 0;
		focusCursor();
		responseID.value = '';
		log('Response updated.');
	}, 200);
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
	thinking = 1;
	focusCursor();
	response = responseID.value;
	log('Submitted. Response:  '+response+'.  Answer:  '+answer+'.');
	if (response == answer) {
		feedback = 'Correct!';
		log(' CORRECT ');
		updateFeedback();
		newCard();
	} else {
		feedback = 'Try again.';
		log(' INCORRECT ');
		updateFeedback();
		updateResponse();
		setTimeout(clearFeedback, 700);
	}
}
