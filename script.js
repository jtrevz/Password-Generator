// Assignment Code
var generateBtn = document.querySelector("#generate");

var upper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var lower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var characterArray = [];
var temp = "";
var temp1;
var passArray = [];

var spec = ["!", "@", "#", "%", "^", "&", "*", "(", ")", "+", "="];

function getRandomupper() {
  return Math.floor(Math.random() * Math.floor(26));
}

function getRandomspec() {
  return Math.floor(Math.random() * Math.floor(11));
}

function getRandomnum() {
  return Math.floor(Math.random() * Math.floor(10));
}

function randomPlace() {
  return Math.floor(Math.random() * Math.floor(characterArray.length));
}

function generatePassword() {
  confirmLength = prompt(
    "How long would you like your password? (Must be between 8-128"
  );
  if (confirmLength < 8 || confirmLength > 128) {
    alert("Invalid: Must be a number and must be less than 8 and 128");
    return;
  }
  var confirmU = confirm("Would you like to use uppercase letters?");
  if (confirmU) {
    characterArray.push("U");
  }
  var confirmL = confirm("Would you like to use lowercase letters?");
  if (confirmL) {
    characterArray.push("L");
  }
  var confirmS = confirm("Would you like to use special characters?");
  if (confirmS) {
    characterArray.push("S");
  }
  var confirmN = confirm("Would you like to use numbers?");
  if (confirmN) {
    characterArray.push("N");
  }
  if (characterArray.length === 0) {
    return;
  }

  for (i = 0; i < confirmLength; i++) {
    temp = characterArray[randomPlace()];
    if (temp === "U") {
      temp1 = upper[getRandomupper()];
      passArray.push(temp1);
    } else if (temp === "L") {
      temp1 = lower[getRandomupper()];
      passArray.push(temp1);
    } else if (temp === "S") {
      temp1 = spec[getRandomspec()];
      passArray.push(temp1);
    } else {
      temp1 = getRandomnum();
      passArray.push(temp1);
    }
  }
  return passArray.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector(#password);

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
