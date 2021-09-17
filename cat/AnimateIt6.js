//
//
//    AnimateIt6.js   version 6
//
//


console.log('AnimateIt6');
const style_declaration = document.getElementById('cat_sprite').style;
console.log(style_declaration);

let long_log = '';

function LogIt(short_log) {
	long_log = long_log + ' ' + short_log
	console.log(long_log);
}

// Declarations __________________________________________________

let cat = document.getElementById('cat_sprite');

let cat_pos = [150, 150];
let moving = false;

let go_left  = false;
let go_right = false;
let go_up    = false;
let go_down  = false;

let move_timer;

let anim_delay = 200;

var anim_timer;



function catMove() {
	if (go_left  == true) { cat_pos[0] -= 10; }
	if (go_right == true) { cat_pos[0] += 10; }
	if (go_up    == true) { cat_pos[1] -= 10; }
	if (go_down  == true) { cat_pos[1] += 10; }
	cat.style.left = cat_pos[0];
	cat.style.top  = cat_pos[1];
}

function catGo() {
  // console.log(go_left +' '+ go_right +' '+ go_up +' '+ go_down);
  if(anim_timer) return;
  anim_timer = setInterval(catMove, 100);
	console.log('Cat go.');
}




document.onkeydown = function() {
	switch(window.event.key) {
		case 'j': go_left  = true; catGo(); animateGo(); break;
		case 'l': go_right = true; catGo(); animateGo(); break;
		case 'i': go_up    = true; catGo(); animateGo(); break;
		case 'k': go_down  = true; catGo(); animateGo(); break;
	}
}


document.onkeyup = function() {
	switch(window.event.key) {
		case 'j': go_left  = false; animateStop(); break;
		case 'l': go_right = false; animateStop(); break;
		case 'i': go_up    = false; animateStop(); break;
		case 'k': go_down  = false; animateStop(); break;
	}
}


// Sprite Animation _____________________________

var clear_set;	 // used to clear setInterval()

function animateStop() {
//	console.log('Stop animation.')
	clearInterval(clear_set);
	clear_set = null;
	moving = false;
}

function animateGo() {
//	console.log('Begin animation.')
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


