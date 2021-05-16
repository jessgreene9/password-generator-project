// Assignment Code
var generateBtn = document.querySelector("#generate");

var special = ["$", "#", "@", "%", "^", "&", "*", "+", "!"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


var generatePassword= function() {
  var passwordLength = promptMessage();

 




}

function promptMessage() {
  var choice = prompt ("Please enter the desired length of your password.");
  if (choice > 128 || choice < 8) {
    alert ("Please choose a number between between 8 and 128.");
    promptMessage();
} 
 
}















// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
