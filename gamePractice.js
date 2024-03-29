/* another JS */
import questions from'./questions.js'
console.log(questions[1])
//to do call on randomized questions 

/* HTML to JS */
const trueBtn = document.querySelector('.true')
const falseBtn = document.querySelector('.false')
const nextQuestionBtn = document.querySelector('#nextquestion')
const userScore = document.querySelector('.scores')
const questionResponse = document.querySelector('#questionResponse')
const questionOutput = document.querySelector('.questiontext')
const resetBtn = document.querySelector('#reset')

/* JS to HTML */
let counter = 0
let questionCounter = 0 
let roundNumber = 1
let questionHeader = document.createElement('h3')
questionOutput.appendChild(questionHeader)
questionResponse.style.backgroundColor = '#BCE29E'
questionResponse.style.fontSize = '25px'

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
    roundNumber++
        console.log(roundNumber)
    if(roundNumber === 30){
        gameOver()
    }
    if(check == questions[questionCounter].answer){
        counter++
        userScore.innerHTML = counter 
    }
    // else{  }
};

function randomQuestions() {
    for (let i = 0; i < questions.length; i++) {
        let questionIndex = Math.floor(Math.random() * questions.length);
        let temp = questions[i];
        questions[i] = questions[questionIndex];
        questions[questionIndex] = temp;
        questionCounter = questionIndex
        questionHeader.innerHTML = questions[questionIndex].question
    }
    console.log(questions);
}
randomQuestions()

nextQuestionBtn.addEventListener('click', function(){
    if (questionCounter == 29){
        questionCounter = 0
    }
    if (questionCounter < questions.length -1){
        questionCounter++
    }
    console.log(questionCounter)
    console.log(questions[questionCounter].question)
    questionHeader.textContent = questions[questionCounter].question;
    questionResponse.textContent = ''
    nextQuestionBtn.classList.add('hide')
    trueBtn.classList.remove('disabled')
    falseBtn.classList.remove('disabled')
});

/* buttons */
trueBtn.addEventListener('click', function(){
    answerCheck('true');
});

falseBtn.addEventListener('click', function(){
    answerCheck('false');
});

resetBtn.addEventListener('click', function(){
   location.reload()
})

function gameOver(){
    localStorage.setItem('score', counter.toString())
    window.location.replace('http://127.0.0.1:5500/project/p2-js-game/p2-end-page.html')
    // const endScore = document.getElementById('endScore')
    // endScore.textContent = localStorage.getItem('score')
        // alert (`Congratulations! You've finished the quiz, your score is: ${counter}/30.`)
}



