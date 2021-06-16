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


    // have to change password result var to get it to follow the function that i want it to do

    var passwordOptions = "";

    console.log(lwrcase);

    if (lwrcase === true) {
      passwordOptions += lowercase;
    };

    var upCase = confirm("Would you like to use upper case letters?");
    
    console.log(upCase);

    if (upCase === true){
      passwordOptions += uppercase
    };

    var nums = confirm("Would you like to use Numbers?");

    console.log(nums);

    if (nums === true){
      passwordOptions += numbers
    };

    var specChars = confirm("Would you like to use Special Characters?");

    console.log(specChars);

    if (specChars === true){
      passwordOptions += specialCharacters
    };

    //intial booleans created to start building possible selections for the password 6/14/21

    //finished booleans and concatenated themm to passwordResult if i did it correctly which will give you one of the strings if selected and next will be setting if nothing is picked and the random generation

    //alert to say you didnt select any characters or values for your password(had to change to passwordOptions to link it to the loop to get the propper result)

    if (passwordOptions.length === 0){
      alert("Please select one type of character to generate your password. Refresh the page to try again.")
    }
   

    //use a for loop to ittirate through the different arrays to generate you password

    // indentifier expected error in code look up identifiers for code to work (problem)
    //found online: identifier syntax 
    
    for (var i = 0; i < passwordLength; i++){
      var passwordGenerated = passwordOptions.charAt(Math.floor(Math.random() * Math.floor(passwordOptions.length)));

    // get the loop to generate
      passwordResult += passwordGenerated;
    }

    return passwordResult;

    //generating password but not to correct length there's a issue im overseeing 
    //corrected when i stopped selecting the var password result in the for loop because it was taking the wrong values
    // previos result was pulling all the arrays to the text option instead of random options (fixed)








}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








///var possibleChoices = ["Rock", "Paper", "Scissors"];

// let randomIndex = Math.floor(Math.random()*possibleChoices.length)
// var computerChoice = possibleChoices[randomIndex];