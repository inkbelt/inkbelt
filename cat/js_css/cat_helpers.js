//
//    cat_helpers.js
//

// Helpers _____________________________________

let long_log = '';

function log(short_log) {
  long_log = long_log + ' ' + short_log;
  console.clear();
  console.log(long_log);
}

log('cat.js');

