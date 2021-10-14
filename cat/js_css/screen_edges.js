//
//    screen_edges.js
//

let win_width = window.innerWidth;
let win_height = window.innerHeight;

window.onresize = Resize;

function Resize() {
  win_width = window.innerWidth;
  win_height = window.innerHeight;
}

function Text2Num(input) {
  return parseInt(input, 10);
}

function LogCoords() {  // Ctrl + G
  log('\n');
  log(win_width);
  log(win_height);
  log(cat.style.left);
  log(cat.style.top);
  event.preventDefault();
}

function CheckEdges() {
  if (Text2Num(cat.style.left) < -150) {
    cat_pos[0] = win_width;
  } else if (Text2Num(cat.style.left) > win_width) {
    cat_pos[0] = -150;
  }

  if (Text2Num(cat.style.top) < -150) {
    cat_pos[1] = win_height;
  } else if (Text2Num(cat.style.top) > win_height) {
    cat_pos[1] = -150;
  }
}

