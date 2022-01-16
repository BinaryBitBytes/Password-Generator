

// Assignment Code
prompt();
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(password) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  var characters = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var passwordLengthChars = 8 ;
  var password ='';

  passwordText.value = password;}

  for (var i=0; i <= passwordLengthChars; i++){
    var randomPass = Math.floor(characters.lengthChars * Math.random());
    password += chars.substring(randomPass, randomPass+1); 
  }



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
document.getElementById('generate').value = passwordText ;

var password=document.getElementById('password');