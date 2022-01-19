var generateBtn = document.querySelector("#generate"); //calls for the generate button and ID to query
var WORD1 = ['Cow','Moose','Shard','Power','Soltice','Alien',
'cHeESe', 'fUnGAI','Mustard','Quebec','Cupid',
'Sausage','Davenport','Tribunal','Ebikinezer'];//created an array of words for use in password
var WORD2 = ['sVt','mEoW','TurF','EnGiNe','Knight','NiGHt',
'Hibachi', 'HaMMeR', 'QUaKe', 'AtomiC', 'Sun', 'RUg',
'nIghTOWL','SierrA','exTrEMe','Ham','Quadratic'];//created an array of words for use in password
var UPPER = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];//created an array of uppercase for use in password
var LOWER = ['a','b','c','d','e','f','g','h','m','n','p','r','s','t','w','x','y','z'];//created an array of lowercase and did not inclue the common mistakenend values such as i l j for use in password
var SYMBOL = ['!','@','/','#','$','%','&','*','+','-','^'];//created an array of symbols for use in password
var SYMBOL2 = ['!','@','/','#','$','%','&','*','+','-','^'];//created an array of symbols for use in password , i made a duplicated list and called it symbol2 so the computer can generate a seperate vallue from array Symbol
var SYMBOL3 = ['☺','☻','♥','♦','♣','♠','•','◘','○','♂','♀','♪','♫','☼','►','◄','↕','‼','¶','§','▬','↨','↑','↓','→','←','∟','↔','▲','▼'];//created an array of unique characters
var DECI = ['1','2','3','4','5','6','7','8','9']; //created an array of string numbers

alert('Welcome to my password generator.');
var a = prompt('How many Characters do you want your password to be? Minimum 8 max, 128. Enter a number.');
var b = prompt('Would you like to use upper-case, lower-case, or a combination of both characters in your password, type: upper , lower , or both?');
var c = prompt('Would you like to use symbols and special characters in your password? If so type yes or if not then type no.');
console.log(a,b,c); // this allows us to store the values of a b and c to answer the questions for minimum requirements
/*
Enter Updated code here
*/

function writePassword() {
  var password = generatePassword(); //parent variable liked to global function that generates password
    function generatePassword(){ // defining the function below used to generate the password, this i child in the DOM within the genratePassword Function / variable password        
        var randomDec = DECI[Math.floor(Math.random()*DECI.length)]; //using math random to declare a variable to generate array values from the list containing decimal strings
        var randomWord1 = WORD1[Math.floor(Math.random()*WORD1.length)]; //using math random to declare a variable to generate array values from the list containing word strings list 1
        var randomWord2 = WORD2[Math.floor(Math.random()*WORD2.length)];//using math random to declare a variable to generate array values from the list containing word strings list 2
        var randomSymbol2 = SYMBOL2[Math.floor(Math.random()*SYMBOL2.length)];//using math random to declare a variable to generate array values from the list containing symbols list 2 to be different than symbols list 1 or 3
        var randomSymbol3 = SYMBOL3[Math.floor(Math.random()*SYMBOL3.length)];//using math random to declare a variable to generate array values from the list containing symbols list 3 to be different than symbols list 1 or 2
        var randomLower = LOWER[Math.floor(Math.random()*LOWER.length)];//using math random to declare a variable to generate array values from the list containing lowercase value
        var randomUpper = UPPER[Math.floor(Math.random()*UPPER.length)];//using math random to declare a variable to generate array values from the list containing uppercase values
        var randomSymbol = SYMBOL[Math.floor(Math.random()*SYMBOL.length)];;//using math random to declare a variable to generate array values from the list containing symbols
        value = [((Math.floor(randomDec))*(Math.round(randomDec)*randomDec))+randomUpper+randomSymbol3+
            (randomDec*randomDec)+randomLower+randomSymbol+randomWord2+
            randomSymbol3+randomUpper+randomWord1+randomUpper+randomDec+randomSymbol2];//My password generating algorithm
        return value; //wrapping VALUE to return to the generate password field
        }
        var passwordText = document.querySelector("#password"); // creates a variable to store the password in text and uses the document.queryselector to grab the password ID from the DOM in the HTML
        passwordText.value = password;/* saves password text from the document.querySelector ID password and liks this password to return to the
        generate password function so the password can be written in the box so the user can see it.*/
}

generateBtn.addEventListener("click", writePassword); /*when the generate button is click the event listener continues to call the write password function that then 
        calls the generate password function to be returned and written the the password generator box*/