///////// Assignment Code
var generateBtn = document.querySelector("#generate");
//////////////////////////////////////////////

///////// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  //////////////My code/////////////////
  function generatePassword(){
      for(i=0; i <= password.length[7]; i++ )
  }

}
//////////////////////////////////////////////

///////// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
////////////////////////////////////////////////
