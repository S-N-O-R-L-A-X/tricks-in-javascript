/**
 * once a property does not exist, the properties after will not be destructured.
 */
const person = {
    name: 'Matt',
    age: 27
};
let personName, personBar, personAge;
try {
    ({ name: personName, foo: { bar: personBar }, age: personAge } = person);
} catch (e) {
    console.log(e);
}
console.log(personName, personBar, personAge); // Matt, undefined, undefined