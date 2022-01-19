var x = 'response';
prompt('Welcome to the password generator', x);
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(passwordText) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//--------------------------------------
function generatePassword(password){
    /////pick a random value of code char///
    Math.random().toString()
    noRepeat();
    const character = 'ABC123'; //creates a constant called character in a form of an array
    //a[a.length] = ''; //length property provides easy way to append new element to array
    //a = new Array(characters);
    //characters = a;
    //return password;
    function gen(length) {
        let pwd = '';
        const charLength = character.length;
        for ( let x=0; x < length; x++){
            pwd += character.charAt(Math.floor(Math.random() * charLength));
        }
        return pwd;
    }

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
document.getElementById("#generate").innerHTML = generatePassword.toString(); //created event listener to return password in field when 'Generate Password' is clicked
