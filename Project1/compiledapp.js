//establishes which band you're playing with:
var band = 0;

if ($('body').hasClass('mainBeatles')) {
  band = 0;
  console.log(band);
};

if ($('body').hasClass('mainKiss')) {
  band = 1;
  console.log(band);
};

if ($('body').hasClass('mainLedZep')) {
  band = 2;
  console.log(band);
};



//get random integer function :
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

//loads up the winning audio noises

var audioBeatles = new Audio("winSounds/beatles.ogg");
var audioKiss = new Audio("winSounds/kiss.ogg");
var audioLZ = new Audio("winSounds/ledzep.ogg");

var winSounds = [audioBeatles, audioKiss, audioLZ];


//loser messages for each band:
var beatlesLoserMessages = ['Who are you Yoko? Get those Beatles TOGETHER!', 'You\'re a loooooooser! Try again!', 'Did someone smack you with Maxwell\'s Silver Hammer? Try again!', 'Don\'t you dare let it be! Try again!', 'Yesterday, all your troubles seemed so far away. Try again!','Who are you Yoko? Get those Beatles TOGETHER!', 'You\'re a loooooooser! Try again!'];
var kissLoserMessages = ['I guess instead of Rock and Roll you wanna fail at this all night. Try again!','God Gave Rock and Roll to ya, and you\'re failing him right now.','I was made for mockin\' you baby, you were made to fail at this.','I guess instead of Rock and Roll you wanna fail at this all night. Try again!','God Gave Rock and Roll to ya, and you\'re failing him right now.','I was made for mockin\' you baby, you were made to fail at this.','I was made for mockin\' you baby, you were made to fail at this.'];
var lzLoserMessages = ['Are you Dazed or Confused? Try again!', 'Babe, Imma leave you if you don\'t get better. Try Again!', 'Your battle is nevermore. Try again!', 'Since you been playing this game, I\'ve hated you. Try again!', 'Good Times, Bad Times, but for you just the bad ones. Try again!', 'Was there a Communication Breakdown somewhere? Try again!', 'How Many More Times are you going to completely fail at this? Try again!'];

//everything below will change depending on which band is selected:

//array defining loser messages

var loserMessages = [beatlesLoserMessages, kissLoserMessages, lzLoserMessages];

//array defining band colors
var bandColor = ['#bada55', '#fe3324', '#ffb951'];

//array defining button colors classes

var buttonClass = ["buttonB", "buttonK", "buttonLZ"];

//array defining background static images

var bandStatic = ['beatles/beatlesStatic.gif', 'Kiss/kissStatic.gif', 'ledZep/lzStatic.gif'];

//arrays defining image sources:
var firstIMGsrc = ['beatles/beatles/john.svg', 'Kiss/Kiss/Simmons.svg','ledZep/LedZep/paige.svg'];
var secondIMGsrc = ['beatles/beatles/paul.svg', 'Kiss/Kiss/Stanley.svg','ledZep/LedZep/jpj.svg'];
var thirdIMGsrc = ['beatles/beatles/george.svg', 'Kiss/Kiss/Frehley.svg','ledZep/LedZep/bonzo.svg'];
var fourthIMGsrc = ['beatles/beatles/ringo.svg', 'Kiss/Kiss/Criss.svg','ledZep/LedZep/plant.svg'];

//sets the canvas background
var canvasBackground = ['beatles/canvasbackground.jpg', 'Kiss/canvasbackground.jpg', 'ledZep/canvasbackground.jpg'];

var canvasClass = ['.canvasB','.canvasK', '.canvasLZ'];

//message box declaration
var messagebox = document.getElementById('message');

//win images
var winIMGsrc = ['beatles/beatles/beatleswin.png', 'Kiss/Kiss/kisswin.png', 'ledZep/LedZep/ledzepwin.png'];

var winIMGx = [400, 425, 380];

var winIMGy = [250, 260, 255];

//initially the difficulty is set to medium (ie. 60) in case people don't push buttons
var difficulty = 70;



//Declaring the difficulty buttons as variables
var easyBtn = document.getElementById('easy');
var medBtn = document.getElementById('med');
var hardBtn = document.getElementById('hard');

easyBtn.onclick = function () {
  console.log("Diff is EASY");
  difficulty = 90;
  //changes color of menu bar to active button  :
    easyBtn.style.color = bandColor[band];
    medBtn.style.color = "black";
    hardBtn.style.color = "black";
    console.log(difficulty);
  }

medBtn.onclick = function () {
  console.log("Diff is medium");
  difficulty = 70;
  //changes color of menu bar to active button :
  medBtn.style.color = bandColor[band];
  easyBtn.style.color = "black";
  hardBtn.style.color = "black";
  console.log(difficulty);
  }

hardBtn.onclick = function () {
  console.log("Diff is hard");
  difficulty = 40;
  //changes color of menu bar to active button :
  hardBtn.style.color = bandColor[band];
  easyBtn.style.color = "black";
  medBtn.style.color = "black";
    console.log(difficulty);
    }


