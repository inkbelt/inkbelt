//
//    key_bindings.js
//

let keyList = {
  Enter: function() { goForward(); },
  Escape: function() { goBack(); },
  ' ': function() { nextSet(); },
  ArrowLeft: function() { prevNumber(); },
  ArrowRight: function() { nextNumber(); },
  ArrowUp: function() { nextSet(); },
  ArrowDown: function() { nextSet(); },
  a: function() { prevNumber(); },
  d: function() { nextNumber(); },
  w: function() { nextSet(); },
  s: function() { nextSet(); }
}

document.onkeydown = pressKey;

function pressKey() {
  if (keyList[window.event.key]) {
    keyList[window.event.key].call();
  }
}

