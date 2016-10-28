

console.log(this); // 'this' points to the global object(window object)


function a() {
    console.log(this); // still window
}

a();

var b = function () {
    console.log(this); // still window
}

b();


var c = {
    name: "The c object",
    log: function () {
        var self = this; // work around.

        self.name = "Updated c object"
        console.log(self);

        var setname = function (newname) {
            self.name = newname; // this points to the global object...  if we use this so we use self
        }

        setname("Updated again! The c object"); 
        console.log(self);
    }
}

c.log();
