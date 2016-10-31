


//______________________________________CLOSURES____________________________________________//


function greet(whattosay) {

    return function (name) {
        console.log(whattosay + " " + name);
    }
}


//greet("Hi")("Derrick");

var sayHi = greet("Hi"); // pointing to reference even though execution context is gone.
sayHi("Derrick");


//-----------------------------------------CLOSURES PART 2------------------------------------//

function buildFunctions() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            function () {
                console.log(i);
            }
            )
    }

    return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();


//---------------------------Using let to save value --------------------------

function buildFunctions2() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        let j = i;
        arr.push(
            function () {
                console.log(j);
            }
            )
    }

    return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();