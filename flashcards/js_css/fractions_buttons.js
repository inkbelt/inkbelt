//
//    buttons.js
//



window.addEventListener("load", fixButtonColors);

const colorOn = '#eee';
const colorOff = '#aaa';

const optionsBox = document.getElementById('options-box');
const help = { active: false,
             style: document.getElementById('help').style };
const level = { //level: 'Easy',
             //style: document.getElementById('level').style,
             self: document.getElementById('level') };

function fixColor(icon) {
  if (icon.active == true) {
    icon.style.background = colorOn;
  } else {
    icon.style.background = colorOff;
  }
}

function fixButtonColors() {
  fixColor(help);
  adjustSize();
}
function adjustSize() {
  optionsBox.style.width = '150px';
  optionsBox.style.height = '120px';
  optionsBox.style.marginRight = '60px';
}

function helpGo() {
  log('help go');
  playClick();
  if (help.active == true) {
    help.active = false;
    help.style.background = colorOff;
  } else {
    help.active = true;
    help.style.background = colorOn;
  }
  updateFeedback();
  focusCursor();
}

function levelGo() {
  playClick();
  if (level.self.innerHTML == 'Easy') {
    level.self.innerHTML = 'Medium';
  } else if (level.self.innerHTML == 'Medium') {
    level.self.innerHTML = 'Hard';
  } else {
    level.self.innerHTML = 'Easy';
  }
  log(level.self.innerHTML);
  newCard();
}



