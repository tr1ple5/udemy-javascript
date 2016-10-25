

// reg object
var objectLiteral = {
    firstName: "Derrick",
    isAProgrammer: true
}


//Json
//{"firstName" : "Derrick","isAProgrammer" : true}

//Converts Object to JSON
console.log(JSON.stringify(objectLiteral));

//Parse JSON
var jsonValue = JSON.parse('{"firstName" : "Derrick","isAProgrammer" : true}')

console.log(jsonValue);