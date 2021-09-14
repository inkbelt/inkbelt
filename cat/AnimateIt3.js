//
//
//    AnimateIt.js   version 3
//
//


console.log('AnimateIt3');
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

var anim_interval;

function goRight() {
	if (go_right = false) {
		go_right = true;
		anim_interval = setInterval(function() {
			cat_pos[0] += 10;
			document.getElementById('cat_sprite').style.left = cat_pos[0];
			document.getElementById('cat_sprite').style.top = cat_pos[1];
		}, 200);

	}
	console.log('Go right.')
}



function stopRight() {
 	clearInterval(anim_interval);
	go_right = false;
	animateStop();
}


document.onkeydown = function() {
	switch(window.event.key) {
		case 'j': goLeft(); animateGo(); break;
		case 'l': animateGo(); goRight(); break;

		case 'i': goUp(); animateGo(); break;
		case 'k': goDown(); animateGo(); break;
	}
}


document.onkeyup = function() {
	switch(window.event.key) {
		case 'j': animateStop(); break;
		case 'i': animateStop(); break;
		case 'k': animateStop(); break;
		case 'l': stopRight(); break;
	}
}


// Sprite Animation _____________________________

var clear_set;	 // used to clear setInterval()

function animateStop() {
	console.log('Stop animation.')
	clearInterval(clear_set);
	moving = false;
}

function animateGo() {
	console.log('Begin animation.')
	if (moving == false) {
		moving = true;
		let    position = 150;	// start position for image slicer
//		const  interval = 100;	// 100 ms delay
		const  diff = 150;			// amount of position offset

		// we use the ES6 template literal to insert the variable "position"

		clear_set = setInterval(function() {
			document.getElementById("cat_sprite").style.backgroundPosition = 
			`-${position}px 0px`; 

			if (position < 1500) {
				position = position + diff; // move position
			} else {
				position = 150;		// reset position to 150px
			}
		}
		, 100 );	// end of setInterval

	}				// close if
}					// close function animateGo()


