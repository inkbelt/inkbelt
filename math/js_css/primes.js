//
// math.js
//

const subjects = ['Prime Numbers', 'Pi', 'Circles', 'Area', 'Quadratic']
let subject = subjects[0];

let pIndex = 0;

const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47,
                53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
                101, 103, 107, 109, 113, 127, 131, 137, 139, 149,
                151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];

const title = document.getElementById('title');
const tableDiv = document.getElementById('primes');
const setArrow = document.getElementById('nav0d');
let set = 1;


function prevNumber() {
  title.innerHTML = baseNumber;
  freshSet();
  updateTable();
  console.log('prevNumber');
}

function nextNumber() {
  title.innerHTML = baseNumber;
  freshSet();
  updateTable();
  console.log('nextNumber')
}

function freshSet() {
  setArrow.innerHTML = '&#129095;';
  setArrow.style.background = '#bbb';
  setArrow.style.color = '#eee';
  set = 1;
  pIndex = 0;  
}

function nextSet() {
  if (set === 1) {
    setArrow.innerHTML = '&#129093;';
    setArrow.style.background = '#eee';
    setArrow.style.color = '#bbb';
    set = 2;
    pIndex = 16;
    updateTable();
  } else {
    freshSet();
    updateTable();
  }
}

function updateTable() {
  if (set === 2) { pIndex = 16; } else { pIndex = 0; };
  tableDiv.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    let tr = document.createElement('tr');
    tableDiv.appendChild(tr);
    for (let j = 0; j < 5; j++) {
      let td = document.createElement('td');
      td.appendChild(document.createTextNode(primes[pIndex]));
      tr.appendChild(td);
      pIndex += 1;
    }
  }
}

 updateTable();
