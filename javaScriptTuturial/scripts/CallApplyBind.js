

/////////////////////////////call() apply() and bind()///////////////////////////////////


var person = {
    firstName: "Derrick",
    lastName: "Ejan",
    getFullName: function () {
        var fullName = this.firstName + " " + this.lastName;
        return fullName;
    }
}

var logName = function (lang1, lang2) {

    console.log("Logged: " + this.getFullName());
    console.log("Arguments: " + lang1 + " " + lang2);
    console.log("--------------");
};


var logPersonName = logName.bind(person);

logPersonName("en");

logName.call(person, "En", "ES");

logName.apply(person, ["EN", "ES"]);



var person2 = {
    firstName: "Kimi",
    lastName: "Ejan"
}


// we are able to "borrow" a function from other objects as long as you use similar property names.
console.log(person.getFullName.apply(person2));

//function currying... with bind you are carrying a new copy

function multiply(a, b) {
    return a * b;
}


var multiplyByTwo = multiply.bind(this, 2);

console.log(multiplyByTwo(4));

