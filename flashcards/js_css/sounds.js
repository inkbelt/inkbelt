//
//    sounds.js
//

const correctSounds2 = [
  new Audio('./beeps/keytone1.ogg'),
  new Audio('./beeps/keytone2.ogg'),
  new Audio('./beeps/notification1.ogg'),
  new Audio('./beeps/notification2.ogg'),
  new Audio('./beeps/notification3.ogg')
]

for (sound of correctSounds2) {
  sound.volume = 0.2;
}

// let yesSounds = {
//   correct1: new Audio('./beeps/keytone1.ogg'),
//   correct2: new Audio('./beeps/keytone2.ogg'),
//   correct3: new Audio('./beeps/notification1.ogg'),
//   correct4: new Audio('./beeps/notification2.ogg'),
//   correct5: new Audio('./beeps/notification3.ogg')
// };

// console.log(yesSounds[1]);

// Object.values(yesSounds).forEach(value => { // console.log(value));
//   value.volume = 0.2;
// });

// for (var i = 0; i < elements.length; i++) {
//     elements[i].volume = myDesiredVolume;
// }


// const soundPath = ''
const correctSounds = ['keytone1', 'keytone2', 'notification1', 'notification2', 'notification3']
const wrongSounds = ['robot1', 'robot2', 'robot3', 'robot4']
const moreSounds = ['beep', 'buzzer', 'servo_zip', 'servo_zap','splish_zap', 'tri_chirp', 'tri_com']

function playClick() {
  new Audio('./clicks/rasp_click.ogg').play();
  new Audio('./clicks/click.ogg').play();
}

function pickFromObject(obj) {
  return obj[Math.floor(Math.random() * Object.keys(obj).length)];
}

function pickFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function playYes() {
  pickFromArray(correctSounds2).play();
  // console.log(pickFromObject(yesSounds)); //.play();
}



function playCorrect() {
  // new Audio( './assets/notification1.ogg').play();
  let correctSound = pickFromArray(correctSounds);
  let playIt = new Audio( './beeps/' + correctSound + '.ogg');
  playIt.volume = 0.2;
  playIt.play();
  console.log(correctSound);
}

function playWrong() {
  // new Audio( './assets/robot1.ogg').play();
  let wrongSound = pickFromArray(wrongSounds);
  let playIt = new Audio( './beeps/' + wrongSound + '.ogg');
  playIt.volume = 0.2;
  playIt.play();
  console.log(wrongSound);
}


function playBuzzer() {
  new Audio('./beeps/buzzer.ogg').play();
}

// ___PLAY AUDIO GUIDE___
// let music = new Audio({
//     loop: true,
//     volume: 1,
//     src: ['./assets/correct.ogg']
// })

// var audio = new Audio('./assets/correct.ogg');
// audio.play();

// var song = new Audio();
// song.src = './assets/correct.ogg';
// song.play();


// var audio = new Audio('./assets/correct.ogg');
// audio.volume = 0.2;
// audio.play();
// ___END GUIDE___




