import{questions} from'./questions.js'
console.log(questions[1])

const trueBtn = document.querySelector('.true');
const falseBtn = document.querySelector('.false');
const nextQuestionBtn = document.querySelector('#nextquestion')
const userScore = document.querySelector('.scores')
let counter = 0
let questionOutput = document.querySelector('.questiontext');
let questionHeader = document.createElement('h3')
questionOutput.appendChild(questionHeader)
questionHeader.innerHTML = questions[0].question

// for(let i = 0; i < questions.length; i++){
//     questions[i] 
// }



function answerCheck(check){
    let correctAnswer = document.createElement('p')
    questionHeader.appendChild(correctAnswer)
    correctAnswer.innerHTML = questions[0].response
    trueBtn.setAttribute('disabled', true)
    falseBtn.setAttribute('disabled', true)
    nextQuestionBtn.classList.remove('hide')
    if(check == true){
        counter++
        userScore.innerHTML = counter 
    }else{  }
};

trueBtn.addEventListener('click', function(e){
    answerCheck(true);
});

falseBtn.addEventListener('click', function(e){
    answerCheck(false);
});

nextQuestionBtn.addEventListener('click', function(){
    
});



// show on the screen questions[0]
//get the user input
//compare user input with questions[0] compare with the value
//show correct answer (hiden . only shows up when answer of user is given)
//is right? so earn +20p & next question ! is right?  -20p next question

//button for quit (with a bit troll message)
//button for restart (with troll message)

//design last