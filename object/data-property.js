/**
 * some browsers don't support defineProperty
 * when call defineProperty(), configurable, enumerable and writable is false by default.
 */

let person = {};
Object.defineProperty(person, "name", {
    configurable: false,
    value: "Nicholas"
});
console.log(person.name); // "Nicholas" 
delete person.name; // raise error when 'use strict'
console.log(person.name); // "Nicholas"


// configuarable once set to false, it cannot become true again

// Object.defineProperty(person, "name", { // TypeError: Cannot redefine property: name
//     configurable: true,
//     value: "Nicholas"
// });
