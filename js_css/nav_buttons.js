
    var clickity = new Howl({urls: ["./assets/click.ogg"] });
    var swooshIn = new Howl({urls: ["./assets/swoosh1.ogg"] });
    var swooshOut = new Howl({urls: ["./assets/swoosh2.ogg"] });

    function Soundy() {
      if (Math.random() < 0.6) {
        clickity.play();
      } else if (Math.random() > 0.5) {
         swooshIn.play();
      } else {
        swooshOut.play();
      }
    }

    function GoBack() {
      swooshOut.play();
      setTimeout(function() {
        window.location = './quadrant/index.html';
      }, 400);
    }

    function Clicked() {
      clickity.play();
      setTimeout(function() {
        window.location = './cat/index.html';
      }, 300);
    }

    function GoForward() {
      swooshIn.play();
      setTimeout(function() {
        window.location = './flashcards/index.html';
      }, 300);
    }