// Assignment code here
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters =[ "@","%","+","\\","/","'","!","#","$","^","?",":",",",")","(","}","{","]","[","~","-","_",".",]

function generatePassword(){
var passLength = prompt("How many characters would you like in your generated password?","8-128 characters");

  if (isNaN(passLength)){
  alert("Entry must be a number");
  return null;
  }
  if(8 > passLength || passLength > 128 ){
  alert("Password length must be at least 8 characters but no more than 128!");
  return null;
  }
  var hasLowerCase = confirm("Click OK to confirm the password includes a lower case letter");
  var hasUpperCase = confirm("Click OK to confirm the password includes an upper case letter");
  var hasNumbers = confirm("Click OK to confirm the password includes a number");
  var hasCharacters = confirm("Click OK to confirm the password includes a special character");

  if (
    hasLowerCase === false &&
    hasUpperCase === false &&
    hasNumbers === false &&
    hasCharacters === false
  ){
    alert("Password must contain at least one character type");
    return null;
  }
  var options = []
   if(
    hasLowerCase
   ){options =[...lowerCaseLetters,...options] }
   if(
    hasUpperCase
   ){options =[...upperCaseLetters,...options] }
   if(
    hasNumbers
   ){options =[...numbers,...options] }
   if(
    hasCharacters
   ){options =[...specialCharacters,...options] }
   let password = "";
    for( let i=0; i<passLength; i++){
      password += options[Math.floor(Math.random() * options.length)] 
    }
   return password;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
