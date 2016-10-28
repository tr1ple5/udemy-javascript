//arguments contains a list of all the values of all the params you pass into a function

function greet(firstName, lastName, language) {
    //you can set a default instead of undefined
    language = language || 'English'

    if (arguments.length === 0) {
        console.log("Missing Arguments");
        console.log('--------------');
        return;
    }

    console.log(firstName);
    console.log(lastName);
    console.log(language);
    console.log(arguments); // built in arguments variable acts like an array but it is NOT
    console.log('--------------');
}
greet();
greet('Derrick');
greet('Derrick', 'Reyes');
greet('Derrick', 'Reyes', 'Tagalog');


//______________________________________SPREAD  PARAMS ________________________________________//


function spreadParam(firstName, lastName, language, ... other) {

    console.log(firstName);
    console.log(lastName);
    console.log(language);
    console.log(arguments);
}


spreadParam("Derrick", "Ejan", "ENG", "PROGRAMMER", 20);