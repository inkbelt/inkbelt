//
//
//    AnimateIt.js
//
//


var style_declaration = document.getElementById('cat_sprite').style;

console.log(style_declaration);

var long_log = '';


function LogIt(short_log) {
	long_log = long_log + ' ' + short_log
	console.log(long_log);
}



document.onkeypress = function() {	 // key binding
	switch(window.event.key) {
		case 'p':  location.reload(); break;
		case 'y':  y(); break;

		case 'q':  q(); break;
		case 'w':  w(); break;
		case 'e':  e(); break;
		case 'r':  r(); break;

		case 'a':  a(); break;
		case 's':  s(); break;
		case 'd':  d(); break;
		case 'f':  f(); break;

		case 'z':  z(); break;
		case 'x':  x(); break;
		case 'c':  c(); break;
		case 'v':  v(); break;

	}
}


function y() {	LogIt('y down');
	document.getElementById('cat_sprite').style.left = '0px';
	document.getElementById('cat_sprite').style.top = '0px';
}


function q() {	LogIt('q');
	document.getElementById('cat_sprite').style.left = '50px';
	document.getElementById('cat_sprite').style.top = '50px';
}
function w() {	LogIt('w');
	document.getElementById('cat_sprite').style.left = '100px';
	document.getElementById('cat_sprite').style.top = '50px';
}
function e() {	LogIt('e');
	document.getElementById('cat_sprite').style.left = '150px';
	document.getElementById('cat_sprite').style.top = '50px';
}
function r() {	LogIt('r');
	document.getElementById('cat_sprite').style.left = '200px';
	document.getElementById('cat_sprite').style.top = '50px';
}

function a() {	LogIt('a');
	document.getElementById('cat_sprite').style.left = '50px';
	document.getElementById('cat_sprite').style.top = '100px';
}
function s() {	LogIt('s');
	document.getElementById('cat_sprite').style.left = '100px';
	document.getElementById('cat_sprite').style.top = '100px';
}
function d() {	LogIt('d');
	document.getElementById('cat_sprite').style.left = '150px';
	document.getElementById('cat_sprite').style.top = '100px';
}
function f() {	LogIt('f');
	document.getElementById('cat_sprite').style.left = '200px';
	document.getElementById('cat_sprite').style.top = '100px';
}

function z() {	LogIt('z');
	document.getElementById('cat_sprite').style.left = '50px';
	document.getElementById('cat_sprite').style.top = '150px';
}
function x() {	LogIt('x');
	document.getElementById('cat_sprite').style.left = '100px';
	document.getElementById('cat_sprite').style.top = '150px';

}
function c() {	LogIt('c');
	document.getElementById('cat_sprite').style.left = '150px';
	document.getElementById('cat_sprite').style.top = '150px';

}
function v() {	LogIt('v');
	document.getElementById('cat_sprite').style.left = '200px';
	document.getElementById('cat_sprite').style.top = '150px';
}





var clear_set;	 // variable used to clear setInterval()


function animateStop() {
	console.log('Stop animation.')

	clearInterval(clear_set);
}


function animateGo() {
	console.log('Begin animation.')

	var    position = 150;	// start position for the image slicer
	const  interval = 100;	// 100 ms of interval for the setInterval()
	const  diff = 150;		// diff as a variable for position offset

	// we use the ES6 template literal to insert the variable "position"

	clear_set = setInterval ( () => {
		document.getElementById("cat_sprite").style.backgroundPosition = 
		`-${position}px 0px`; 

		if (position < 1500) {
			position = position + diff;

		} else {
			position = 150;		// reset the position to 150px
		}
	}

	, interval );	// end of setInterval
}					// end of animateScript()










// document.onkeyup = function() {	 // key binding		r
// 	if (window.event.key == 'r') {
// 		location.reload();
// 	}
// }


// document.onkeypress = function() {	 // key binding		w
// 	if (window.event.key == 'w') {
// 	}
// }

// document.onkeyup = function() {	 // key binding		s
// 	if (window.event.key == 's') {
// 	}
// }

// document.onkeydown = function() {	 // key binding		a
// 	if (window.event.key == 'a') {
// 	}

// 	if (window.event.key == 'd') {
// 		console.log('d up');
// 		document.getElementById('cat_sprite').style.margin = '0px';
// 		document.getElementById('drone').style.margin = '-50px';
// 	}
// }


















/*

$(document).ready(function(e) {

    var width = "+=" + $(document).width();

    $("#animate").animate({
	    left: width

	  }, 5000, function() {   // Animation complete.
  });
});





function readyState() {
	if   (document.readyState === "complete"
	  || (document.readyState !== "loading"
	  && !document.documentElement.doScroll) )
		{

	  callback();
	  console.log('callback');
	} else {
	  document.addEventListener("DOMContentLoaded", callback);
	}
}

var callback = function(){  // Handler when the DOM is fully loaded
};


if   (document.readyState === "complete"
  || (document.readyState !== "loading"
  && !document.documentElement.doScroll) )
	{
  callback();

} else {
  document.addEventListener("DOMContentLoaded", callback);
}

*/











/* You can animate anything. My code will animate a div (with an image, or any content you like) across the screen:

HTML:

<div id="animate">Sample</div>
CSS:

#animate {
    position: relative;
    border; 1px solid green;
    background: yellow;
    width: 100px;
    height: 100px;
}
JavaScript/jQuery code: */

