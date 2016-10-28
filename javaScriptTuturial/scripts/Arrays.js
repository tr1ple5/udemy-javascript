
var arr = [1, 2, 3];

console.log(arr[0]);

// in javascript you can put anyting primative type in an array

var mixedArr = [
    1,
    false,
    {
        name: "Derrick",
        job: "Programmer"
    },
    function (name) {
        var greeting = "hello";
        console.log(greeting + " " + name);
    },
    "hola"
]

console.log(mixedArr);

mixedArr[3](mixedArr[2].name);