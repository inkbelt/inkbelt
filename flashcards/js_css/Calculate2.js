//
//    Calculate2.js
//

var num1;
var num2;
var num3;
var num4;
var feedback = '';
var operand;
var answer;
var response;
var thinking = 0;

var level = 'hard';  // 'easy' 'medium' 'hard'

var adding = true;
var subtracting = true;
var multiplying = true;
var dividing = true;




NewCard();
//	FocusCursor();

function NewCard() {
	console.log('New Card.');
	num1 = Math.floor(Math.random() * 9 + 4);
	num2 = Math.floor(Math.random() * 6 + 3);
	operand = ChooseOperand();
	NoNegatives();
	GetAnswer();
	response = 0;
	document.getElementById('num1').innerHTML = num1;
	document.getElementById('operand').innerHTML = operand;
	document.getElementById('num2').innerHTML = num2;
	UpdateResponse();
	setTimeout(function() { ClearFeedback(); }, 700);
}

function ChooseOperand() {
	var decider = Math.random();
	if (decider < 0.5) { return 'x'; } else {
	if (level == 'easy') { return 'x'; } else {	return '&divide;'; }
	}
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
	if (operand == 'x') {
		answer = num1 * num2;
	} else {
		DivideIt();
//		return num1 / num2;
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
