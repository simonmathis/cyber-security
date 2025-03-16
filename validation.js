function validateForm(){
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("First name must be filled out");
        return false;
    }

    let y = document.forms["myForm"]["sname"].value;
    if (y == "") {
        alert("Last name must be filled out");
        return false;
    }

    let z = document.forms["myForm"]["email"].value;
    if (z == "") {
        alert("Email must be filled out");
        return false;
    }
}

function validateRatings(){
    let x1 = document.forms["myForm"]["q1"].value;
    if (isNaN(x1) || x1 < 1 || x1 > 10 || x1 == "") {
        alert("Input is not valid. Please enter a number between 1 and 10");
        return false;
    }
}