/**
 * grammar: {property-name:assignment=default-value}=object
 * number, string can also be destuctured.
 * destucture uses ToObject() internally to convert original data-structure to object, but null and undefined cannot be converted to object, so it will throw an error.
 */

const person = {
    name: "Jack",
    age: 18,
}

try {
    const { name: person_name = "aaa" } = person;
    console.log(person_name); // Jack
    console.log(name);
} catch (err) {
    console.error(err) // ReferenceError: name is not defined
}

const { length } = 'foobar';
console.log(length); // 6 
const { constructor: c } = 4;
console.log(c === Number); // true 

try {
    const { name: person_name = "aaa" } = null;
    console.log(person_name);
} catch (err) {
    console.log(err); // TypeError: Cannot read property 'name' of null
}

