/**
 * Function.apply(obj)
 * apply the function to the object
 */

const Person = {
    outputfullName: function() {
        console.log(this.firstName + " " + this.lastName); 
    }
}

const person1 = {
    firstName: "Hello",
    lastName: "World",
}

Person.outputfullName.apply(person1);  // Hello World