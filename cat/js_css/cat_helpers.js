//
//    cat_helpers.js
//

// Helpers _________________________________________________

let long_log = '';

function log(short_log) {
  long_log = long_log + ' ' + short_log;
	console.clear();
	console.log(long_log);
}

function TexNum(input) {
  return parseInt(input, 10);
}

function FindTopLeft(element) {
  var rec = document.getElementById(element).getBoundingClientRect();
  return {top: rec.top + window.scrollY, left: rec.left + window.scrollX};
} //call it like findTopLeft('#header');


log('cat.js');


