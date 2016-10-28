

// by value (primitives)

var a = 3;
var b;

b = a; // by value because we are setting it to a primitive type

a = 2; // So i can change a and it wont effect b.

console.log(a);
console.log(b);


// by reference (all objects(including functions))

var c = { greeting: "Hi" };
var d;

d = c; // this points to the same spot in memory

c.greeting = "hello"; // mutate it (change it imumutable(cant be changed)

console.log(c);
console.log(d);


// reference ( even as parameters)

function changedGreeting(obj) {
    obj.greeting = 'Hola'; // mutate it
}

changedGreeting(d);
console.log(d);
console.log(c);

// equals operator sets up new memory space

c = { getting: 'howdy' };
console.log(c);
console.log(d);
