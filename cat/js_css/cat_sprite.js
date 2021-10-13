//
//    cat_sprite.js
//

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

function PointLeft() {
	pos_1 = pos_left;
	position = pos_left; // - 150;
	min_pos = min_left;
	direction = 'left';
}

function PointRight() {
	pos_1 = pos_right;
	position = pos_right; // - 150;
	min_pos = min_right;
	direction = 'right';
}

function PointCat() {
	if (!is_moving && dir.left  ) { PointLeft();  }
	if (!is_moving && dir.right ) { PointRight(); }

	if (is_moving && dir.left  && direction == 'right' ) {	PointLeft(); }
	if (is_moving && dir.right && direction == 'left' )  { PointRight(); }
}

function UpdatePose() {                   // draw sprite
	cat.style.backgroundPosition = position + 'px 0px';
}

function PoseCat() {                      // main sprite engine
	PointCat();
	UpdatePose();
	if (position <= min_pos) {
		position = pos_1;                     // reset position
	} else {
		position = position - frame_offset;   // change position
	}
}

function SpriteGo() {                     // call poseCat() in timer
	if (!is_moving) {
		is_moving = true;
		sprite_timer = setInterval(PoseCat, sprite_delay);
	}
}

function SpriteStop() {
	if (isStopped()) {
		clearInterval(sprite_timer);
		sprite_timer = null;
		is_moving = false;
	}
}
