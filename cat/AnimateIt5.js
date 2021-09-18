//
//
//    AnimateIt5.js   version 5
//
//


// Debug Helpers _________________________________________________

console.log('AnimateIt5');
const style_declaration = document.getElementById('cat_sprite').style;
console.log(style_declaration);

let long_log = '';

function logIt(short_log) {
	long_log = long_log + ' ' + short_log;
	console.clear();
	console.log(long_log);
}

// Declarations __________________________________________________

let cat = document.getElementById('cat_sprite');

let cat_pos = [200, 100];
let moving = false;

let go_left  = false;
let go_right = false;
let go_up    = false;
let go_down  = false;

let anim_delay = 200;


// Key Bindings _____________________________________________

document.onkeydown = function() {  //    DOWN
	switch(window.event.key) {
		case 'j': go_left  = true; catGo(); spriteGo(); break;
		case 'l': go_right = true; catGo(); spriteGo(); break;
		case 'i': go_up    = true; catGo(); spriteGo(); break;
		case 'k': go_down  = true; catGo(); spriteGo(); break;

		case 'a': go_left  = true; catGo(); spriteGo(); break;
		case 'd': go_right = true; catGo(); spriteGo(); break;
		case 'w': go_up    = true; catGo(); spriteGo(); break;
		case 's': go_down  = true; catGo(); spriteGo(); break;

	}
}

document.onkeyup = function() {    //     UP
	switch(window.event.key) {
		case 'j': go_left  = false; catStop(); spriteStop(); break;
		case 'l': go_right = false; catStop(); spriteStop(); break;
		case 'i': go_up    = false; catStop(); spriteStop(); break;
		case 'k': go_down  = false; catStop(); spriteStop(); break;

		case 'a': go_left  = false; catStop(); spriteStop(); break;
		case 'd': go_right = false; catStop(); spriteStop(); break;
		case 'w': go_up    = false; catStop(); spriteStop(); break;
		case 's': go_down  = false; catStop(); spriteStop(); break;

	}
}

function isStopped() {
//	logIt("Stop check");
	if (go_left  == false
	 && go_right == false 
	 && go_up    == false 
	 && go_down  == false) {
		return true;
	} else { return false; }
} 


// Movement __________________________________________________

let move_timer = null;

function moveCat() {
	if (go_left  == true) { cat_pos[0] -= 10; }
	if (go_right == true) { cat_pos[0] += 10; }
	if (go_up    == true) { cat_pos[1] -= 10; }
	if (go_down  == true) { cat_pos[1] += 10; }
	cat.style.left = cat_pos[0];
	cat.style.top  = cat_pos[1];
}

function catGo() {
  if (move_timer) return;
  move_timer = setInterval(moveCat, anim_delay);
}

function catStop() {
  //	logIt('Cat stop.');
  //	clearInterval(move_timer);
  //  move_timer = null;
}

// Sprite Animation ___________________________________________

let sprite_timer = null;

const pos_left = 1200;	   // start position for image slicer
const min_left = 900;
const pos_right = 750;
const min_right = 450;

const blink_left = 300;
const blink_right = 150;


let pos_1 = pos_left;
let position = pos_left;
let min_pos = min_left;

let direction = 'left';

const frame_offset = 150;


function pointLeft() {
	pos_1 = pos_left;
	position = pos_left - 150;
	min_pos = min_left;
	direction = 'left';
	logIt(moving);
	logIt(direction);
}

function pointRight() {
	pos_1 = pos_right;
	position = pos_right - 150;
	min_pos = min_right;
	direction = 'right';
	logIt(moving);
	logIt(direction);
}


function pointCat() {
	logIt('POINT');
	if (!moving && go_left  ) {  pointLeft(); }
	if (!moving && go_right ) { pointRight(); }

	if (moving && go_left  && direction == 'right' ) {	pointLeft(); }
	if (moving && go_right && direction == 'left' )  { pointRight(); }
}

function spriteGo() {
	pointCat();
	if (moving == false) {
		moving = true;
		sprite_timer = setInterval(poseCat, anim_delay);
	}
}

function spriteStop() {
	if (isStopped()) {
		clearInterval(sprite_timer);
		sprite_timer = null;
		moving = false;
	}
}

function poseCat() {                      // main sprite engine
	cat.style.backgroundPosition = position + 'px 0px';
	if (position <= min_pos) {
		position = pos_1;									    // reset position
	} else {
		position = position - frame_offset;		// change position
	}
}

