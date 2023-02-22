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
questions.push(new Question('The maker of this game is Erval.','Right Answer: Erval is the maker! Well, that\'s a bonus, if you chose wrong, then I don\'t know anymore.', 'true'))
questions.push(new Question('You can use semicolon (;) at the beginning of a line.','Right Answer: Yes, you can', 'true'))
questions.push(new Question('NaN (not a number) is not a number.','Right Answer: Nan (not a number) is a number.', 'false'))
questions.push(new Question('JavaScript is also known as Jscript.','Right Answer: Jscript is a relative of JavaScript.', 'false'))
questions.push(new Question('The (alt) attribute of the img tag in HTML is mandatory','Right Answer: Yes, it is mandatory', 'true'))
questions.push(new Question('CSS stands for Cascading Style Ship.','Right Answer: Nope, CSS stands for Cascading Style Sheet', 'false'))
questions.push(new Question('this is an inline function: let func = function(){};.','Right Answer: Yes, it is an inline function', 'true'))
questions.push(new Question('This is an anonymous function: function func(){};.','Right Answer: Nope, it is not', 'false'))
questions.push(new Question('Mocha was JavaScript\'s original name.','Right Answer: Yes sir! Thankfully, this name didn\'t stick around for long!', 'true'))
questions.push(new Question('JavaScript was created in just 10 days.','Right Answer: Awesome right? Eich created JavaScript in just 10 days, so what is your excuse?', 'true'))
questions.push(new Question('Number, String, Boolean, Object, and Undefined, are JavaScript\'s Data types','Right Answer: Rish Answer: Yes, They are all Data types', 'true'))
questions.push(new Question('ASP script is faster than JavaScript','Right Answer: JavaScript is Faster since it\'s a client-side Language, while ASP is a server-side language', 'false'))
questions.push(new Question('Negative Infinity is a number in JavaScript which can be derived by dividing negative number by zero.','Right Answer: This is true. Are you even aware of this?', 'true'))
questions.push(new Question('it\'s not possible to break JavaScript Code into several lines.','Right Answer: Actually, it\'s possible by using a backslash', 'false'))
questions.push(new Question('NetJava is the company that developed JavaScript','Right Answer: Netscape is the software company that developed JavaScript', 'false'))
questions.push(new Question('A prompt Box is a box that allows the user to enter input by providing a text box','Right Answer: This is correct ', 'true'))
questions.push(new Question('you can only use symbol: // , for comments in JavaScript','Right Answer: there are actually 2 ways, symbol: //  , and symbol /* */ ', 'false'))
questions.push(new Question('ViewState and SessionState have no difference','Right Answer: ViewState is specific to a page in a session. While, SessionState is specific to user-specific date that can be accessed across all web application pages', 'false'))
questions.push(new Question('=== is called a strict equality operator, which returns true when the two operands have the same value without conversion','Right Answer: no argue, 100% correct.', 'true'))
questions.push(new Question('document.form[0].submit(); is use to submit a form using JavaScript','Right Answer: This is correct.', 'true'))
questions.push(new Question('JavaScript suppor automatic type conversion','Right Answer: Yes it does.', 'true'))
questions.push(new Question('variable typing is used to assign a number to a variable','Right Answer: This is correct, additionally the same variable can be assigned to a string.', 'true'))
questions.push(new Question('== and === have no difference at all','Right Answer: == checks only for equality in value, whereas === is a stricter equality test and returns false if either the value or the type of the two variables are different', 'false'))
questions.push(new Question('3+2+"7" = 57','Right Answer: Since 3 and 2 are integers, they will be added numerically. And since 7 is a string, its concatenation will be done. So the result would be 57.', 'true'))
questions.push(new Question('In order to detect the operating system on the client machine, the navigator. Platform string (property) should be used.','Right Answer: True, no arguing.', 'true'))
questions.push(new Question('The NULL value is used to represent no value or no object. It implies no object or null string, no valid boolean value, no number, and no array object.','Right Answer: True ', 'true'))
questions.push(new Question('the delete keyword is used to delete the value of the property','Right Answer: The delete keyword is used to delete the property as well as its value.', 'false'))
questions.push(new Question('Alert, Confirm and, Promt , are all Pop up boxes available in JavaScript','Right Answer: True', 'true'))
questions.push(new Question('Void(0) is used to call another function without calling any method inside the function','Right Answer: Void(0) is used to call another method without refreshing the page.', 'false'))
questions.push(new Question('All variables in JavaScript are object data types.','Right Answer: True', 'true'))


export default questions