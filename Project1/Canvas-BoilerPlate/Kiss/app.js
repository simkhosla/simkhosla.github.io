function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
//get random integer function
var loserMessages = ['I guess instead of Rock and Roll you wanna fail at this all night. Try again!','God Gave Rock and Roll to ya, and you\'re failing him right now.','I was made for mockin\' you baby, you were made to fail at this.'];
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
    easyBtn.style.color = "#fe3324";
    medBtn.style.color = "black";
    hardBtn.style.color = "black";
    console.log(difficulty);
  }

medBtn.onclick = function () {
  console.log("Diff is medium");
  difficulty = 60;
  medBtn.style.color = "#fe3324";
  easyBtn.style.color = "black";
  hardBtn.style.color = "black";
  console.log(difficulty);
  }

hardBtn.onclick = function () {
  console.log("Diff is hard");
  difficulty = 30;
  hardBtn.style.color = "#fe3324"
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
    var simmonsValue = getRandomInt(0,200);
    var stanleyValue = getRandomInt(0,200);
    var frehleyValue = getRandomInt(0,200);
    var crissValue = getRandomInt(0,200);
//assigns x,y values to the beatles

    var simmonsimg = new Image();
    simmonsimg.onload = function() {
    ctx.drawImage(simmonsimg, 60, simmonsValue);
    }
    simmonsimg.src = "Kiss/Kiss/Simmons.svg";
// loads simmons symbol

    var stanleyimg = new Image();
    stanleyimg.onload = function() {
    ctx.drawImage(stanleyimg, 160, stanleyValue);
    }
    stanleyimg.src = "Kiss/Kiss/stanley.svg";
//loads jpj symbol

    var frehleyimg = new Image();
    frehleyimg.onload = function() {
    ctx.drawImage(frehleyimg, 260, frehleyValue);
    }
    frehleyimg.src = "Kiss/Kiss/Frehley.svg";
//loads frehley

    var crissimg = new Image();
    crissimg.onload = function() {
    ctx.drawImage(crissimg, 360, crissValue);
    }
    crissimg.src = "Kiss/Kiss/Criss.svg";
//loads criss

    var kissMax = Math.max(simmonsValue, stanleyValue, frehleyValue, crissValue);
    var kissMin = Math.min(simmonsValue, stanleyValue, frehleyValue, crissValue);
//calculate the max/min beatles y for each round

    if (kissMax-kissMin<difficulty)
    {
      ctx.fillStyle = '#fe3324';
      ctx.fillRect(40,0,420,350);
      var kisslogoimg = new Image();
      kisslogoimg.onload = function() {
      ctx.drawImage(kisslogoimg, 425 , 260);
      }
      kisslogoimg.src = "Kiss/Kiss/kisswin.png";

      messagebox.style.color = "#fe3324";
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
