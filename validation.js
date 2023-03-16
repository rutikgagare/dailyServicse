function validate(){

    var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    let firstName = document.forms["myForm"]["fname"].value;
    let lastName = document.forms["myForm"]["lname"].value;
    let email = document.forms["myForm"]["email"].value;
    let mobile = document.forms["myForm"]["mobileno"].value;
    let pass = document.forms["myForm"]["password"].value;

    if (firstName == "") {
        alert("First Name must be filled out");
        return false;
    }
    else if(lastName == ""){
        alert("Last Name must be filled out");
        return false;
    }
    else if(email = "" || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.match(email))){
        alert("Enter the correct Email");
        return false;
    }
    else if(isNaN(mobile) || mobile == ""){
        alert("Enter the correct Mobile Number");
        return false;
    }
    else if(pass.length < 8 || pass.length > 12 || !pass.match(upperCaseLetters) || !pass.match(lowerCaseLetters) || !pass.match(numbers) ){
        alert("password must contain 1 lowecase letter, 1 uppercase letter and number length should be between 8 and 12");
        return false;
    }
    else{
        return true;
    }
}


