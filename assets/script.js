// Assignment Code
var generateBtn = document.querySelector("#generate");

var special = ["$", "#", "@", "%", "^", "&", "*", "+", "!"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var userChoices = [];





// create function for generating password
function generatePassword() {


  // creates prompt message when generate button is clicked



  passwordLength = parseInt(prompt("Please enter the desired length of your password."));

  //checks for parameters for password and returns to prompt message
  if
    (passwordLength > 128 || passwordLength < 8) {
    alert("Please choose a number between between 8 and 128.");
    return generatePassword();
  }
  //goes through confirm messages for each type of character
  else {
    var includesNumbers = confirm("Select OK to include numbers");
    var includesLower = confirm("Select OK to include lowercase letters");
    var includesUpper = confirm("Select OK to include uppercase letters");
    var includesSpecial = confirm("Select OK to include special characters");
  }

  // if none is chosen, gives alert message and goes back to original prompt
  if (!includesNumbers && !includesLower && !includesUpper && !includesSpecial) {
    alert("Please select at least one password character type");
    return generatePassword();
  }


  if (includesSpecial) {
    userChoices = userChoices.concat(special);
  }
  if (includesNumbers) {
    userChoices = userChoices.concat(numeric);
  }
  if (includesLower) {
    userChoices = userChoices.concat(lowerCase);
  }
  if (includesUpper) {
    userChoices = userChoices.concat(upperCase);
  }


  var password = "";


    if (includesNumbers) {
      password += numeric[Math.floor(Math.random() * numeric.length)]

    }
    if (includesLower) {
      password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    }

    if (includesUpper) {
      password += upperCase[Math.floor(Math.random() * upperCase.length)];
    }

    if (includesSpecial) {
      password += special[Math.floor(Math.random() * special.length)];
    }

    var passwordRemaining = passwordLength - password.length;

    for (var i = 0; i < passwordRemaining; i++) {
    password += userChoices[Math.floor(Math.random() *userChoices.length)];
  }

  userChoices= [];

  return password;



}
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
