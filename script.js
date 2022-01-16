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
alert("Welcome to the password generator tool. Answer the prompts to determine the requirements needed for a password.");
console.log("Hello World");
function ask(UPPERCASE ) { //UPPERCASE, LOWERCASE, NUMBERS, SYMBOLS, CHARACTERS) {
  function isUpper(_xA){
    prompt('Type TRUE if you want uppercase');
    console.log("isUpper() works");
    String.toUpperCase();
    //return;
  };
  function isLower(_xB){
    prompt('Type TRUE if you want lowercase');
    console.log("isLower() works");
    String.toLowerCase();
    //return;
  };
  function isNumbers(_xC){
    prompt('Type TRUE if you want Numbers');
    console.log('isNumbers() works');
  };
  function isSymbols(_xD){
    prompt('Type TRUE if you want Symbols');
    console.log('isSymbols() works');
  };
  function isChars(_xE){
    prompt('Type a number of 8 or greater to choose how many characters you want in your password');
    console.log('isChars() works');
  };
  UPPERCASE = _xA ;
  var _xA = prompt(isUpper());
  _xA='Uppercase';
  LOWERCASE =_xB ;
  var _xB = prompt(isLower());
  _xB='Lowercase';
  NUMBERS =_xC ;
  var _xC = prompt(isNumbers());
  _xC='Numbers';
  SYMBOLS =_xD ;
  var _xD = prompt(isSymbols());
  _xD='Symbols';
  CHARACTERS =_xE ;
  var _xE = prompt(isChars());
  _xE='Characters';
  //isUpper();
  //isLower();
  };
  console.log('ask() function works');


  /*window.alert("In this password generator you can generate a password with a minimum of 8 characters. You can select to use lowercase, uppercase, numeric, and or special characters if you want.");
  window.alert("take your pick");
  window.prompt("How many characters would you like to make your password? Enter a number and the minimum is 8 characters", int=("8")); //create a function that can store int to tie to length of password
  window.prompt("UPPERCASE? LOWERCASE? Combination OF THE TWO?",""); //create function for radio buttons that can be stored
  window.prompt("Would you like the password to contain symbols?", ""); //create a radio button for this as well as a method to generate symbols 


}*/
ask();

/*function generatePassword() {
  var prompt.ALPHABET

} */

// Write password to the #password input
/*
genRandomNumbers = function getRandomNumbers() {
  const array = new Uint32Array(10);
  crypto.getRandomValues(array);

  const randText = document.getElementById("myRandText");
  randText.textContent = "The random numbers are: "
  for (let i = 0; i < array.length; i++) {
    randText.textContent += array[i] + " ";
  }
}

getRandomNumbers();

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log();
  return(password);

  genRandomNumbers = function getRandomNumbers() {
    const array = new Uint32Array(10);
    crypto.getRandomValues(array);
  
    const randText = document.getElementById("myRandText");
    randText.textContent = "The random numbers are: "
    for (let i = 0; i < array.length; i++) {
      randText.textContent += array[i] + " ";
    }
  }
  
  getRandomNumbers();
}*/

/*function passwordRules() { //Math.random()
  var minChars = {i
  }

  var alphabet = {
    let text = "abcdefghijklmnopqrstuvwxyz";

  }

  var ALPHABET = {
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  var NUMBERS = {"0123456789"}
console.log("console test passwordRules");
 /* i>==password.length(7);
  var password = [];  <--define the array Shmillis
  console.log(password.length);

  for (var i=0; i > password.length; i++) {
    console.log("Your password length will be " + password[i] + "characters long.")
  }*//*
} */

//function generatePassword() {
 // if 
//}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
getElementById.generateBtn('click', writePassword);

