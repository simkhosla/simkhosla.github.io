function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
//get random integer function
var loserMessages = ['Are you Dazed or Confused? Try again!', 'Babe, Imma leave you if you don\'t get better. Try Again!', 'Your battle is nevermore. Try again!', 'Since you been playing this game, I\'ve hated you. Try again!', 'Good Times, Bad Times, but for you just the bad ones. Try again!', 'Was there a Communication Breakdown somewhere? Try again!', 'How Many More Times are you going to completely fail at this? Try again!'];
// list of loser messages
var messagebox = document.getElementById('message');
//message box declaration

var difficulty = 60;
//initially the difficulty is set to medium (ie. 60)

var easyBtn = document.getElementById('easy');
var medBtn = document.getElementById('med');
var hardBtn = document.getElementById('hard');
//Declaring the difficulty buttons as variables

easyBtn.onclick = function () {
  console.log("Diff is EASY");
  difficulty = 80;
    easyBtn.style.color = "#ffb951";
    medBtn.style.color = "black";
    hardBtn.style.color = "black";
    console.log(difficulty);
  }

medBtn.onclick = function () {
  console.log("Diff is medium");
  difficulty = 60;
  medBtn.style.color = "#ffb951";
  easyBtn.style.color = "black";
  hardBtn.style.color = "black";
  console.log(difficulty);
  }

hardBtn.onclick = function () {
  console.log("Diff is hard");
  difficulty = 30;
  hardBtn.style.color = "#ffb951"
  easyBtn.style.color = "black";
  medBtn.style.color = "black";
    console.log(difficulty);
    }


var runCanvas = function() {
    /*var difficulty =
    if (document.getElementById('easy').style.color = "green") {
      return
    }*/

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

//loads the canvas
    var paigeValue = getRandomInt(0,200);
    var plantValue = getRandomInt(0,200);
    var jpjValue = getRandomInt(0,200);
    var bonzoValue = getRandomInt(0,200);
//assigns x,y values to the beatles

    var paigeimg = new Image();
    paigeimg.onload = function() {
    ctx.drawImage(paigeimg, 60, paigeValue);
    }
    paigeimg.src = "ledZep/LedZep/paige.svg";
// loads paige symbol

    var jpjimg = new Image();
    jpjimg.onload = function() {
    ctx.drawImage(jpjimg, 160, jpjValue);
    }
    jpjimg.src = "ledZep/LedZep/jpj.svg";
//loads jpj symbol

    var bonzoimg = new Image();
    bonzoimg.onload = function() {
    ctx.drawImage(bonzoimg, 260, bonzoValue);
    }
    bonzoimg.src = "ledZep/LedZep/bonzo.svg";
//loads bonzo

    var plantimg = new Image();
    plantimg.onload = function() {
    ctx.drawImage(plantimg, 360, plantValue);
    }
    plantimg.src = "ledZep/LedZep/plant.svg";
//loads plant

    var ledzepMax = Math.max(paigeValue, jpjValue, bonzoValue, plantValue);
    var ledzepMin = Math.min(paigeValue, jpjValue, bonzoValue, plantValue);
//calculate the max/min beatles y for each round

    if (ledzepMax-ledzepMin<difficulty)
    {
      ctx.fillStyle = '#ffb951';
      ctx.fillRect(40,0,420,350);
      var lzlogoimg = new Image();
      lzlogoimg.onload = function() {
      ctx.drawImage(lzlogoimg, 380 , 255);
      }
      lzlogoimg.src = "ledZep/LedZep/ledzepwin.png";

      messagebox.style.color = "#ffb951";
      messagebox.innerHTML = "ZOMG YOU WON!!! Play again?";

    } else {
      messagebox.style.color = "black";
      messagebox.innerHTML = loserMessages[getRandomInt(0,loserMessages.length)];
      }
  ;
  }

  document.getElementById('button').onclick = function () {
  console.log('button is working')
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  runCanvas();
  console.log(difficulty);
  }
//loads the logo if the Led Zep symbols are in a row

//the end
