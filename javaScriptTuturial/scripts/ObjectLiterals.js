


var Person = {
    FirstName: "Derrick",
    LastName: "Ejan",
    Job: {
        Company: "Orange Coast Title",
        City: "Santa Ana",
        Position: "Programmer"
    }
};

console.log("Hello " + Person.FirstName + " From " + Person.Job.Company)

Person.FirstName = "Kimi";

console.log(Person.FirstName);