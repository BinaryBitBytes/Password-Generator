/*------STEP #1-------------------------------------------------
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(1);
  function generatePassword(){
    value = '123';
    return value;
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//
------------I made my first priority in this project to print
 any value when the button was clicked. I did this to start out
  by simplifying the equation function to print first.*/


/*---------Step# 2--- In this step I am using a reference from 
W3Schools called the Fischer-Yates Meathod of using math.random
 and the array sort function to logically sort the password each 
 time the button is clicked https://www.w3schools.com/js/js_array_sort.asp */
/*
const chars = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,a,b,c,d,e,f,g,h,m,n,p,r,s,t,w,x,y,z,0,1,2,3,4,5,6,7,8,9,!,@,/,\,#,$,%,&,*,+,-,^];

for (let i = chars.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * i)
  let k = chars[i]
  chars[i] = chars[j]
  chars[j] = k
}
*/

/////////// Mod 1 Below//////////
/*
var generateBtn = document.querySelector("#generate");
var password.Length = [8];

function writePassword() {
  var password = generatePassword(1);
  function generatePassword(){
    value = '123';
    return value * password.Length;
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
///////////////////////////////////////////////////////
////////////Mod 2 Below////////
/*/
var generateBtn = document.querySelector("#generate");
//var password.Length = int(8);
//const chars =
var WORD1 = ['Cow','Moose','Shard','Power','Soltice','Alien',
'cHeESe', 'fUnGAI','Mustard','Quebec','Cupid',
'Sausage','Davenport','Tribunal','Ebikinezer'];
var WORD2 = ['sVt','mEoW','TurF','EnGiNe','Knight','NiGHt',
'Hibachi', 'HaMMeR', 'QUaKe', 'AtomiC', 'Sun', 'RUg',
'nIghTOWL','SierrA','exTrEMe','Ham','Quadratic'];
var UPPER = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var LOWER = ['a','b','c','d','e','f','g','h','m','n','p','r','s','t','w','x','y','z'];
var SYMBOL = ['!','@','/','#','$','%','&','*','+','-','^'];
var SYMBOL2 = ['!','@','/','#','$','%','&','*','+','-','^'];
var SYMBOL3 = ['☺','☻','♥','♦','♣','♠','•','◘','○','♂','♀','♪','♫','☼','►','◄','↕','‼','¶','§','▬','↨','↑','↓','→','←','∟','↔','▲','▼'];
var DECI = ['1','2','3','4','5','6','7','8','9'];
function writePassword() {
  var password = generatePassword();
    function generatePassword(){
        var randomDec = DECI[Math.floor(Math.random()*DECI.length)];
        var randomWord1 = WORD1[Math.floor(Math.random()*WORD1.length)];
        var randomWord2 = WORD2[Math.floor(Math.random()*WORD2.length)];
        var randomSymbol2 = SYMBOL2[Math.floor(Math.random()*SYMBOL2.length)];
        var randomSymbol3 = SYMBOL3[Math.floor(Math.random()*SYMBOL3.length)];
        var randomLower = LOWER[Math.floor(Math.random()*LOWER.length)];
        var randomUpper = UPPER[Math.floor(Math.random()*UPPER.length)];
        var randomSymbol = SYMBOL[Math.floor(Math.random()*SYMBOL.length)];
        //var A = Math.random();//['A'+'b'+'C'];//+ chars[password.Length];
        value = [((Math.floor(randomDec))*(Math.round(randomDec)*randomDec))+randomUpper+randomSymbol3+(randomDec*randomDec)+randomLower+randomSymbol+randomWord2+randomSymbol3+randomUpper+randomWord1+randomUpper+
            randomDec+randomSymbol2];
        //'C' = 3;
        return value;//*password.Length;
        }
        var passwordText = document.querySelector("#password");

        passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword); 