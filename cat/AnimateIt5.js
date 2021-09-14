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

let delay = 500;



function moveCat() {
	if (go_left  == true) { cat_pos[0] -= 10; }
	if (go_right == true) { cat_pos[0] += 10; }
	if (go_up    == true) { cat_pos[1] -= 10; }
	if (go_down  == true) { cat_pos[1] += 10; }
	cat.style.left = cat_pos[0];
	cat.style.top  = cat_pos[1];
}

function goCat() {
	logIt('Go cat.');
  if(anim_timer) return;
  anim_timer = setInterval(moveCat, delay);
	console.log('Go cat.');
}

function stopCat() {
	logIt('Stop cat.');
	clearInterval(anim_timer);
}

var anim_timer;

document.onkeydown = function() {
	switch(window.event.key) {
		case 'j': go_left  = true; goCat(); spriteGo(); break;
		case 'l': go_right = true; goCat(); spriteGo(); break;
		case 'i': go_up    = true; goCat(); spriteGo(); break;
		case 'k': go_down  = true; goCat(); spriteGo(); break;
	}
}


document.onkeyup = function() {
	switch(window.event.key) {
		case 'j': go_left  = false; stopCat(); spriteStop(); break;
		case 'l': go_right = false; stopCat(); spriteStop(); break;
		case 'i': go_up    = false; stopCat(); spriteStop(); break;
		case 'k': go_down  = false; stopCat(); spriteStop(); break;
	}
}


// Sprite Animation ___________________________________________

let sprite_timer;

let   pos_left = 1200;	   // start position for image slicer
const min_left = 900;
let   pos_right = 750;
const min_right = 450;

const blink_left = 300;
const blink_right = 150;


let pos_1 = 1200;
let position = 1200;
let min_pos = 150;


const frame_offset = 150;



function spriteGo() {       // console.log('Begin animation.');
	logIt('Sprite go.');
	if (moving == false) {
		moving = true;
		sprite_timer = setInterval(poseCat, delay);
	}
}

function spriteStop() {     // console.log('Stop animation.');
	logIt('Sprite stop.');
	clearInterval(sprite_timer);
	moving = false;
}

function poseCat() {

	if (go_right == true) {
		pos_1 = pos_right;
		position = pos_right - 150;
		min_pos = min_right;

	} else if (go_left == true) {
		pos_1 = pos_left;
		position = pos_left - 150;
		min_pos = min_left;
	}

	cat.style.backgroundPosition = position + 'px 0px';
	if 
		(position <= min_pos) {
		position = pos_1;												// reset position

	} else {
		position = position - frame_offset;			// move position
	}
}






