// Assignment Code
var generateBtn = document.querySelector("#generate");

var special = ["$", "#", "@", "%", "^", "&", "*", "+", "!"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



// Write password to the #password input



// create function for generating password
function generatePassword() {
  var passwordLength = promptMessage();

  // creates prompt message when generate button is clicked
  function promptMessage() {


    passwordLength = parseInt(prompt("Please enter the desired length of your password."));

    //checks for parameters for password and returns to prompt message
    if
      (passwordLength > 128 || passwordLength< 8) {
      alert("Please choose a number between between 8 and 128.");
      promptMessage();
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
      promptMessage();
    } 
  }

    var password = "";
    
    for (var i = 0; i < passwordLength; i++){

      if (includesNumbers === true && password.length < passwordLength) {
        password += getRandom(numeric);
       

      }
      if (includesLower === true && password.length < passwordLength) {
        password += getRandom(lowerCase);
      }

      if (includesUpper === true && password.length < passwordLength) {
        password += getRandom(upperCase);
      }

      if (includesSpecial === true && password.length < passwordLength) {
        password += getRandom(special);
      }
      
  }
  return password;
  
    function getRandom(array) {
      var random =Math.floor(Math.random() * array.length);
      var value = array[random];
      return value;
}

}




function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
