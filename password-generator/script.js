// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}
// create a new function called "generate password"
// when you click on button the prompt will ask you how many characters you want between 8-128.
//from this we will get length of array
// ask whether you want uppercase or lowercase
// ask if you want to include on character letter/numbers/symbols
// return a password
// display password
// Add event listener to generate button
const generatePassword = () => {
     var num = prompt("Number of characters 8-128")
     var letterType = confirm("Would you like to include uppercase letters?")
     console.log(num)
     var finalNum = characterTotal()
     return finalNum
}

const characterTotal = (num) => {
    var numInt = parsInt(num)
    if (typeof numInt === "number"){
        console.log("test");
        if (numInt < 8) {
            return "Password must include a minimum of 8 characters"
        }else if (numInt > 128){
            return "Password cannot exceed 128 characters"
        }else {
            return numInt
        }
    }else {
        alert("Invalid input")
        var numInt = prompt("Number of characters 8-128")
    }
}

    const upperCase = (letterType) => {
        if (letterType === true) {
            return
        }
        else {
            return
        }
    }

generateBtn.addEventListener("click", writePassword);
