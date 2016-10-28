


// function statement
function greet(name) {
    console.log('Hello ' + name);
}

greet("Derrick");

// function expression

var greetFunc = function () {
    console.log('Hello ' + name);
}

greetFunc("Derrick");

// Immediatly invoked function expression


(function (name) {
    console.log("Hello From Immeiatly Invoked func expression");
    console.log("Name passed as Param: " + name);
}("ME"));


