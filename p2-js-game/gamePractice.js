const trueBtn = document.querySelector('.true');
const falseBtn = document.querySelector('.false');

let question_now = 0;

let questions = [{
    'question': 'The maker of this game is Erval.',
    'response': 'The maker of this game is Erval.',
    'answer': true
},{
    'question': 'You can use semicolon (;) at the beginning of a line?.',
    'response': 'Yes, you can also use a semicolon at the beginning of a line.',
    'answer': true
},{
    'question': 'NaN (not a number) is not a number.',
    'response': 'Nan (not a number) is a number.',
    'answer': false
},{
    'question': 'JavaScript is also known as Jscript.',
    'response': 'Jscript is a relative of JavaScript.',
    'answer': false
},{
    'question': 'The (alt) attribute of the img tag in HTML is mandatory.',
    'response': 'The (alt) attribute of the img tag in HTML is mandatory.',
    'answer': true
},{
    'question': 'CSS stands for Cascading Style Ship.',
    'response': 'CSS stands for Cascading Style Sheet.',
    'answer': false
},{
    'question': 'this is an inline function: let func = function(){};.',
    'response': 'let func = function(){}; is an inline function.',
    'answer': true
},{
    'question': 'This is an anonymous function: function func(){};.',
    'response': 'function: function func(){}; is just a normal function.',
    'answer': false
},{
    'question': 'Mocha is JavaScript\'s original name.',
    'response': 'JavaScript\'s original name is Mocha. Thankfully, this name didn\'t stick around for long!',
    'answer': true
},{
    'question': 'JavaScript was created in just 10 days.',
    'response': 'Eich created JavaScript in just 10 days.',
    'answer': true
}];






// show on the screen questions[0]
//get the user input
//compare user input with questions[0] compare with the value
//is right? so earn +20p & next question ! is right?  -20p next question