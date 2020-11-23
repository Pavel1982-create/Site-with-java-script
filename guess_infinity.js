//Угадай число для 2-х игроков.

let player = 1;

let number = parseInt(Math.random() * 100);
console.log(number);

function readInt(){
    let enteredNumber = document.getElementById("userNumberText").value;
    return parseInt(enteredNumber);
}

function replace(text){
    document.getElementById("content").innerHTML = text;
}

function changePlayer(){
    if(player == 1){
        player = 2
    }
    else{
        player = 1;
    }
}

function check(){
    let userNumber = readInt();
    
    if(userNumber == number){
        replace("Вы угадали! Победил игрок " + player);
        //console.log("Игрок", player);
    }

    else if(userNumber > number){
        changePlayer();
        replace("Вы ввели слишком большое число, попробуйте еще раз. Ходит игрок " + player);
        //console.log("Игрок", player);
    }
    else if(userNumber < number){
        changePlayer();
        replace("Вы ввели слишком маленькое число, попробуйте еще раз. Ходит игрок " + player);
        //console.log("Игрок", player);	
    }   
}














