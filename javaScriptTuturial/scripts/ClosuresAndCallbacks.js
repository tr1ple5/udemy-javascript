
function sayHiLater() {

    var greeting = 'Hi';

    setTimeout(function () {
        console.log("greeting");
    }, 3000);
}


sayHiLater();




/// call back function

function tellMeWhenIAmDone(callback) {

    var a = 1000;
    var b = 2000;

    callback();
}

tellMeWhenIAmDone(function () {
    console.log("I am done");
})