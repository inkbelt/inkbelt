//
//    cat_keys.js
//

//  Ctrl + G -- log coordinates

// Key Bindings _____________________________________________

  let key_bindings = {
    'a': 'left', 'd': 'right', 'w': 'up', 's': 'down',
    'j': 'left', 'l': 'right', 'i': 'up', 'k': 'down',
    'ArrowLeft': 'left', 'ArrowRight': 'right',
    'ArrowUp': 'up', 'ArrowDown': 'down',
    'g': 'log_coords'
  };

function KeyDown() {
  let direction = key_bindings[window.event.key];
  DirCatGo(direction);
  switch(window.event.key) { case 'ctrlKey' && 'g':
     /* from screen_edges.js */ LogCoords(); break; }  
}
document.onkeydown = KeyDown;


function KeyUp() {
  let direction = key_bindings[window.event.key];
  DirCatStop(direction);
}
document.onkeyup = KeyUp;


function DirCatGo(direction) {
  dir[direction] = true;
  CatGo();
  SpriteGo();
  // log(direction);
}

function DirCatStop(direction) {
  dir[direction] = false;
  CatStop();
  SpriteStop();
}

