/* My method rules: Object */
class Question{
    constructor(question, response, answer){
        this.question = question;
        this.response = response;
        this.answer = answer;
    }
}

/* Questions */
let questions = [];
questions.push(new Question('The maker of this game is Erval.','Erval is the maker! Well, that\'s a bonus, if you chose wrong, then I don\'t know anymore.', true))
questions.push(new Question('You can use semicolon (;) at the beginning of a line.','Yes, you can', true))
questions.push(new Question('NaN (not a number) is not a number.','Nan (not a number) is a number.', false))
questions.push(new Question('JavaScript is also known as Jscript.','Jscript is a relative of JavaScript.', false))
questions.push(new Question('The (alt) attribute of the img tag in HTML is mandatory','Yes, it is mandatory', true))
questions.push(new Question('CSS stands for Cascading Style Ship.','Nope, CSS stands for Cascading Style Sheet', false))
questions.push(new Question('this is an inline function: let func = function(){};.','Yes, it is an inline function', true))
questions.push(new Question('This is an anonymous function: function func(){};.','Nope, it is not', false))
questions.push(new Question('Mocha was JavaScript\'s original name.','Yes sir! Thankfully, this name didn\'t stick around for long!', true))
questions.push(new Question('JavaScript was created in just 10 days.','Awesome right? Eich created JavaScript in just 10 days, so what is your excuse?', true))

export default questions