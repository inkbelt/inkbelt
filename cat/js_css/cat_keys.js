//
//    cat_keys.js
//

//  Ctrl + G -- log coordinates

// Key Bindings _____________________________________________

document.onkeydown = function() {  //   KEY DOWN
  let keyDirections = {'a': 'left', 'd': 'right'}
  let direction = keyDirections[window.event.key]
  DirCatGo(direction)

  switch(window.event.key) {
    // case 'a': DirCatGo('left'); break; //left
    // case 'd': DirCatGo('right'); break; //right
    case 'w': DirCatGo('up'); break; //up
    case 's': DirCatGo('down'); break; //down

    case 'j': DirCatGo('left'); break; //left
    case 'l': DirCatGo('right'); break; //right
    case 'i': DirCatGo('up'); break; //up
    case 'k': DirCatGo('down'); break; //down

    case 'ArrowLeft': DirCatGo('left'); break; //left
    case 'ArrowRight': DirCatGo('right'); break; //right
    case 'ArrowUp': DirCatGo('up'); break; //up
    case 'ArrowDown': DirCatGo('down'); break; //down

    case 'ctrlKey' && 'g': LogCoords(); break;  //from screen_edges.js
  }
}

document.onkeyup = function() {    //    KEY UP
  switch(window.event.key) {
    case 'a': DirCatStop('left'); break; //left
    case 'd': DirCatStop('right'); break; //right
    case 'w': DirCatStop('up'); break; //up
    case 's': DirCatStop('down'); break; //down

    case 'j': DirCatStop('left'); break; //left
    case 'l': DirCatStop('right'); break; //right
    case 'i': DirCatStop('up'); break; //up
    case 'k': DirCatStop('down'); break; //down

    case 'ArrowLeft': DirCatStop('left'); break; //left
    case 'ArrowRight': DirCatStop('right'); break; //right
    case 'ArrowUp': DirCatStop('up'); break; //up
    case 'ArrowDown': DirCatStop('down'); break; //down
  }
}

function DirCatGo(direction) {
  dir[direction] = true;
  // switch(direction) {
  //   case 'left': dir.left = true; break;
  //   case 'right': dir.right = true; break;
  //   case 'up': dir.up = true; break;
  //   case 'down': dir.down = true; break;
  // }
  CatGo();
  SpriteGo();
  // log(direction);
}

function DirCatStop(direction) {
  switch(direction) {
    case 'left': dir.left = false; break;
    case 'right': dir.right = false; break;
    case 'up': dir.up = false; break;
    case 'down': dir.down = false; break;
  }
  CatStop();
  SpriteStop();
}

