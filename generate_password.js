let password;
password = "";
let passLength;

//let passLength;

function readLen(){
    len = document.getElementById("passLength").value;
    return parseInt(len);  
}

function write(){
    document.getElementById("result").innerHTML += password;
}

function generate(passLength){
    passLength = readLen();
    console.log(passLength);

    let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
    
    let letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    let passwordNumber = "";
    let passwordLetter = "";
    
    for (let i = 0; i < passLength; i++){
        let numberLetter = Math.random();
        console.log(numberLetter);
        if(numberLetter < 0.5){
            numberLetter2 = Math.ceil(Math.random(1, number.length)*10);
            passwordNumber += number[numberLetter2];
            console.log(passwordNumber);
        }
        else{
            numberLetter2 = Math.ceil(Math.random(1, letter.length)*10);
            passwordLetter += letter[numberLetter2];
            console.log(passwordLetter);
        }
        console.log(numberLetter2);
    }
    password = passwordNumber + passwordLetter
    console.log(password);
    write(password);
}


