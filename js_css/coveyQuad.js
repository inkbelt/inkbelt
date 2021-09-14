// COVEY QUADRANT WITH SOUNDS AND TWEENING

// declare variables -----------------------------------------
var colOneX = 238
var colTwoX = 360

var colOneXText = 214
var colTwoXText = 334

var rowOneY = 242
var rowTwoY = 366

var rowOneYText = 232
var rowTwoYText = 356

var textBoxX = 90
var textBoxY = 207

var tweenBoxX = 100
var tweenBoxY = 100

var textBoxFill = 'white'

// create functions for later use ----------------------------
function tBTween() {
  var tween = new Kinetic.Tween({
  node: tweenBox, 
  duration: 0.3,
  x: textBoxX,
  y: textBoxY,
  height: textBox.height(),
  scaleX: 1,
  scaleY: 1,
  easing: Kinetic.Easings.EaseIn,
  onFinish: function() { addTB(); }
}).play();
};

function addTB() {
  layer.add(textBox);
  layer.draw();
};

function deTweener() {
  textBox.remove();
  maskLayer.remove();
  var deTween = new Kinetic.Tween({
    node: tweenBox, 
    duration: 0.3,
    x: tweenBoxX,
    y: tweenBoxY,
    scaleX: 0.1,
    scaleY: 0.1,
    easing: Kinetic.Easings.EaseOut,
    onFinish: function() {
      finishDeTween();
    }
  }).play();
};

function finishDeTween() {
  tweenBox.remove();
};

// create stage and layer; add title --------------------------
var stage = new Kinetic.Stage({
  container: 'container',
  width: 600,
  height: 600
});

var layer = new Kinetic.Layer();

var titleText = new Kinetic.Text({
  x: 60,
  y: 30,
  text: "Stephen R. Covey's\nLeadership Quadrant",
  fontSize: 30,
  fontFamily: 'Calibri',
  fontStyle: 'bold',
  fill: 'black',
  width: 450,
  align: 'center'
});
layer.add(titleText);

// tween boxes, text boxes, mask ------------------------------
var tweenBox = new Kinetic.Rect({
  x: 500,
  y: 46,
  stroke: '#555',
  strokeWidth: 5,
  fill: textBoxFill,
  width: 380,
  height: 200,
  shadowColor: 'black',
  shadowBlur: 10,
  shadowOffset: {x:10,y:10},
  shadowOpacity: 0.2,
  cornerRadius: 10,
  scaleX: 0.2,
  scaleY: 0.2
});
tweenBox.on('click', function() {
  swooshOut.play();
  console.log("tweenBox clicked");
  deTweener();
});

var textBox = new Kinetic.Text({
  x: textBoxX,
  y: textBoxY,
  text: "Click me.",
  fontSize: 20,
  fontFamily: 'Calibri',
  fill: 'black',
  width: 440,
  padding: 20,
  align: 'left'
});
textBox.on('click', function() {
  swooshOut.play();
  console.log("textBox clicked");
  deTweener();
});

var maskLayer = new Kinetic.Rect({
  x: 0,
  y: 0,
  width: stage.width(),
  height: stage.height(),
  fill: '#bab496',
  opacity: 0.5
});

// button1 -----------------------------------------------------
function bt1Click() {
  swooshIn.play();
  console.log("button1 clicked");
  activeBox = 1;
  layer.add(maskLayer);
  tweenBox.setX(colOneXText);
  tweenBox.setY(rowOneY);
  tweenBoxX = colOneXText;
  tweenBoxY = rowOneY;
  textBox.setText("  1. IMPORTANT AND URGENT \n\n    - Crises\n    - Preparation\n    - Pressing problems\n    - Deadline-driven projects,\n      meetings, preparations\n")
  layer.add(tweenBox);
  tBTween();
  layer.draw();
};