//adding players
    var count = 0;
    var pickPlayer = 1;

    $('#player1').click (function () {
      pickPlayer = 1;
      $('#player1').css("background-color", bandColor[band]);
      $('#player2').css("background-color", 'white');
      console.log(pickPlayer);
    });


    $('#player2').click (function () {
      pickPlayer = 2;
      $('#player2').css("background-color", bandColor[band]);
      $('#player1').css("background-color", 'white');
      console.log(pickPlayer);
    });

    var player1 = {
      name: "Player 1",
      score: 0
    }

    var player2 = {
      name: "Player 2",
      score: 0
    }



    //   if (pickPlayer == 1) {
    //   count = count + 1;
    //   player1.score= player1.score + 1;
    //   $('#score1').text(player1.score);
    //   console.log(player1.score);
    // } else if (pickPlayer == 2) {
    //   count = count + 1;
    //   player2.score= player2.score + 1;
    //   $('#score2').text(player2.score);
    // }


var turnsLeft = 20;

var runCanvas = function() {

//changes canvas background according to band
  $('#canvas').css("background-image", "url("+canvasBackground[band]+")");

//loads the canvas
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

//randomize values
  var firstValue = getRandomInt(0,200);
  var secondValue = getRandomInt(0,200);
  var thirdValue = getRandomInt(0,200);
  var fourthValue = getRandomInt(0,200);



//loads each of the images

    var firstIMG = new Image();
    firstIMG.onload = function() {
    ctx.drawImage(firstIMG, 60, firstValue);
    }
    firstIMG.src = firstIMGsrc[band];
// loads first band member

    var secondIMG = new Image();
    secondIMG.onload = function() {
    ctx.drawImage(secondIMG, 160, secondValue);
    }
    secondIMG.src = secondIMGsrc[band];
//loads second band member

    var thirdIMG = new Image();
    thirdIMG.onload = function() {
    ctx.drawImage(thirdIMG, 260, thirdValue);
    }
    thirdIMG.src = thirdIMGsrc[band];
//loads third band member

    var fourthIMG = new Image();
    fourthIMG.onload = function() {
    ctx.drawImage(fourthIMG, 360, fourthValue);
    }
    fourthIMG.src = fourthIMGsrc[band];

//loads fourth band member

    var slotMax = Math.max(firstValue, secondValue, thirdValue, fourthValue);
    var slotMin = Math.min(firstValue, secondValue, thirdValue, fourthValue);
//calculate the max/min beatles y for each round

    if (slotMax-slotMin<difficulty)
    {
      ctx.fillStyle = bandColor[band];
      ctx.fillRect(40,0,420,350);
      var winIMG = new Image();
      winIMG.onload = function() {
      ctx.drawImage(winIMG, winIMGx[band], winIMGy[band]);
      }
      winIMG.src = winIMGsrc[band];
      $( "canvas" ).effect( "shake" );
      messagebox.style.color = bandColor[band];
      messagebox.innerHTML = "ZOMG YOU GOT ONE!";

      if (pickPlayer ==1) {
        player1.score = player1.score + 1;
        $('#score1').text(player1.score);
        console.log('Player is player '+pickPlayer+" and their score is now "+score1);
      } else if (pickPlayer=2) {
        player2.score = player2.score + 1;
        $('#score2').text(player2.score);
        console.log('Player is player '+pickPlayer+" and their score is now "+score2);
      }

      //plays win sounds
      winSounds[band].play();

    } else {

      messagebox.style.color = "black";
      messagebox.innerHTML = loserMessages[band][getRandomInt(0,7)];

      }

};


//calculates number of turns left
var turnCount = function () {
  turnsLeft = turnsLeft - 1;
  $('#turnsDisplay').text(turnsLeft+" spins left!")

};

//

//styling of a few things when the document loads
$( document ).ready(function() {
  $('#instructionsClicker').css("background-color", bandColor[band]);
    medBtn.style.color = bandColor[band];
//changes instruction color according to band
    $('#instructions').css("background-color", bandColor[band]);
//defaults begins with player1
    $('#player1').css("background-color", bandColor[band]);

});

//below is what happens on button click
    document.getElementById('button').onclick = function () {

      console.log('button is working');
      var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      runCanvas();
      turnCount();

      if (turnsLeft == 0) {
        $('#canvas').css("background-image", "url("+bandStatic[band]+")");
        console.log("turns left is 0");
        $("button").prop("disabled",true);
        $("button").addClass('buttonDisabled');
        $('#turnsDisplay').append(" CLICK HERE TO RESET GAME.");
      } else {
        console.log(turnsLeft+"turnsLeft")
      }

      console.log(difficulty);
    };





//toggle instructions
$("#instructionsClicker").click(function(){
       $("#instructionsClicker").hide();
       $("#instructions").toggle('blind');
   });

$(".underline").click(function(){
      $("#instructions").toggle("blind");
      $("#instructionsClicker").show();
      });

//click to reset game
$("#turnsDisplay").click(function(){
      turnsLeft = 30;

      console.log(turnsLeft);
      $('#turnsDisplay').text(turnsLeft+" spins left!");


      if (pickPlayer == 1) {
      player1.score = 0;
      $('#score1').text(player1.score);
      console.log(player1.score);
      console.log('player1 score should be 0 now');
    } else if (pickPlayer == 2){
      player2.score = 0;
      console.log(player2.score);
      $('#score2').text(player2.score);
      console.log('player2 score should be 0 now');
    }

      $("button").prop("disabled",false);

      $("button").removeClass('buttonDisabled');
      $("button").addClass(buttonClass[band]);


      console.log(button.className);

      $('#canvas').css("background-image", "url("+canvasBackground[band]+")");
});

//reset player scores by clicking on score

$("#score1").click(function(){
  player1.score = 0;
  $('#score1').text(player1.score);
});


$("#score2").click(function(){
  player2.score = 0;
  $('#score2').text(player2.score);
});
