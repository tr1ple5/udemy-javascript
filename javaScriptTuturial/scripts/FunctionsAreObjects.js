
//First Class Functions (in javascript functions are objects)
//Everything you can do with other types you can do with functions 
//assign them to variables, pass them aruond, create them on the fly



function greet() {
    console.log("HI");
}

//added a prop to function
greet.language = 'english';



///////IN JAVASCRIPT FUNCTIONS ARE OBJECTS/////////

//expression is a unit of code that results in a value
// a = 1 + 2;
// 1+2

//statements do not return a value and just does work
//if (a === 3) {

//}


//FUNCTION STATEMENT
function greet() {
    console.log("HI");
}
//FUNCTION EXPRESSION
var anonymousGreet = function () {
    console.log("HI");
}


greet();
anonymousGreet();

//variables on the fly
function log(a) {
    console.log(a);
    console.log(a.greeting);

   
}

function logFunc(a) {
    a(); // this is how you invoke function passed 
}

log(3);

log("Hello");

log({
    greeting: "Hi from greeting"
});

logFunc(function () {
    console.log("Hi from function");
});






