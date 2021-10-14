//
//    cat.js   (version 6)
//

// Declarations __________________________________________________

const cat = document.getElementById('cat_sprite');
const width = window.innerWidth;
const height = window.innerHeight;
log(height);

let cat_pos = [200, 100];
let is_moving = false;

let dir = { left: false,
            right: false,
            up: false,
            down: false };
// let go_left  = false;
// let go_right = false;
// let go_up    = false;
// let go_down  = false;

const move_delay = 20;
const sprite_delay = 100;
const move_amt = 3;

// __________________________________

function isStopped() {
	if (dir.left  == false && dir.right == false 
	 && dir.up == false    && dir.down  == false) {
		return true;
	} else { return false; }
} 

// Movement __________________________________________________

let move_timer = null;

function MoveCat() {
	if (dir.left  == true) { cat_pos[0] -= move_amt; }
	if (dir.right == true) { cat_pos[0] += move_amt; }
	if (dir.up    == true) { cat_pos[1] -= move_amt; }
	if (dir.down  == true) { cat_pos[1] += move_amt; }


// ----- let vh_pixels = Math.round(window.innerHeight / 100)

	// if (TexNum(cat.style.left) < -350) {
 //    cat_pos[0] = width - 150;
	// } else if (TexNum(cat.style.left) > width - 150) {
 //    cat_pos[0] = -350;
 //  }

 //  if (TexNum(cat.style.top) < -150) {
 //    cat_pos[1] = height;
 //  } else if (TexNum(cat.style.top) > height) {
 //    cat_pos[1] = -150;
 //  }

  cat.style.left = cat_pos[0];
  cat.style.top  = cat_pos[1];
//  log('Cat moved.')
}


function CatGo() {
  if (!is_moving) { MoveCat(); PoseCat(); } //pointCat(); updatePose(); }
  if (move_timer) return;
  move_timer = setInterval(MoveCat, move_delay);
}

function CatStop() {
  if (isStopped()) {
    clearInterval(move_timer);
    move_timer = null;
  }
//  log(isStopped());
  // log(width);
  // log(height);
  // log(cat.style.left);
  // log(cat.style.top);
  // log(FindTopLeft('cat_sprite'));
}


