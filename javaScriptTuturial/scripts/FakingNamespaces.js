//faking namespaces

var greet = "Hello";
var greet = "Hola";

console.log(greet);


var english = {};
var spanish = {
    greetings: {
        basic: "Hola"
    }
};

//
english.greetings = {};
english.greetings.greet = "Hello";
//
//spanish.greeting = "Hola";

console.log(english);
console.log(spanish.greetings.basic);