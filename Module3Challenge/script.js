// Assignment Code

//Generation Function

var generateBtn = document.querySelector("#generate");


 /*function randomInt(min, max) {
  if (!max) {
    max = min;
    min = 0;
  }
  //return Math.floor(Math.random()*(max - min) + min)
  var rand = Math.random();
  return Math.floor(min*(1 - rand) + rand*max);
}

function getRandomItem(list) {
  return list[randomInt(list.length)];
}
function generatePassword () {

  while (true) {
    var userInput = window.prompt("How long do you want your password to be?");

  

  // user exited the prompt

  if (userInput === null) {
    return;
  }
*/
function passwordLength() {
  var passwordLength = parseInt(userInput);
}
  //if (isNaN(passwordLength)) {
  //  window.alert("That's not a number");
 // }else if (passwordLength < 8 || passwordLength > 128) {
 //     window.alert("Invalid password length. Length should be between 8 and 128 characters.");
 // } else {
   // break;
 // }
    
  //}

 /* if (userInput === null) {
    return
  }

  if (isNaN(passwordLength)) {
    window.alert("Please input a number!!")
    return
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8 and 128 characters")
  return
  
  }

  */

  //User Prompts

  //var userInput = window.prompt("How many characters would you want your password")

  //var passwordLength = parseInt(userInput)

 /* if (isNaN(passwordLength)) {
    window.alert("That's not a number")
    return
  }

  if (userInput === null) {
    return
  }

  if (isNaN(passwordLength)) {
    window.alert("Please input a number!!")
    return
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8 and 128 characters")
    return
  }

*/
//Character Variables

//var userWantsNumbers = window.confirm("Do you want to include numbers in your password?")
var userWantsLowercase = window.confirm("Do you want to include lowercase letters?");
var userWantsUppercase = window.confirm("Do you want to include uppercase letters?");
var userWantsNumbers = window.confirm("Do you want to include numbers?");
var userWantsSymbols = window.confirm("Do you want to include symbols?");

////var lowercaseList = [String.fromCharCode(Math.floor(Math.random() * 26) + 97)]
var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseList = [];
//var numberList = [String.fromCharCode(Math.floor(Math.random() * 10) + 48)]
var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*"];

var optionsCart = [];

//User input

for (var i = 0; i < lowercaseList.length; i++) {
  uppercaseList[i] = lowercaseList[i].toUpperCase();
}

if (userWantsLowercase === true) {
  optionsCart.push(lowercaseList);
}

if (userWantsUppercase === true) {
  optionsCart.push(uppercaseList);
}

if (userWantsNumbers === true) {
  optionsCart.push(numberList);
}

if (userWantsSymbols === true) {
  optionsCart.push(symbolList);
}

if (optionsCart.length === 0) {
  optionsCart.push(lowercaseList);
}

var generatedPassword = " ";

for (var i = 0; i <passwordLength; i++) {
  //var randomItem = optionsCart[randomInt(0, optionsCart.length - 1)]
  var randomList = getRandomItem(optionsCart);
  var randomChar = getRandomItem(randomList);
  generatedPassword += randomChar;
  //console.log(randomChar)
}

//return generatedPassword;

//}

//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  
  return generatePassword;


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  generatePassword();
  //if (!password) return 
  //if (password)  {

  
  //passwordText.value = password;
  //}
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


