/*
    Steps -
        Retrieve values from Input Box
        Reverse the String
        Display the Reversed String to User
*/

// Controller Function
function getInput() {
    // Hide results alert box (Reset case, and ensure invisible is on by default) 
    document.getElementById("alert").classList.add("invisible");

    // Validation check for valid String - if Empty, display error message.
    let inputValue = document.getElementById("userString").value;
    if(!(inputValue == null || inputValue == "")){
        let reversedString = reverseString(inputValue);
        displayString(reversedString);
    } else {
        displayError();
    }
}

// Logic Function
function reverseString(inputValue){
    // Reverse the string using a for-loop
    let revString = "";
    for(let i = inputValue.length -1; i >= 0; i--){
        revString += inputValue[i];
    }
    return revString;
}

// View Function - Display reversed string to user
function displayString(reversedString) {
    // Show Alert Box and write Results to page
    document.getElementById("alert").classList.remove("invisible");
    document.getElementById("msg").innerHTML = `The reversed message is: ${reversedString}.`;
}

// View Function - Display error message to user
function displayError(){
    // Show Alert Box and write Error Message to page
    document.getElementById("alert").classList.remove("invisible");
    document.getElementById("msg").innerHTML = `Please Enter a valid string.`
}