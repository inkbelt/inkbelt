//
//    keyboard_shortcuts.js
//
let keyList = { 13: 'enter', 72: 'help', 76: 'level', 107: 'plus',
  109: 'minus', 106: 'multiply', 111: 'divide', 8: 'backspace',
  46: 'delete', 37: 'arrow', 38: 'arrow', 39: 'arrow', 40: 'arrow' };

document.onkeydown = function() {  // Enter key submits
  keyBindings();
}

function keyBindings() {
  if (window.event.keyCode == 13) { enterKey(); }
  if (window.event.keyCode == 72) { help_Go(); event.preventDefault(); }        //  H
  if (window.event.keyCode == 76) { level_Go(); event.preventDefault(); }       //  L
  // if (window.event.keyCode == 107) { Op_Go(plus); event.preventDefault(); }     //  +
  // if (window.event.keyCode == 109) { Op_Go(minus); event.preventDefault(); }    //  -
  // if (window.event.keyCode == 106) { Op_Go(multiply); event.preventDefault(); } //  *
  // if (window.event.keyCode == 111) { Op_Go(divide); event.preventDefault(); }   //  /
  if (window.event.keyCode == 8) { disabled(); }  // Backspace
  if (window.event.keyCode == 46) { disabled(); } //    Delete
  if (window.event.keyCode == 37) { disabled(); } //    Arrows
  if (window.event.keyCode == 38) { disabled(); } //    Arrows
  if (window.event.keyCode == 39) { disabled(); } //    Arrows
  if (window.event.keyCode == 40) { disabled(); } //    Arrows
}

function enterKey() {
  if (thinking != 1) { Submit(); }
}

function disabled() {
  feedback = "Key disabled. Try 'Enter'.";
  UpdateFeedback();
  setTimeout(clearFeedback, 700);
  event.preventDefault();
}