var button1 = new Kinetic.Circle({
  x: colOneX,
  y: rowOneY,
  stroke: 'black',
  strokeWidth: 2,
  radius: 52,
  fillRadialGradientEndRadius: 150,
  fillRadialGradientColorStops: [0, 'white', 0.2, 'white', 1, 'grey']
});
button1.on('mouseover', function() {
  text1.scale({x:1.2, y:1.2});
  text1.offsetX(5);
  this.scale({x:1.2, y:1.2});
  layer.draw();
});
button1.on('mouseout', function() {
  text1.scale({x:1, y:1});
  text1.offsetX(0);
  this.scale({x:1, y:1});
  layer.draw();
});
button1.on('click', bt1Click);

var text1 = new Kinetic.Text({
  x: colOneXText,
  y: rowOneYText,
  lineHeight: 2.5,
  text: '1',
  fontSize: 24,
  fontFamily: 'Calibri',
  fontStyle: 'bold',
  fill: 'black',
  width: 50,
  height: 50,
  align: 'center'
});
text1.on('mouseover', function() {
  this.scale({x:1.2, y:1.2});
  this.offsetX(5);
  button1.scale({x:1.2, y:1.2});
  layer.draw();
});
text1.on('mouseout', function() {
  this.scale({x:1, y:1});
  this.offsetX(0);
  button1.scale({x:1, y:1});
  layer.draw();
});
text1.on('click', bt1Click);

layer.add(button1);
layer.add(text1);

// button2  -----------------------------------------------------
function bt2Click() {
  swooshIn.play();
  console.log("button2 clicked");
  layer.add(maskLayer);
  tweenBox.setX(colTwoXText);
  tweenBox.setY(rowOneY);
  tweenBoxX = colTwoXText;
  tweenBoxY = rowOneY;
  textBox.setText("   2. IMPORTANT, BUT\n       NOT URGENT \n\n        - Preparation\n        - Prevention\n        - Planning\n        - Relationship Building\n        - Needed Relaxation\n        - Empowerment\n");
  layer.add(tweenBox);
  tBTween();
  layer.draw();
};

var button2 = new Kinetic.Circle({
  x: colTwoX,
  y: rowOneY,
  stroke: 'black',
  strokeWidth: 2,
  radius: 52,
  fillRadialGradientEndRadius: 150,
  fillRadialGradientColorStops: [0, 'white', 0.2, 'white', 1, 'grey']
});
button2.on('mouseover', function() {
  text2.scale({x:1.2, y:1.2});
  text2.offsetX(5);
  this.scale({x:1.2, y:1.2});
  layer.draw();
});
button2.on('mouseout', function() {
  text2.scale({x:1, y:1});
  text2.offsetX(0);
  this.scale({x:1, y:1});
  layer.draw();
});
button2.on('click', bt2Click);

var text2 = new Kinetic.Text({
  x: colTwoXText,
  y: rowOneYText,
  text: '2',
  fontSize: 24,
  fontFamily: 'Calibri',
  fontStyle: 'bold',
  fill: 'black',
  width: 50,
  height: 50,
  align: 'center'
});
text2.on('mouseover', function() {
  this.scale({x:1.2, y:1.2});
  this.offsetX(5);
  button2.scale({x:1.2, y:1.2});
  layer.draw();
});
text2.on('mouseout', function() {
  this.scale({x:1, y:1});
  this.offsetX(0);
  button2.scale({x:1, y:1});
  layer.draw();
});
text2.on('click', bt2Click);

layer.add(button2);
layer.add(text2);

// button3  ----------------------------------------------------
function bt3Click() {
  swooshIn.play();
  console.log("button3 clicked");
  activeBox = 3;
  layer.add(maskLayer);
  tweenBox.setX(colOneXText);
  tweenBox.setY(rowTwoYText);
  tweenBoxX = colOneXText;
  tweenBoxY = rowTwoYText;
  textBox.setText("   3. URGENT, BUT\n       NOT IMPORTANT \n\n    - Needless interruptions\n    - Unnecessary reports\n    - Unimportant meetings,\n      phone calls, emails\n    - Other people's minor issues\n");
  layer.add(tweenBox);
  tBTween();
  layer.draw();
};

