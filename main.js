// Select Elements
let passInput = document.getElementById('password');
let copyBtn = document.querySelector("i.copy");
let generateBtn = document.querySelector("span.generate");
let length = 16;
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abdcefghijklmnopqrstuvwxyz";
let numbers = "1234567890";
let symbols = "#$%_&@[]~*^+{}|<>/=)(";
let allCats = upperCase + lowerCase + numbers + symbols;

var passw=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
generateBtn.onclick = () => {
    createPassword();
}
copyBtn.onclick = ( ) => {
    copyPassword();
}
function createPassword () {
    let password = "";
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += numbers[Math.floor(Math.random() * numbers.length)];
        password += symbols[Math.floor(Math.random() * symbols.length)];
    while (length > password.length) {
        password += allCats[Math.floor(Math.random() * allCats.length)];
}
    if(passw.test(password)) {
        passInput.value = password;
    }else return false;
}
function copyPassword() {
    passInput.select();
    document.execCommand("copy");
}

