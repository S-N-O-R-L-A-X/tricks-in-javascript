/**
 * Function.call(obj)
 * apply the function to the object
 */

const Person = {
    outputfullName: function () {
        console.log(this.firstName + " " + this.lastName);
    }
}

const person1 = {
    firstName: "Hello",
    lastName: "World",
}

Person.outputfullName.call(person1);  // Hello World