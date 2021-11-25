//
//    sounds.js
//

const correctSounds = [
  new Audio('./beeps/keytone1.ogg'),
  new Audio('./beeps/keytone2.ogg'),
  new Audio('./beeps/notification1.ogg'),
  new Audio('./beeps/notification2.ogg'),
  new Audio('./beeps/notification3.ogg')
]
for (sound of correctSounds) { sound.volume = 0.2; }

const wrongSounds = [
  new Audio('./beeps/robot1.ogg'),
  new Audio('./beeps/robot2.ogg'),
  new Audio('./beeps/robot3.ogg'),
  new Audio('./beeps/robot4.ogg')
]
for (sound of wrongSounds) { sound.volume = 0.2; }

const moreSounds = ['beep', 'buzzer', 'servo_zip', 'servo_zap',
                    'splish_zap', 'tri_chirp', 'tri_com']

const buzzer = new Audio('./beeps/buzzer.ogg');

const click1 = new Audio('./clicks/click.ogg');
const click2 = new Audio('./clicks/rasp_click.ogg');

function playCorrect() { pickFromArray(correctSounds).play(); }

function playWrong() { pickFromArray(wrongSounds).play(); }

function playClick() { click1.play(); click2.play(); }

function playBuzzer() { buzzer.play(); }

function pickFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}



// ___ AUDIO GUIDE ___
// let music = new Audio({
//     loop: true,
//     volume: 1,
//     src: ['./assets/correct.ogg']
// })
//
// var audio = new Audio('./assets/correct.ogg');
// audio.play();
//
// var song = new Audio();
// song.src = './assets/correct.ogg';
// song.play();
//
// var audio = new Audio('./assets/correct.ogg');
// audio.volume = 0.2;
// audio.play();
// ___ END GUIDE ___




