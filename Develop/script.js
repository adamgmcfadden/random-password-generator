"use strict";
// Assignment code here
// create all possible variables to be used as password
function arrayFromLowtoHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

const lowercaseCharCodes = arrayFromLowtoHigh(97, 122);
const uppercaseCharCodes = arrayFromLowtoHigh(65, 90);
const numberCharCodes = arrayFromLowtoHigh(48, 57);
const specialCharCodes = arrayFromLowtoHigh(33, 47)
  .concat(arrayFromLowtoHigh(58, 64))
  .concat(arrayFromLowtoHigh(91, 96))
  .concat(arrayFromLowtoHigh(123, 126));

let charCodes = numberCharCodes;
let passLength2 = [];
// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// create function to prompt and save user input for desired password length
const lengthChoice = function () {
  const passLength = window.prompt(
    "Choose the password's length requirement. It must be between 8 and 128 characters"
  );
  if (passLength < 8 || passLength > 128) {
    window.alert(
      "Incorrect input! Password length must be between 8 and 128 characters"
    );
    lengthChoice();
  } else {
    let passwordLength = parseInt(passLength);
    passLength2.push(passwordLength);
  }
};

const upperCaseIncl = function () {
  let includeUppercase = window.confirm(
    "Would you like to include uppercase characters?"
  );
  if (includeUppercase) charCodes = charCodes.concat(uppercaseCharCodes);
};

const lowerCaseIncl = function () {
  let includeLowercase = window.confirm(
    "Would you like to include lowercase characters?"
  );
  if (includeLowercase) charCodes = charCodes.concat(lowercaseCharCodes);
};

const numericIncl = function () {
  let includeNums = window.confirm("Would you like to include numbers?");
  if (includeNums) charCodes = charCodes.concat(numberCharCodes);
};

const specialIncl = function () {
  let includeSpecial = window.confirm(
    "Would you like to include special characters?"
  );
  if (includeSpecial) charCodes = charCodes.concat(specialCharCodes);
};

//create function to pull answers from user and generate password
const generatePassword = function () {
  const passwordCharacters = [];
  for (let i = 0; i < passLength2; i++) {
    const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }

  let newPasswordChar = passwordCharacters.join("");

  let passwordText = document.querySelector("#password");
  passwordText.value = newPasswordChar;
};

// Write password to the #password input
var passwordText = document.querySelector("#password");
// create randomizer that draws from passwordArray at chosen length and generate password to text area

// Write password to the #password input

// bring all small functions together to simplify event listener
var clickPassword = function () {
  lengthChoice();
  upperCaseIncl();
  lowerCaseIncl();
  numericIncl();
  specialIncl();
  generatePassword();
};

// Add event listener to generate button
generateBtn.addEventListener("click", clickPassword);

/*Set up object or Arrays for:
-Password length
-letters
-numbers
-special characters 

-Once requirement selected, generate button will RANDOMLY draw from each and display to user in random order (maybe).

-need event listener for button
-once pressed, will generate prompts for password criteria
-then will promt for password length between 8 and 128
-then prompted for character types:
lowercase, uppercase, numberic, and or special caracters
-input should be validated and at least one caracter type should be selected
-once all is answered, password is generated that matches the user selection
-password is either generated to an alert window or written on the page
*/
