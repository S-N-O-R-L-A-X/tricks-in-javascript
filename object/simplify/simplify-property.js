/**
 * When the property and assigment have the same name, using property only is also available.
 * The name will also be recorded in function
 */
const name1 = "Jack";
const obj1 = {
    name1,
}

console.log(obj1.name1); // Jack

function makePerson(name) {
    return {
        name
    };
}
let person = makePerson('Matt');
console.log(person.name); // Matt

const obj2 = {
    name2,
}
console.log(obj2.name2); // ReferenceError: name2 is not defined
