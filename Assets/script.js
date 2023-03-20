// Assignment Code


//define variables
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specialChar =['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];


function generatePassword() {
  var password = '';
  var characters = '';


  characterLength = prompt("How many characters do you want? (8-128");
  return "";

  if (confirm("Include uppercase letters?")){
    choice = concat(upperCase);
  }
  if (confirm("Include lowercase letters?")){
    choice = concat(lowercase);
  }
  if (confirm("Include numbers")){
    choice = concat(number);
  }
  if (confirm("Include special characters")){
    choice = concat(specialCharacters);
  }
  while (pwLength = prompt(""))
// add event listener
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);



  parseInt(prompt("How many characters do you want?"));
  console.log (passwordLength)

  while (isLowerCase) (isUpperCase), (isNumbers), (isSpecial) 
    var isLowerCase = confirm("Do you want lowercase?");
    var isUpperCase = confirm("Do you want uppercase?");
    var isNumbers = confirm("Do you want numbers?");
    var isSpecial = confirm("Do you want special characters?");

function generatePassword(){
    var length = 0
    var includeUpperCase, includeLowerCase, includeNumbers, includeSpecial;
    var pw = "";
}  
}
 {
}
if (isUppercase == 'y') {
  potentialChars.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",);
 }
if (isNumbers == 'y') {
  potentialChars.push(0,1,2,3,4,5,6,7,8,9);
}
if (isSpecial == 'y') {
  potentialChars.push("!","@","#","$","%","^","&","*","(",")");
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener ("click", writePassword);


//Use if checks to verify conditions: condition 1(8 - 128)
// condition2: (user says no to everything)
// if conditions don't meet , return 
// var specialCharacters = [
//   '@',
//   '%',
//   '+',
//   '\\',
//   '/',
//   "'",
//   '!',
//   '#',
//   '$',
//   '^',
//   '?',
//   ':',
//   ',',
//   ')',
//   '(',
//   '}',
//   '{',
//   ']',
//   '[',
//   '~',
//   '-',
//   '_',
//   '.'
// ];
// var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// var lowerCasedCharacters = [
//   'a',
//   'b',
//   'c',
//   'd',
//   'e',
//   'f',
//   'g',
//   'h',
//   'i',
//   'j',
//   'k',
//   'l',
//   'm',
//   'n',
//   'o',
//   'p',
//   'q',
//   'r',
//   's',
//   't',
//   'u',
//   'v',
//   'w',
//   'x',
//   'y',
//   'z'
// ];
// var upperCasedCharacters = [
//   'A',
//   'B',
//   'C',
//   'D',
//   'E',
//   'F',
//   'G',
//   'H',
//   'I',
//   'J',
//   'K',
//   'L',
//   'M',
//   'N',
//   'O',
//   'P',
//   'Q',
//   'R',
//   'S',
//   'T',
//   'U',
//   'V',
//   'W',
//   'X',
//   'Y',
//   'Z'
// ];

//based on user inputs, create a new array.
// That array hould have all types of characters that user asks for
//search how you can join multiple arrays

// use a loop to get x number of characters from the newly formed
// array, where x = passwordLength

// use the characters to create a password(hint: join characters
// to form a string)

//You have to search on google, how to get random characters
//from an array in js