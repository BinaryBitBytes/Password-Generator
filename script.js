/*/ Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

*/

// Assignment Code
var generateBtn = document.querySelector("#generate");

function prompt() {
  console.log('Hello World');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(generatePassword()); //placed generatePassword in console log to be printed in console//
}

function generatePassword() {
  var password = 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

