"use strict";
/* -----------------
Assignment code here
------------------*/
/* -------------------------------------
Create arrays of all possible characters
--------------------------------------*/
//function to iterate through CharacterCodes with "LOW" and "HIGH" values to generate arrays
function arrayFromLowtoHigh(low, high) {
  let array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

// create all possible variables to be used as password
const lowercaseCharCodes = arrayFromLowtoHigh(97, 122);
const uppercaseCharCodes = arrayFromLowtoHigh(65, 90);
const numberCharCodes = arrayFromLowtoHigh(48, 57);
const specialCharCodes = arrayFromLowtoHigh(33, 47)
  .concat(arrayFromLowtoHigh(58, 64))
  .concat(arrayFromLowtoHigh(91, 96))
  .concat(arrayFromLowtoHigh(123, 126));

//create empty arrays to use in code
let charCodes = [];
let passwordLengthNumber = [];

/* -------------------------------------
Create all functions that will run when 
--------------------------------------*/
//function to prompt and save user input for desired password length
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
    passwordLengthNumber.push(passwordLength);
    alert("Your password will be " + passwordLength + " characters");
  }
};

//function to ask if user wants uppercase characters
const upperCaseIncl = function () {
  let includeUppercase = window.confirm(
    "Would you like to include 'UPPERCASE CHARACTERS'?"
  );

  if (includeUppercase) {
    charCodes = charCodes.concat(uppercaseCharCodes);
    alert("You chose to include 'UPPERCASE CHARACTERS'");
  } else {
    alert("You have chosen to exclude 'UPPERCASE CHARACTERS'");
  }
};

//function to ask if user wants lowercase characters
const lowerCaseIncl = function () {
  let includeLowercase = window.confirm(
    "Would you like to include 'LOWERCASE CHARACTERS'?"
  );
  if (includeLowercase) {
    charCodes = charCodes.concat(lowercaseCharCodes);
    alert("You chose to include 'LOWERCASE CHARACTERS'");
  } else {
    alert("You chose to exclude 'LOWERCASE CHARACTERS'");
  }
};

// function to ask if user wants numeric values
const numericIncl = function () {
  let includeNums = window.confirm("Would you like to include NUMBERS?");
  if (includeNums) {
    charCodes = charCodes.concat(numberCharCodes);
    alert("You chose to include 'NUMBERS'");
  } else {
    alert("You chose to exclude 'NUMBERS'");
  }
};

// function to ask if user wants special characters
const specialIncl = function () {
  let includeSpecial = window.confirm(
    "Would you like to include 'SPECIAL CHARACTERS' (#, %, & etc.) ?"
  );
  if (includeSpecial) {
    charCodes = charCodes.concat(specialCharCodes);
    alert("You chose to include 'SPECIAL CHARACTERS'");
  } else {
    alert("You chose to exclude 'SPECIAL CHARACTERS'");
  }
};

//create function to pull answers from user and generate password
const generatePassword = function () {
  const passwordCharacters = [];
  for (let i = 0; i < passwordLengthNumber; i++) {
    const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  //join values into one continuous string
  const newPasswordChar = passwordCharacters.join("");
  //write generated password to text area box
  const passwordText = document.querySelector("#password");
  passwordText.textContent = newPasswordChar;
};

// bring all small functions together
const clickPassword = function () {
  lengthChoice();
  upperCaseIncl();
  lowerCaseIncl();
  numericIncl();
  specialIncl();
  generatePassword();
};

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", clickPassword);
