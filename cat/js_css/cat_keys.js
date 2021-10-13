//
//    cat_keys.js
//

// Key Bindings _____________________________________________

document.onkeydown = function() {  //   KEY DOWN
	switch(window.event.key) {
		case 'j': DirCatGo(dir.left); break;
		case 'l': DirCatGo(dir.right); break;
		case 'i': DirCatGo(dir.up); break;
		case 'k': DirCatGo(dir.down); break;

		case 'a': DirCatGo(dir.left); break;
		case 'd': DirCatGo(dir.right); break;
		case 'w': DirCatGo(dir.up); break;
		case 's': DirCatGo(dir.down); break;
	}
}

document.onkeyup = function() {    //    KEY UP
	switch(window.event.key) {
		case 'j': DirCatStop(dir.left); break;
		case 'l': DirCatStop(dir.right); break;
		case 'i': DirCatStop(dir.up); break;
		case 'k': DirCatStop(dir.down); break;

		case 'a': DirCatStop(dir.left); break;
		case 'd': DirCatStop(dir.right); break;
		case 'w': DirCatStop(dir.up); break;
    case 's': DirCatStop(dir.down); break;
	}
}


function DirCatGo(go_direction) {
  go_direction = true;
  CatGo();
  SpriteGo();
  log(dir.left);
  log(is_moving);
}

function DirCatStop(go_direction) {
  go_direction = false;
  CatStop();
  SpriteStop();
  log(go_direction);
  log(is_moving);
}

// function GoLeft() {
//   go_left = true;
//   CatGo();
//   SpriteGo();
// }
// function GoRight() {
//   go_right = true;
//   CatGo();
//   SpriteGo();
// }
// function GoUp() {
//   go_up = true;
//   CatGo();
//   SpriteGo();
// }
// function GoLeft() {
//   go_down = true;
//   CatGo();
//   SpriteGo();
// }




