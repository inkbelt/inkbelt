//
//
//    Calculate.js
//
//

var num1;
var num2;
var num3;
var feedback = '';
var operand;
var answer;
var response;
var thinking = 0;

var level = 'easy'

NewCard();
//	FocusCursor();

function NewCard() {
	console.log('New Card.');
	num1 = Math.floor(Math.random() * 6);
	num2 = Math.floor(Math.random() * 3);
	operand = ChooseOperand();
	NoNegatives();
	answer = GetAnswer();
	response = 0;
	document.getElementById('num1').innerHTML = num1;
	document.getElementById('operand').innerHTML = operand;
	document.getElementById('num2').innerHTML = num2;
	UpdateResponse();
	setTimeout(function() { ClearFeedback(); }, 700);
}

function ChooseOperand() {
	var decider = Math.random();
	if (decider < 0.5) { return '+'; } else {
	if (level == 'easy') { return '+'; } else {	return '-'; }
	}
}

function NoNegatives() {
	if (operand == '-' && num2 > num1) {
		num3 = num1; num1 = num2; num2 = num3; // swap numbers
	}
}

function GetAnswer() {
	if (operand == '+') {
		return num1 + num2;
	} else {
		return num1 - num2;
	}
}

function ClearFeedback() {
	feedback = '';
	document.getElementById('feedback').innerHTML = feedback;
	console.log('Feedback cleared.');
}

function UpdateFeedback() {
	document.getElementById('feedback').innerHTML = feedback;
	console.log('Feedback updated.');
}

function UpdateResponse() {
	setTimeout(function() {
		thinking = 0;
		FocusCursor();
		document.getElementById('response').value = '';
		console.log('Response updated.');
	}, 200);
}

function FocusCursor() {
	document.getElementById('response').focus();
}

document.onkeydown = function() {	 // Enter key submits
  if (window.event.keyCode == '13') {
  	if (thinking != 1) { Submit(); }
  }
}

function Submit() {
	thinking = 1;
	FocusCursor();
	response = document.getElementById('response').value;
	console.log('Submitted. Response:  '+response+'.  Answer:  '+answer+'.');
	if (response == answer) {
		feedback = 'Correct!';
		console.log('       CORRECT');
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
