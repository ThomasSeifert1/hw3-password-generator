// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//intial function start for the var password from user inputs

function generatePassword(){
// string var of all different types of characters for selection 
      var lowercase = "abcdefghijklmnopqrstuvwxyz"; 
      var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var numbers = "1234567890";
      var specialCharacters = "!#$%&()*/:;<=>?@[]^{|}~";
      var passwordResult = ""
     
// allows to set the parameters for the length of the password to be generated 
      var passwordLength = prompt("Please enter a number between 8 and 128. This will be the number of characters in your password.");
      while (passwordLength < 8 && passwordLength > 128) { passwordLength = prompt("Please enter a value between 8 and 128 only.")


    }

    //creating booleans for selected types of characters, which are also boxes on the screen to select your choice
    var lwrcase = confirm("Would you like to use lower case letters?");

    console.log(lwrcase);

    if (lwrcase === true) {
      passwordResult += lowercase;
    };

    var upCase = confirm("Would you like to use upper case letters?");
    
    console.log(upCase);

    if(upCase === true){
      passwordResult += uppercase
    };

    var nums = confirm("Would you like to use Numbers?");

    console.log(nums);

    if(nums === true){
      passwordResult += numbers
    };

    var specChars = confirm("Would you like to use Special Characters?");

    console.log(specChars);

    if(specChars === true){
      passwordResult += specialCharacters
    };

    //intial booleans created to start building possible selections for the password 6/14/21

    //finished booleans and concatenated themm to passwordResult if i did it correctly which will give you one of the strings if selected and next will be setting if nothing is picked and the random generation

    //alert to say you didnt select any characters or values for your password
    if(passwordResult.length === 0){
      alert("Please select one type of character to generate your password. Refresh the page to try again.")
    }










}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








///var possibleChoices = ["Rock", "Paper", "Scissors"];

// let randomIndex = Math.floor(Math.random()*possibleChoices.length)
// var computerChoice = possibleChoices[randomIndex];