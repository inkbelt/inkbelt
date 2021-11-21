//
//    sounds.js
//


// const soundPath = ''
const correctSounds = ['keytone1', 'keytone2', 'notification1', 'notification2', 'notification3']
const wrongSounds = ['beep', 'robot1', 'robot2', 'robot3', 'robot4', 'tri_chirp', 'tri_com']
const moreSounds = ['buzzer', 'servo_zip', 'servo_zap','splish_zap']

function playClick() {
  new Audio( './clicks/rasp_click.ogg').play();
  new Audio( './clicks/click.ogg').play();
}


function playCorrect() {
  // new Audio( './assets/notification1.ogg').play();
  let correctSound = pickFromArray(correctSounds);
  let playIt = new Audio( './beeps/' + correctSound + '.ogg');
  playIt.volume = 0.2
  playIt.play();
  console.log(correctSound);
}

function playWrong() {
  // new Audio( './assets/robot1.ogg').play();
  let wrongSound = pickFromArray(wrongSounds);
  let playIt = new Audio( './beeps/' + wrongSound + '.ogg');
  playIt.volume = 0.2
  playIt.play();
  console.log(wrongSound);
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




