// Assignment Code

var specChar = ["!", "@", "#", "$", "%", "&", "*"];
var uppCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
var lowCase = ["a", "b", "c", "d", "e", "f", "g". "h", "i", "j"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

// click on the button
// ask how many characters 8-128 collect information as a variable
// do they want special characters collect information as a variable
// do they want upper case collect information as a variable
// do they want lower case collect information as a variable

// inside the generate password function


function = generatePassword ()

      // ask if they want how many characters 8-128 
      // ask do they want special characters collect information as a variable
      // do they want upper case collect information as a variable
      // do they want lower case collect information as a variable
    var number = prompt("How many characters?") //collect var number
    var special = confirm("Do you want special charactes?") //boolean true of false
    var 


 if special === "true"


 //make an empty array to push choices into.

 finalCharacter.push(specChar)


 var finalCharacter = []
 var pass


###########



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);