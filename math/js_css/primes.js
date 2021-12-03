//
//     math.js             JavaScript
//          "just sayin'"
//          "Justin Seiber"
//          "Jaylor Swift"
//

const click1 = new Audio('./assets/click.ogg');
const click2 = new Audio('./assets/rasp_click3.ogg');
const click3 = new Audio('./assets/typing6.ogg');
const click4 = new Audio('./assets/typing7.ogg');

const primes = {
  data: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47,
         53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
         101, 103, 107, 109, 113, 127, 131, 137, 139, 149,
         151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199],
  table: true,
  fontSize: 50,
  rows: 3,
  columns: 5,
  width: 100,
  setSize: 16
}

const pi = {
  string: '3.14159  26535  89793  23846  26433  83279  50288  ' +
          '41971  69399  37510  58209  74944  59230  78164  ' +
          '06286  20899  86280  34825  34211  70679',
  data: [],
  table: true,
  fontSize: 50,
  rows: 3,
  columns: 7,
  width: 20,
  setSize: 21
}
for (const p of pi.string) {
    pi.data.push(p);
}
//console.log(pi.data);

const area = {
  data: ['Perimeter = Width + Height + Width + Height',
        'Area = Width * Height',
        'Volume = Width * Height * Length',
        'Perimeter: distance all the way around the outside.',
        'Area: a flat surface, like a rug.',
        'Volume: the 3D space it occupies; capacity.'],
  table: true,
  fontSize: 25,
  rows: 3,
  columns: 1,
  width: 80,
  setSize: 3
}

const circles = {
  data: ['Circumference =', '2', 'Pi', 'r', '',
        'Area =', '', 'Pi', 'r', 'squared',
        'Cylinder Volume =', '2', 'Pi', 'r', '* Height',
        'Sphere Volume =', '4/3', 'Pi', 'r', 'cubed',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', ''],
  table: true,
  fontSize: 20,
  rows: 4,
  columns: 5,
  width: 80,
  setSize: 28
}

const linear = {
  data: ['', '', '', '', '', '', '', '', '', '',
         '', '', '', '', '', '', '', '', '', ''],
  table: false,
  fontSize: 20,
  rows: 4,
  columns: 5,
  width: 80,
  setSize: 28
}

const quadratic = {
  data: ['', '', '', '', '', '', '', '', '', '',
         '', '', '', '', '', '', '', '', '', ''],
  table: false,
  fontSize: 20,
  rows: 4,
  columns: 5,
  width: 80,
  setSize: 28
}


var lessons = [primes, pi, area, circles, linear, quadratic];

const subjects = ['Prime Numbers', 'Pi', 'Area', 'Circles', 'Linear', 'Quadratic'];
let index = 0;
let subject = subjects[index];


const title = document.getElementById('title');
const tableDiv = document.getElementById('table');
const setArrow = document.getElementById('nav0d');
let cells = [];

let set = 1;
let tableIndex = 0;


function prevNumber() {
  click2.play();
  index -= 1;
  if (index < 0) { index = subjects.length - 1 };
  subject = subjects[index];
  // dataSet = lessons[index].data;
  title.innerHTML = subject;
  freshSet();
  updateCard();
}

function nextNumber() {
  click1.play();
  index += 1;
  if (index > subjects.length - 1 ) { index = 0 };
  subject = subjects[index];
  // dataSet = dataSets[index];
  title.innerHTML = subject;
  freshSet();
  updateCard();
}


function freshSet() {
  setArrow.innerHTML = '&#129095;';
  setArrow.style.background = '#bbb';
  setArrow.style.color = '#eee';
  set = 1;
  tableIndex = 0;  
}

function nextSet() {
  if (set === 1) {
    click3.play();
    setArrow.innerHTML = '&#129093;';
    setArrow.style.background = '#eee';
    setArrow.style.color = '#bbb';
    set = 2;
  } else {
    click4.play();
    freshSet();
  }
  updateCard();
}

function updateCard() {
  tableDiv.innerHTML = '';
  if (lessons[index].table === true) {
    updateTable();
    changeSize();
  } else {
    console.log('asdf');
  }
}

function changeSize() {
  cells = document.getElementsByClassName('cell');
  for (c of cells) { c.style.fontSize = lessons[index].fontSize; };
}

function updateTable() {
  if (set === 2) {tableIndex = lessons[index].setSize;} else {tableIndex = 0;};
  for (let i = 0; i < lessons[index].rows; i++) {
    let tr = document.createElement('tr');
    tableDiv.appendChild(tr);
    for (let j = 0; j < lessons[index].columns; j++) {
      let td = document.createElement('td');
      td.appendChild(document.createTextNode(lessons[index].data[tableIndex]));
      tr.appendChild(td);
      // td.className = 'cell';
      td.classList.add('cell');
      tableIndex += 1;
    }
  }
}

updateTable();