var button3 = new Kinetic.Circle({
  x: colOneX,
  y: rowTwoY,
  stroke: 'black',
  strokeWidth: 2,
  radius: 52,
  fillRadialGradientEndRadius: 150,
  fillRadialGradientColorStops: [0, 'white', 0.2, 'white', 1, 'grey']
});
;
button3.on('mouseover', function() {
  text3.scale({x:1.2, y:1.2});
  text3.offsetX(5);
  this.scale({x:1.2, y:1.2});
  layer.draw();
});
button3.on('mouseout', function() {
  text3.scale({x:1, y:1});
  text3.offsetX(0);
  this.scale({x:1, y:1});
  layer.draw();
});
button3.on('click', bt3Click);

var text3 = new Kinetic.Text({
  x: colOneXText,
  y: rowTwoYText,
  text: '3',
  fontSize: 24,
  fontFamily: 'Calibri',
  fontStyle: 'bold',
  fill: 'black',
  width: 50,
  height: 50,
  align: 'center'
});
text3.on('mouseover', function() {
  this.scale({x:1.2, y:1.2});
  this.offsetX(5);
  button3.scale({x:1.2, y:1.2});
  layer.draw();
});
text3.on('mouseout', function() {
  this.scale({x:1, y:1});
  this.offsetX(0);
  button3.scale({x:1, y:1});
  layer.draw();
});
text3.on('click', bt3Click);

layer.add(button3);
layer.add(text3);

// button4  --------------------------------------------------
function bt4Click() {
  swooshIn.play();
  console.log("button4 clicked");
  activeBox = 4;
  layer.add(maskLayer);
  tweenBox.setX(colTwoXText);
  tweenBox.setY(rowTwoYText);
  tweenBoxX = colTwoXText;
  tweenBoxY = rowTwoYText;
  textBox.setText("   4. NOT URGENT AND\n       NOT IMPORTANT\n\n    - Trivia, busywork\n    - Some phone calls\n    - Time wasters\n    - Escape activities\n    - Irrelevant emails\n    - Excessive TV watching\n    - Excessive relaxation")
  layer.add(tweenBox);
  tBTween();
  layer.draw();
};

var button4 = new Kinetic.Circle({
  x: colTwoX,
  y: rowTwoY,
  stroke: 'black',
  strokeWidth: 2,
  radius: 52,
  fillRadialGradientEndRadius: 150,
  fillRadialGradientColorStops: [0, 'white', 0.2, 'white', 1, 'grey']
});
button4.on('mouseover', function() {
  text4.scale({x:1.2, y:1.2});
  text4.offsetX(5);
  this.scale({x:1.2, y:1.2});
  layer.draw();
});
button4.on('mouseout', function() {
  text4.scale({x:1, y:1});
  text4.offsetX(0);
  this.scale({x:1, y:1});
  layer.draw();
});
button4.on('click', bt4Click);

var text4 = new Kinetic.Text({
  x: colTwoXText,
  y: rowTwoYText,
  lineHeight: 2.5,
  text: '4',
  fontSize: 24,
  fontFamily: 'Calibri',
  fontStyle: 'bold',
  fill: 'black',
  width: 50,
  height: 50,
  align: 'center'
});
text4.on('mouseover', function() {
  this.scale({x:1.2, y:1.2});
  this.offsetX(5);
  button4.scale({x:1.2, y:1.2});
  layer.draw();
});
text4.on('mouseout', function() {
  this.scale({x:1, y:1});
  this.offsetX(0);
  button4.scale({x:1, y:1});
  layer.draw();
});
text4.on('click', bt4Click);

layer.add(button4);
layer.add(text4);


stage.add(layer);
