/* another JS */
import questions from'./questions.js'
console.log(questions[1])
//to do call on randomized questions 

/* HTML to JS */
const trueBtn = document.querySelector('.true');
const falseBtn = document.querySelector('.false');
const nextQuestionBtn = document.querySelector('#nextquestion')
const userScore = document.querySelector('.scores')
const questionResponse = document.querySelector('#questionResponse')
const questionOutput = document.querySelector('.questiontext')
const restartButton = document.querySelectorAll('.restartButton')

/* JS to HTML */
let counter = 0
let questionCounter;
let questionHeader = document.createElement('h3')
questionOutput.appendChild(questionHeader)

// for(let i = 0; i < questions.length; i++){
//     questions[i] 
// }

/* conditions */
function answerCheck(check){
    console.log(questions[questionCounter].response)
    questionResponse.textContent = questions[questionCounter].response
    trueBtn.classList.add('disabled')
    falseBtn.classList.add('disabled')
    nextQuestionBtn.classList.remove('hide')
    if(check == true){
        counter++
        userScore.innerHTML = counter 
    }
    // else{  }
};

function randomQuestions() {
    for (let i = 0; i < questions.length; i++) {
        let j = Math.floor(Math.random() * questions.length);
        let temp = questions[i];
        questions[i] = questions[j];
        questions[j] = temp;
        questionCounter = j
        questionHeader.innerHTML = questions[j].question
    }
    console.log(questions);
}
randomQuestions()

/* buttons */
trueBtn.addEventListener('click', function(){
    answerCheck(true);
});

falseBtn.addEventListener('click', function(){
    answerCheck(false);
});

nextQuestionBtn.addEventListener('click', function(){
    if (questionCounter < questions.length - 1){
        questionCounter++
    }
    console.log(questions[questionCounter].question)
    questionHeader.textContent = questions[questionCounter].question;
    questionResponse.textContent = ''
    nextQuestionBtn.classList.add('hide')
    trueBtn.classList.remove('disabled')
    falseBtn.classList.remove('disabled')
});

restartButton.addEventListener('click', function(){
   document.location.reload(true);

})



//compare user input with questions[0] compare with the value
//show correct answer (hiden . only shows up when answer of user is given)
//is right? so earn +20p & next question ! is right?  -20p next question

//button for quit (with a bit troll message)
//button for restart (with troll message)

//design last