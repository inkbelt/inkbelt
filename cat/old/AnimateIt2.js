//
//
//    AnimateIt.js   version 2
//
//


const style_declaration = document.getElementById('cat_sprite').style;
console.log(style_declaration);

let long_log = '';

function LogIt(short_log) {
	long_log = long_log + ' ' + short_log
	console.log(long_log);
}


let cat_pos = [150, 150];
let moving = false;

let go_left = false;
let go_right = false;
let go_up = false;
let go_down = false;



function goLeft() {
	let count = 0;
	while (count < 10) {
		setTimeout(function() {
			cat_pos[0] -= 1;
				document.getElementById('cat_sprite').style.left = cat_pos[0];
				document.getElementById('cat_sprite').style.top = cat_pos[1];
			}, 100);
		count++;
	}
	console.log('Go left.')
}

function goRight() {
		cat_pos[0] += 10;
		document.getElementById('cat_sprite').style.left = cat_pos[0];
		document.getElementById('cat_sprite').style.top = cat_pos[1];
		console.log('Go right.')
}

function goUp() {
		cat_pos[1] -= 10;
		document.getElementById('cat_sprite').style.left = cat_pos[0];
		document.getElementById('cat_sprite').style.top = cat_pos[1];
		console.log('Go up.')
}

function goDown() {
		cat_pos[1] += 10;
		document.getElementById('cat_sprite').style.left = cat_pos[0];
		document.getElementById('cat_sprite').style.top = cat_pos[1];
		console.log('Go down.')
}



document.onkeydown = function() {
	switch(window.event.key) {
		case 'j': goLeft(); animateGo(); break;
		case 'l': goRight(); animateGo(); break;
		case 'i': goUp(); animateGo(); break;
		case 'k': goDown(); animateGo(); break;
	}
}


document.onkeyup = function() {
	switch(window.event.key) {
		case 'j': goLeft(); animateStop(); break;
		case 'i': goUp(); animateStop(); break;
		case 'k': goDown(); animateStop(); break;
		case 'l': goRight(); animateStop(); break;
	}
}


/* document.onkeydown = function() {
	switch(window.event.keyCode) {
		case '37': GoLeft();
		case '38': GoUp();
		case '39': GoRight();
		case '40': GoDown();
	}
} */




document.onkeypress = function() {	 // key bindings
	switch(window.event.key) {
		case 'p':  location.reload(); break;
		case 'y':  y(); break;

		case 'q':  q(); break;
		case 'w':  w(); break;
		case 'e':  e(); break;
		case 'r':  r(); break;

		case 'a':  a(); break;
		case 's':  s(); break;
		case 'd':  d(); break;
		case 'f':  f(); break;

		case 'z':  z(); break;
		case 'x':  x(); break;
		case 'c':  c(); break;
		case 'v':  v(); break;

	}
}


function y() {	LogIt('y down');
	document.getElementById('cat_sprite').style.left = '0px';
	document.getElementById('cat_sprite').style.top = '0px';
}





function q() {	LogIt('q');
	document.getElementById('cat_sprite').style.left = '50px';
	document.getElementById('cat_sprite').style.top = '50px';
}
function w() {	LogIt('w');
	document.getElementById('cat_sprite').style.left = '100px';
	document.getElementById('cat_sprite').style.top = '50px';
}
function e() {	LogIt('e');
	document.getElementById('cat_sprite').style.left = '150px';
	document.getElementById('cat_sprite').style.top = '50px';
}
function r() {	LogIt('r');
	document.getElementById('cat_sprite').style.left = '200px';
	document.getElementById('cat_sprite').style.top = '50px';
}

function a() {	LogIt('a');
	document.getElementById('cat_sprite').style.left = '50px';
	document.getElementById('cat_sprite').style.top = '100px';
}
function s() {	LogIt('s');
	document.getElementById('cat_sprite').style.left = '100px';
	document.getElementById('cat_sprite').style.top = '100px';
}
function d() {	LogIt('d');
	document.getElementById('cat_sprite').style.left = '150px';
	document.getElementById('cat_sprite').style.top = '100px';
}
function f() {	LogIt('f');
	document.getElementById('cat_sprite').style.left = '200px';
	document.getElementById('cat_sprite').style.top = '100px';
}

function z() {	LogIt('z');
	document.getElementById('cat_sprite').style.left = '50px';
	document.getElementById('cat_sprite').style.top = '150px';
}
function x() {	LogIt('x');
	document.getElementById('cat_sprite').style.left = '100px';
	document.getElementById('cat_sprite').style.top = '150px';

}
function c() {	LogIt('c');
	document.getElementById('cat_sprite').style.left = '150px';
	document.getElementById('cat_sprite').style.top = '150px';

}
function v() {	LogIt('v');
	document.getElementById('cat_sprite').style.left = '200px';
	document.getElementById('cat_sprite').style.top = '150px';
}





var clear_set;	 // variable used to clear setInterval()


function animateStop() {
	console.log('Stop animation.')
	clearInterval(clear_set);
	moving = false;
}


function animateGo() {
	console.log('Begin animation.')
	if (moving == false) {
		moving = true;
		var    position = 150;	// start position for the image slicer
		const  interval = 100;	// 100 ms of interval for the setInterval()
		const  diff = 150;		// diff as a variable for position offset

		// we use the ES6 template literal to insert the variable "position"

		clear_set = setInterval ( () => {
			document.getElementById("cat_sprite").style.backgroundPosition = 
			`-${position}px 0px`; 

			if (position < 1500) {
				position = position + diff;

			} else {
				position = 150;		// reset the position to 150px
			}
		}

		, interval );	// end of setInterval
	}
}					// end of animateGo()


