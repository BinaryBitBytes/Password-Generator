///////// Assignment Code
var generateBtn = document.querySelector("#generate");
//////////////////////////////////////////////
function setCharLength(x) {
  const
}

///////// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  //////////////My code/////////////////
  function generatePassword(){
    const pwdChars = []
    for (var i = 0; i<passwordLengthChars; i++){
      const characters = codes[(Math.random() * codes.length)]
      passwordLengthChars.push(String.fromCharCode(characters))
    }
    return pwdChars.join('')
    /*      for(i=0; i <= password.length[math.random(characters[7])]; i++){
        i=addEventListener.password(onclick, String["#password+.characters"]);
        var password = document.querySelector("#password"); 
        var characters = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var passwordLengthChars = 8 ;
        var password ='';

      }*/
  } //closing tag to generatePAssword*() fn

}
//////////////////////////////////////////////

///////// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener('input', );
document.getElementById('#password');
generateBtn.addEventListener('submit', ){
  e.preventDefault()
  const password = generatePassword(passwordLengthChars, codes.length)
}
////////////////////////////////////////////////
