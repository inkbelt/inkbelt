//
//    key_bindings.js
//

let keyList = {
  Enter: function() { enterKey(); },
  ' ': function() { enterKey(); },
  h: function() { event.preventDefault(); helpGo(); },
  l: function() { event.preventDefault(); levelGo(); },
  n: function() { event.preventDefault(); newCard(); },
  Backspace: function() { disabled(); },
  Delete: function() { disabled(); },
  ArrowLeft: function() { disabled(); },
  ArrowRight: function() { disabled(); },
  ArrowUp: function() { disabled(); },
  ArrowDown: function() { disabled(); }
}

document.onkeydown = pressKey;

function pressKey() {
  if (keyList[window.event.key]) {
    keyList[window.event.key].call();
  }
}

function enterKey() {
  // console.log('enter');
  event.preventDefault();
  if (!thinking) { submit(); }
}

function disabled() {
  event.preventDefault();
  feedback = "Key disabled. Try 'Enter'.";
  playBuzzer();
  updateFeedback();
  setTimeout(clearFeedback, 700);
}

