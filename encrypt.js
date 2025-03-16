function encrypt() {
    let move = parseInt(document.getElementById("shift").value, 10);
    const str = document.getElementById("inp").value;

    if (isNaN(move) || move <= 0) {
        alert("Please enter a valid number");
        return false;
    }

    function shiftNumber(num, shift, min, max) {
        let range = max - min + 1;
        return ((num + shift - min) % range + range) % range + min;
    }

    let lva = str.split('').map(char => char.charCodeAt(0));
    let nvla = [];

    for (let i = 0; i < lva.length; i++) {
        let charCode = lva[i];

        if (charCode >= 65 && charCode <= 90) { // Uppercase letters
            nvla.push(shiftNumber(charCode, move, 65, 90));
        } 
        else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
            nvla.push(shiftNumber(charCode, move, 97, 122));
        } 
        else if (charCode >= 32 && charCode <= 64) { // Spaces and punctuation
            nvla.push(shiftNumber(charCode, move, 32, 64));
        } 
        else {
            alert("Please enter valid input");
            return false;
        }
    }

    const encrypted = nvla.map(char => String.fromCharCode(char)).join("");
    document.getElementById("output").textContent = encrypted;
}