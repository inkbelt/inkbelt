//
//
//    AnimateIt4.js   version 4
//
//


console.log('AnimateIt4');
const style_declaration = document.getElementById('cat_sprite').style;
console.log(style_declaration);

let long_log = '';

function LogIt(short_log) {
	long_log = long_log + ' ' + short_log
	console.log(long_log);
}


let cat_pos = [150, 150];
let moving = false;

let go_left  = false;
let go_right = false;
let go_up    = false;
let go_down  = false;

function goLeft() {
	let count = 0;
	while (count < 10) {
		setTimeout(function() {
			cat_pos[0] -= 1;
			cat.style.left = cat_pos[0];
			cat.style.top = cat_pos[1];
			}, 100);
		count++;
	}
	console.log('Go left.');
}

function goUp() {
		cat_pos[1] -= 10;
		cat.style.left = cat_pos[0];
		cat.style.top = cat_pos[1];
		console.log('Go up.');
}

function goDown() {
		cat_pos[1] += 10;
		cat.style.left = cat_pos[0];
		cat.style.top = cat_pos[1];
		console.log('Go down.');
}


let cat = document.getElementById('cat_sprite');


function moveCat() {
	if (go_left  == true) { cat_pos[0] -= 10; }
	if (go_right == true) { cat_pos[0] += 10; }
	if (go_up    == true) { cat_pos[1] -= 10; }
	if (go_down  == true) { cat_pos[1] += 10; }
	cat.style.left = cat_pos[0];
	cat.style.top  = cat_pos[1];
}

function goCat() {
  // console.log(go_left +' '+ go_right +' '+ go_up +' '+ go_down);
  if(anim_timer) return;
  anim_timer = setInterval(moveCat, 100);
	console.log('Go cat.');
}


var anim_timer;

// function moveRight() {
// 	cat_pos[0] += 10;
// 	cat.style.left = cat_pos[0];
// }

function goRight() {
  if(anim_timer) return;
  // console.log(go_left +' '+ go_right +' '+ go_up +' '+ go_down);
  anim_timer = setInterval(moveCat, 200);
	console.log('Go right.');
}

function stopRight() {
 	clearInterval(anim_timer);
 	anim_timer = null;
	spriteStop();
}


document.onkeydown = function() {
	switch(window.event.key) {
		case 'j': go_left  = true; goCat();  spriteGo(); break;
		case 'l': go_right = true; goCat(); spriteGo(); break;
		case 'i': go_up   = true;  goCat();  spriteGo(); break;
		case 'k': go_down = true;  goCat();  spriteGo(); break;
	}
}


document.onkeyup = function() {
	switch(window.event.key) {
		case 'j': go_left  = false; spriteStop(); break;
		case 'l': go_right = false; spriteStop(); break;
		case 'i': go_up    = false; spriteStop(); break;
		case 'k': go_down  = false; spriteStop(); break;
	}
}


// Sprite Animation ___________________________________________

var sprite_timer;

function spriteStop() {     // console.log('Stop animation.');
	clearInterval(sprite_timer);
	moving = false;
}

function spriteGo() {       // console.log('Begin animation.');
	if (moving == false) {
		moving = true;
		let    position = 150;	// start position for image slicer
		const  diff = 150;			// amount of position offset

		sprite_timer = setInterval(poseCat, 200);

	}				// if end
}					// function end


function poseCat() {

	cat.style.backgroundPosition = position + 'px 0px'; 
	if (position < 1500) {
		position = position + diff; // move position
	} else {
		position = 150;		// reset position to 150px
	}
}


