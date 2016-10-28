//_______________________________IS NOT AVAILABLE IN JAVASCRIPT______________________________


function greet(firstname,lastname, language) {

    language = language || "English";

    if (language === "English") {
        console.log("Hello " + firstname + ' ' + lastname);
    }

    if (language === "Spanish") {
        console.log("Hola " + firstname + ' ' + lastname);
    }
}


greet("Derrick", "Ejan", "English");
greet("Derrick", "Ejan", "Spanish");

//alternative

function greetEnglish(firstname, lastname) {
    greet(firstname, lastname, "English");
}

function greetSpanish(firstname, lastname) {
    greet(firstname, lastname, "Spanish");
}


greetEnglish("Derrick", "Ejan");
greetSpanish("Derrick", "Ejan");