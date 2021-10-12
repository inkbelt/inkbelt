//
//    keyboard_shortcuts.js
//


document.onkeydown = function() {  // Enter key submits
  KeyBindings();
}

function KeyBindings() {
  if (window.event.keyCode == 13) { EnterKey(); }
  if (window.event.keyCode == 72) { Help_Go(); event.preventDefault(); }        //  H
  if (window.event.keyCode == 76) { Level_Go(); event.preventDefault(); }       //  L
  if (window.event.keyCode == 107) { Op_Go(plus); event.preventDefault(); }     //  +
  if (window.event.keyCode == 109) { Op_Go(minus); event.preventDefault(); }    //  -
  if (window.event.keyCode == 106) { Op_Go(multiply); event.preventDefault(); } //  *
  if (window.event.keyCode == 111) { Op_Go(divide); event.preventDefault(); }   //  /
  if (window.event.keyCode == 8) { Disabled(); }  // Backspace
  if (window.event.keyCode == 46) { Disabled(); } //    Delete
  if (window.event.keyCode == 37) { Disabled(); } //    Arrows
  if (window.event.keyCode == 38) { Disabled(); } //    Arrows
  if (window.event.keyCode == 39) { Disabled(); } //    Arrows
  if (window.event.keyCode == 40) { Disabled(); } //    Arrows
}

function EnterKey() {
  if (thinking != 1) { Submit(); }
}

function Disabled() {
  feedback = "Key disabled. Try 'Enter'.";
  UpdateFeedback();
  setTimeout(ClearFeedback, 700);
  event.preventDefault();
}

