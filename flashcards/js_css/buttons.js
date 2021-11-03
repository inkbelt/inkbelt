//
//    buttons.js
//



window.addEventListener("load", fixButtonColors);


const colorOn = '#eee';
const colorOff = '#aaa';



const plus = { active: true,
             content: '+',
             style: document.getElementById('plus').style };
const minus = { active: false, 
              content: '&ndash;',
              style: document.getElementById('minus').style };
const multiply = { active: false, 
              content: 'x',
              style: document.getElementById('multiply').style };
const divide = { active: false, 
              content: '&divide;',
              style: document.getElementById('divide').style };

const help = { active: false,
             style: document.getElementById('help').style };
const level = { //level: 'Easy',
             //style: document.getElementById('level').style,
             self: document.getElementById('level') };

const negatives = { active: false,
                  style: document.getElementById('negatives').style };

// let level_value = level.self.innerHTML;

const opObjects = [plus, minus, multiply, divide];

// let difficulty_objects = [level];



function fixColor(symbol) {
  if (symbol.active == true) {
    symbol.style.background = colorOn;
  } else {
    symbol.style.background = colorOff;
  }
}

function fixButtonColors() {
  opObjects.forEach(function(symbol){
    fixColor(symbol);
  });
  fixColor(help);
  fixColor(negatives);
}


function helpGo() {
  log('help go');
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
  if (level.self.innerHTML == 'Easy') {
    level.self.innerHTML = 'Medium';
  } else if (level.self.innerHTML == 'Medium') {
    level.self.innerHTML = 'Hard';
  } else {
    level.self.innerHTML = 'Easy';
  }
  log(level.self.innerHTML);
  newCard();
  // document.getElementById('level').innerHTML = "hello";
}


function opGo(symbol) {
  focusCursor();
  if (symbol.active === true) {
    if (operands.length === 1) { return; }
    symbol.active = false;
    symbol.style.background = colorOff;
  } else {
    symbol.active = true;
    symbol.style.background = colorOn;
  }
  log(symbol);
  updateOperands();
  newCard();
}

function negGo() {
  log('neg go');
  if (negatives.active == true) {
    negatives.active = false;
    negatives.style.background = colorOff;
    neggy = 0;
  } else {
    negatives.active = true;
    negatives.style.background = colorOn;
    neggy = 1;
  }
  updateFeedback();
  focusCursor();
  newCard();
}


function updateOperands() {
  operands = [];
  opObjects.forEach(function(symbol){
    if (symbol.active == true) {
      operands.push(symbol.content);
    }
    log(operands.length)
  });

}





