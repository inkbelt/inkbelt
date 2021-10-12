//
//
//    cat.js   (version 6)
//
//

// Helpers _________________________________________________

let long_log = '';

function log(short_log) {
  long_log = long_log + ' ' + short_log;
	console.clear();
	console.log(long_log);
}

function texNum(input) {
  return parseInt(input, 10);
}

function findTopLeft(element) {
  var rec = document.getElementById(element).getBoundingClientRect();
  return {top: rec.top + window.scrollY, left: rec.left + window.scrollX};
} //call it like findTopLeft('#header');


log('AnimateIt5');


// Declarations __________________________________________________

const cat = document.getElementById('cat_sprite');
const width = window.innerWidth;
const height = window.innerHeight;
log(height);

let cat_pos = [200, 100];
let is_moving = false;

let go_left  = false;
let go_right = false;
let go_up    = false;
let go_down  = false;

const move_delay = 20;
const sprite_delay = 100;
const move_amt = 3;


// Key Bindings _____________________________________________

document.onkeydown = function() {  //   KEY DOWN
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

document.onkeyup = function() {    //    KEY UP
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
	if (go_left  == false && go_right == false 
	 && go_up == false    && go_down  == false) {
		return true;
	} else { return false; }
} 

// Movement __________________________________________________

let move_timer = null;

function moveCat() {
	if (go_left  == true) { cat_pos[0] -= move_amt; }
	if (go_right == true) { cat_pos[0] += move_amt; }
	if (go_up    == true) { cat_pos[1] -= move_amt; }
	if (go_down  == true) { cat_pos[1] += move_amt; }

	if (texNum(cat.style.left) < -350) {
    cat_pos[0] = width - 150;
	} else if (texNum(cat.style.left) > width - 150) {
    cat_pos[0] = -350;
  }

  if (texNum(cat.style.top) < -150) {
    cat_pos[1] = height;
  } else if (texNum(cat.style.top) > height) {
    cat_pos[1] = -150;
  }

  cat.style.left = cat_pos[0];
  cat.style.top  = cat_pos[1];
}


function catGo() {
  if (!is_moving) { moveCat(); poseCat(); } //pointCat(); updatePose(); }
  if (move_timer) return;
  move_timer = setInterval(moveCat, move_delay);
}

function catStop() {
  log(width);
  log(height);
  log(cat.style.left);
  log(cat.style.top);
  log(findTopLeft('cat_sprite'))
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
	position = pos_left; // - 150;
	min_pos = min_left;
	direction = 'left';
}

function pointRight() {
	pos_1 = pos_right;
	position = pos_right; // - 150;
	min_pos = min_right;
	direction = 'right';
}

function pointCat() {
	if (!is_moving && go_left  ) { pointLeft();  }
	if (!is_moving && go_right ) { pointRight(); }

	if (is_moving && go_left  && direction == 'right' ) {	pointLeft(); }
	if (is_moving && go_right && direction == 'left' )  { pointRight(); }
}

function updatePose() {                   // draw sprite
	cat.style.backgroundPosition = position + 'px 0px';
}

function poseCat() {                      // main sprite engine
	pointCat();
	updatePose();
	if (position <= min_pos) {
		position = pos_1;                     // reset position
	} else {
		position = position - frame_offset;   // change position
	}
}

function spriteGo() {                     // call poseCat() in timer
	if (!is_moving) {
		is_moving = true;
		sprite_timer = setInterval(poseCat, sprite_delay);
	}
}

function spriteStop() {
	if (isStopped()) {
		clearInterval(sprite_timer);
		sprite_timer = null;
		is_moving = false;
	}
}
