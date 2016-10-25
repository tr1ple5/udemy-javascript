//Default Values

function greet(name) {
    name = name || '<Your Name Here>';
    console.log("Hello " + name);
}

greet();
greet("Derrick")