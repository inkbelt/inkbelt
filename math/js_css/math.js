//
// math.js
//

let baseNumber = 5;
let multiple = 1;
const title = document.getElementById('title');
const tableDiv = document.getElementById('multiples');
const setArrow = document.getElementById('nav0d');
let set = 1;

const click1 = new Audio('./assets/click.ogg');
const click2 = new Audio('./assets/rasp_click3.ogg');
const click3 = new Audio('./assets/typing6.ogg');
const click4 = new Audio('./assets/typing7.ogg');

function prevNumber() {
  click2.play();
  baseNumber -= 1;
  title.innerHTML = baseNumber;
  // freshSet();
  updateTable();
}

function nextNumber() {
  click1.play();
  baseNumber += 1;
  title.innerHTML = baseNumber;
  // freshSet();
  updateTable();
}

function freshSet() {
  setArrow.innerHTML = '&#129095;';
  setArrow.style.background = '#ccc';
  setArrow.style.color = '#eee';
  set = 1;
  multiple = 1;  
}

function nextSet() {
  if (set === 1) {
    click3.play();
    setArrow.innerHTML = '&#129093;';
    setArrow.style.background = '#eee';
    setArrow.style.color = '#ccc';
    set = 2;
    multiple = 16;
    updateTable();
  } else {
    click4.play();
    freshSet();
    updateTable();
  }
}

function updateTable() {
  if (set === 2) { multiple = 16; } else { multiple = 1; };
  tableDiv.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    let tr = document.createElement('tr');
    tableDiv.appendChild(tr);
    for (let j = 0; j < 5; j++) {
      let td = document.createElement('td');
      td.appendChild(document.createTextNode(baseNumber * multiple));
      tr.appendChild(td);
      multiple += 1;
    }
  }
}

 updateTable();
