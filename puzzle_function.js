// Игра в загадки  c использованием функции
let score = 0;

/*let puzzleArray = [
    ["Угадай загадки. Зимой и летом одним цветом?"],
    ["Красная девица сидит в темнице. а коса на улице?"],
    ["Маленький, удаленький сквозь землю прошел, красную шапочку нашел?"],
    ["Летом серый зимой - зимой белый?"],
    ["Два конца, два кольца - посередине гвоздик?"]
];
console.log(puzzleArray);
*/

answerToRiddleArray = [["елка", "ель"], ["морковь", "свекла"], ["гриб"], ["заяц"], ["ножницы"]];

function compareAnswer(inputId, userAnswerArray){
    
    let userAnswer = document.getElementById(inputId).value;
    userAnswer = userAnswer.toLowerCase();
    
    for(let i = 0; i < userAnswerArray.length; i++){
            
        if(userAnswer == userAnswerArray[i]){
            //alert("Вы ответили верно");
            score++;
            break;
        }
        
    }
    
}

function compareAnswers(){
    compareAnswer("userAnswer1", (answerToRiddleArray[0]));
    compareAnswer("userAnswer2", (answerToRiddleArray[1]));
    compareAnswer("userAnswer3", (answerToRiddleArray[2]));
    compareAnswer("userAnswer4", (answerToRiddleArray[3]));
    compareAnswer("userAnswer5", (answerToRiddleArray[4]));

    alert("Вы ответили верно на " + score + " загадок");
    alert("Правильные ответы на загадки\n" +
          "1 елка или ель\n" + 
          "2 морковь или свекла\n" + 
          "3 гриб\n" + 
          "4 заяц\n" + 
          "5 ножницы");
}


