import{questions} from'./questions.js'
console.log(questions[0])

const trueBtn = document.querySelector('.true');
const falseBtn = document.querySelector('.false');


let question_now = 0;

function answerCheck(){

};

trueBtn.addEventListener('click', function(e){
    answerCheck(true);
});

falseBtn.addEventListener('click', function(e){
    answerCheck(false);
});




// show on the screen questions[0]
//get the user input
//compare user input with questions[0] compare with the value
//is right? so earn +20p & next question ! is right?  -20p next question