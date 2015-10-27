
//cocktails.pop();
//cocktails.pop() gets rid of last item in an array

//cocktails.shift();
// .shift() removes the first item in the array

//cocktails.push();
// .push() adds to the last item in the array

//cocktails.unshift();
// .unshift() adds to the first item in the array

//cocktails.reverse();
// .reverse() flips the array

//var cocktails = ['gin & tonic', 'white russian', 'mojito', 'sangria', 'grape ape' ];

//for (var i = 0; i < cocktails.length; i++) {
  //console.log('i = '+i);
  //console.log('array length = '+cocktails.length)
  //console.log("I could use a..."+cocktails[i]);};

// for (TAB) will give you a basic for statement
// for (var i = 0; i < .length; i++) {[i]}


var age = confirm('Are you over 21?');
if (age === true) {
  alert('huzzah');
}
else {
  alert('soon.jpg');
}

//if (expression) {
//  BLOCK OF CODE
// } else {
//  BLOCK OF CODE
// }

var userInput = prompt('what is your name?');

if (userInput.length < 1) {
  alert("hey, you didn't give us your name!");
} else {
  alert("Hey there "+userInput+"!!!");
}

Boolean(0, "", NaN, null, undefined) = FALSE

Boolean(1, "abc", 3.14) = TRUE


if (age >= 21 && hasMoney == true) {
  //you can buy booze
}

if (true || false) {
  console.log('boolean party!')
}



var car = 'mazda';
switch (car) {
  case 'mazda':
    alert('mazdas! zoom zoom!');
    break;
  case 'nissan':
    alert('the leaf is green');
    break;
  default:
    alert('your car is not here?!');
    break;
}


var personInHouse = prompt('what is your name?');
switch (personInHouse.toLocaleLowerCase()) {
  case 'alex':
    alert('welcome home!');
    break;
  case 'simran':
    alert('hey me!')
    break;
  case 'rishabh':
    alert('heyyyy buddeh');
    break;
  default:
    alert('wtf are you doing in my house?')
    break;
}
