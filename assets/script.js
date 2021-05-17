// Assignment Code
var generateBtn = document.querySelector("#generate");

var special = ["$", "#", "@", "%", "^", "&", "*", "+", "!"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



// Write password to the #password input

  
  
// create function for generating password
var generatePassword= function() {
  var passwordLength = promptMessage();

// creates prompt message when generate button is clicked
function promptMessage() {
  
  
  var length = prompt ("Please enter the desired length of your password.");
  
  //checks for parameters for password and returns to prompt message
  if
  (length > 128 || length < 8) {
    alert ("Please choose a number between between 8 and 128.");
    promptMessage();
  }
  //goes through confirm messages for each type of character
  else {
  var includesNumbers = confirm("Select OK to include numbers");
  var includesLower = confirm ("Select OK to include lowercase letters");
  var includesUpper = confirm ("Select OK to include uppercase letters");
  var includesSpecial = confirm ("Select OK to include special characters"); }
  
  // if none is chosen, gives alert message and goes back to original prompt
  if (!includesNumbers && !includesLower && !includesUpper && !includesSpecial) {
    alert ("Please select at least one password character type");
    promptMessage();
  } 
  
var password = [];

if (includesNumbers===true){
  password.push(numeric);
}
 if (includesLower=== true) {
   password.push(lowerCase);
 }

 if (includesUpper=== true) {
   password.push(upperCase);
 }

 if (includesSpecial=== true ) {
   password.push(special);
 }

 console.log(Password);

 var finalPassword = ''; 

for (i=0; i<passwordLength; i++) {
var randomArray = finalPassword [Math.floor(Math.random() * finalPassword.length)];
var randomCharacters = randomArray [Math.floor(Math.random() * randomArray.length)];
finalPassword += randomCharacters


}
 return finalPassword;

} 
 

};





function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}















// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
