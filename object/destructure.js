/**
 * grammar: {property-name:assignment=default-value}=object
 */

const person = {
    name: "Jack",
    age: 18,
}

const { name: person_name = "aaa" } = person;
console.log(person_name); // Jack
console.log(name); // ReferenceError: name is not defined