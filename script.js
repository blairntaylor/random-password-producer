// PROVIDED CODE
generateBtn.addEventListener("click", writePassword);

    // this finds the generate id in the HTML
var generateBtn = document.querySelector("#generate");

// TO DO Write password to the #password input 
function writePassword() {
  var password = generatePassword(); // this function is a method
  var passwordText = document.querySelector("#password"); // this finds the button id in the HTML

 
  passwordText.value = password; // this is the final password variable
  document.body.card[2].appendChild(password); // adding password to the actual document

}

// These are the arrays
var specChars = ["!", "@", "#", "$", "%", "&", "*"];
var uppCases = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
var lowCases = ["a", "b", "c", "d", "e", "f", "g". "h", "i", "j"];
var numbs = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Q1 User is prompted and collect number 8 - 128
var passLength = window.prompt("Enter a number between 8-128");
// Check if the user entered a number between 8-128 and alert if not

    if (passLength = x < 8 && > 128) {
        window.alert("Invalid entry");
    } else {
    }

// Q2 User is asked if they want special characters and collect true
var userSpecChar = window.confirm("Do you want to include special characters?");
    if userSpecChar = true {
        var passSpecChar = specChars[Math.floor(Math.random() * specChars.length)];
    } else {

    }

// Q3 User is asked if they want upperCase and collect true
var userUppCase = window.confirm("Do you want to include upper case letters?");
    if userUppCase = true {
    var passUppCase = uppCases[Math.floor(Math.random() * uppCases.length)];
} else {

}

// Q4 User is asked if they want lowerCase and collect true
var userLowCase = window.confirm("Do you want to include lower case letters?");
// Q5 User is asked if they want numbers and collect true
var userNums = window.confirm("Do you want to include numbers?");
