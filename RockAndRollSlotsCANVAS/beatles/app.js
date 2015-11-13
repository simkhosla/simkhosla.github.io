//get random integer function :
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//loser messages for beatles:
var loserMessages = ['Who are you Yoko? Get those Beatles TOGETHER!', 'You\'re a loooooooser! Try again!', 'Did someone smack you with Maxwell\'s Silver Hammer? Try again!', 'Don\'t you dare let it be! Try again!', 'Yesterday, all your troubles seemed so far away. Try again!'];


//message box declaration
var messagebox = document.getElementById('message');


//initially the difficulty is set to medium (ie. 60) in case people don't push buttons
var difficulty = 60;

//Declaring the difficulty buttons as variables
var easyBtn = document.getElementById('easy');
var medBtn = document.getElementById('med');
var hardBtn = document.getElementById('hard');

easyBtn.onclick = function () {
  console.log("Diff is EASY");
  difficulty = 80;
  //changes color of menu bar to active button  :
    easyBtn.style.color = "#BADA55";
    medBtn.style.color = "black";
    hardBtn.style.color = "black";
    console.log(difficulty);
  }

medBtn.onclick = function () {
  console.log("Diff is medium");
  difficulty = 60;
  //changes color of menu bar to active button :
  medBtn.style.color = "#BADA55";
  easyBtn.style.color = "black";
  hardBtn.style.color = "black";
  console.log(difficulty);
  }

hardBtn.onclick = function () {
  console.log("Diff is hard");
  difficulty = 30;
  hardBtn.style.color = "#BADA55"
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
    var johnValue = getRandomInt(0,200);
    var paulValue = getRandomInt(0,200);
    var georgeValue = getRandomInt(0,200);
    var ringoValue = getRandomInt(0,200);
//assigns x,y values to the beatles

    var johnimg = new Image();
    johnimg.onload = function() {
    ctx.drawImage(johnimg, 60, johnValue);
    }
    johnimg.src = "beatles/beatles/john.svg";
    var paulimg = new Image();
// loads John

    paulimg.onload = function() {
    ctx.drawImage(paulimg, 160, paulValue);
    }
    paulimg.src = "beatles/beatles/paul.svg";
//loads paul

    var georgeimg = new Image();
    georgeimg.onload = function() {
    ctx.drawImage(georgeimg, 260, georgeValue);
    }
    georgeimg.src = "beatles/beatles/george.svg";
//loads george

    var ringoimg = new Image();
    ringoimg.onload = function() {
    ctx.drawImage(ringoimg, 360, ringoValue);
    }
    ringoimg.src = "beatles/beatles/ringo.svg";
//loads ringo

    var slotMax = Math.max(johnValue, paulValue, georgeValue, ringoValue);
    var slotMin = Math.min(johnValue, paulValue, georgeValue, ringoValue);
//calculate the max/min beatles y for each round

    if (slotMax-slotMin<difficulty)
    {
      ctx.fillStyle = '#BADA55';
      ctx.fillRect(40,0,420,350);
      var appleimg = new Image();
      appleimg.onload = function() {
      ctx.drawImage(appleimg, 400 , 250);
      }
      appleimg.src = "beatles/beatles/beatleswin.png";

      messagebox.style.color = "#9eb848";
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
