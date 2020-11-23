
let scorerMax = 3;
let scorer = 0;
let number = parseInt(Math.random() * 100);
console.log(number);

function readInt(){
    let enteredNumber = document.getElementById("userNumberText").value;
    return parseInt(enteredNumber);
}

function replace(text){
    document.getElementById("content").innerHTML = text;
}


function check(){
    scorer++;
    console.log("СЧЕТЧИК", scorer);
    let userNumber = readInt();
    if(userNumber == number){
        replace("Вы угадали!");
        
    }
    else if(userNumber > number){
        replace("Вы ввели слишком большое число, попробуйте еще раз.");
    }
    else if(userNumber < number){
        replace("Вы ввели слишком маленькое число, попробуйте еще раз.");				
    }    
    else if(scorer >= scorerMax){
        replace("Вы проиграли. Правильный ответ: " + number);
        
    }
}
























/*function check(){
    //let number = parseInt(Math.random() * 100);
    //console.log(number);
    let userNumber = document.getElementById("userNumberText").value;
    console.log(userNumber);
    
    
    for(let scorer = 1; scorer <= scorerMax; scorer++){
        
        if(userNumber == number){
            //alert("Вы угадали!");
            document.getElementById("content").innerHTML = "Поздравляем! Вы угадали.";
            break;                                                                                                              
        }   else if (userNumber < number){
                //alert("Вы ввели слишком маленькое число, попробуйте еще раз.");
                document.getElementById("content").innerHTML = "Вы ввели слишком маленькое число, попробуйте еще раз. У Вас осталось " + (scorerMax - scorer) + " попыток";    
        }   else if(userNumber > number){
                //alert("Вы ввели слишком большое число, попробуйте еще раз.");
                document.getElementById("content").innerHTML = "Вы ввели слишком большое число, попробуйте еще раз. У Вас осталось " + (scorerMax - scorer) + " попыток";
        }//alert("У Вас осталось " + (scorerMax - scorer) + " попыток");
        //alert("Попробуйте ввести число еще раз от 0 до 100");
        userNumber = document.getElementById("userNumberText").value;
        
        if(scorer >= scorerMax){
            //alert("Вы проиграли");
            document.getElementById("content").innerHTML = "Вы проиграли";
        }
    }
}


//alert("Правильный ответ " + number);*/
                    
