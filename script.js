// Assignment Code

// These are the password options.
var specChar = ["!", "@", "#", "$", "%", "&", "*"];
var uppCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
var lowCase = ["a", "b", "c", "d", "e", "f", "g". "h", "i", "j"];
var numbs = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

// CODE PROVIDED This code is to activate the code when the button is hit
var generateBtn = document.querySelector("#generate");

// CODE PROVIDED Starts the write password
function writePassword () {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
///////////////

  // Q1 User is prompted how many characters 8-128
  // Collect this number as a variable 
  var numOfChar = window.prompt("Enter a number between 8-128");
  //alert if the user doesn't pick within 8-128
  numOfChar = number(8 - 128)
  alert

  // Q2 User is asked if they want special characters - boolean 
  // Collect information as a variable
  var userSpecChar = window.confirm("Do you want to include special characters?");

  // Q3 User is asked if they want upper case - boolean
  // Collect this information as a variable
  var userUppCase = window.confirm("Do you want to include upper case letters?");

  // Q4 User is asked if they want lower case - boolean
  // Collect this information as a variable
  var userLowCase = window.confirm("Do you want to include lower case letters?");

  // Q5 User is asked if they want numbers - boolean
  // Collect this information as a variable
  var userNums = window.confirm("Do you want to include numbers?");

  // New password will be the number of characters the user  in Q1
  // New password will concat the true conditions from the user selections

  // Starts the generation of the password based on Q1-Q5 choices
  function generatePassword ()
    if (userSpecChar == true) {
      // Random selection from 
      var index = Math.floor(Math.random() * specChar.length);
      var computerChoice = specChar[index];
      // push a random selection into a new array

    }

    // CODE PROVIDED I think passwordText.value is variable of all input
  passwordText.value = password;

  }
  // An array from the user selections
 //make an empty array to push choices into.
//  finalCharacter.push(specChar)
//  var finalCharacter = []
//  var pass

///////////////

///////////////


//The original provided JS code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   // I think passwordText.value is variable of all input
//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
