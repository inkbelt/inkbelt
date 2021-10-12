//
//    flashcards.js
//


let num1;
let num2;
let num3;
let num4;
let num1_id = document.getElementById('num1');
let num2_id = document.getElementById('num2');
let feedback = '';
let operand;
let operand_id = document.getElementById('operand');
let operands = ['+'];
let answer;
let response;
let response_id = document.getElementById('response');
let thinking = 0;
let feedback_id = document.getElementById('feedback');

// let level = 'easy';  // 'easy' 'medium' 'hard'

// operands = ['+'];


NewCard();
//	FocusCursor();

function NewCard() {
	console.log('New Card.');
  CreateNumbers();
  ChooseOperand();
	NoNegatives();
	GetAnswer();
	response = 0;
	num1_id.innerHTML = num1;
	operand_id.innerHTML = operand;
	num2_id.innerHTML = num2;
	UpdateResponse();
	setTimeout(function() { ClearFeedback(); }, 700);
}


//const randomElement = array[Math.floor(Math.random() * array.length)];


function CreateNumbers() {
	if (easy.self.innerHTML == 'Easy') {
	num1 = Math.floor(Math.random() * 6);
	num2 = Math.floor(Math.random() * 6);
	} else if (easy_value == 'Medium') {
	num1 = Math.floor(Math.random() * 9 + 4);
	num2 = Math.floor(Math.random() * 6 + 3);
	} else {
	num1 = Math.floor(Math.random() * 7 + 9);
	num2 = Math.floor(Math.random() * 7 + 5);
	}
}


function ChooseOperand() {
	operand = operands[Math.floor(Math.random() * operands.length)];
	console.log(operand);
}

function NoNegatives() {
	if (operand == '-' && num2 > num1) {
		num3 = num1; num1 = num2; num2 = num3; // swap numbers
	}
}

function DivideIt() {
	num3 = num1 * num2;
	answer = num1;
	num1 = num3;
	//return num4;
}

function GetAnswer() {
	if (operand == '+') {	answer = num1 + num2; }
	if (operand == '-') {	answer = num1 - num2; }
	if (operand == 'x') {	answer = num1 * num2; }
	if (operand == '&divide;') { DivideIt(); }
}

function ClearFeedback() {
	feedback = '';
	feedback_id.innerHTML = feedback;
	console.log('Feedback cleared.');
}

function UpdateFeedback() {
	feedback_id.innerHTML = feedback;
	console.log('Feedback updated.');
}

function UpdateResponse() {
	setTimeout(function() {
		thinking = 0;
		FocusCursor();
		response_id.value = '';
		console.log('Response updated.');
	}, 200);
}

function FocusCursor() {
	response_id.focus();
}

document.onkeydown = function() {	 // Enter key submits
  if (window.event.keyCode == '13') {
  	if (thinking != 1) { Submit(); }
  }
}

function Submit() {
	thinking = 1;
	FocusCursor();
	response = response_id.value;
	console.log('Submitted. Response:  '+response+'.  Answer:  '+answer+'.');
	if (response == answer) {
		feedback = 'Correct!';
		console.log('        CORRECT');
		UpdateFeedback();
		NewCard();
	} else {
		feedback = 'Try again.';
		console.log('       INCORRECT');
		UpdateFeedback();
		UpdateResponse();
		setTimeout(function() {
			ClearFeedback();
		}, 700);
	}
}
