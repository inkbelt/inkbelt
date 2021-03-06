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
             self: document.getElementById('level') };
const reduce = { active: false,
             style: document.getElementById('reduce').style };

function fixColor(button) {
  if (button.active == true) {
    button.style.background = colorOn;
  } else {
    button.style.background = colorOff;
  }
}

function fixButtonColors() {
  fixColor(help);
  fixColor(reduce);
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
  clearFeedback();
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

function reduceGo() {
  log('reduce go');
  playClick();
  if (reduce.active == true) {
    reduce.active = false;
    reduce.style.background = colorOff;
  } else {
    reduce.active = true;
    reduce.style.background = colorOn;
  }
  newCard();
}


