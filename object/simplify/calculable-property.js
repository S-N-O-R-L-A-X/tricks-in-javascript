/**
 * Property names can be assigned dynamically, even with an expression value.
 */
const nameKey = "name";
const person1 = {};
person1[nameKey] = "Jack";
console.log(person1.name); // Jack
console.log(person1.nameKey); // undefined

const person2 = {
    [nameKey]: "King",
};

console.log(person2); // { name: 'King' }


let uniqueToken = 0;
function getUniqueKey(key) {
    return `${key}_${uniqueToken++}`;
}

const person3 = {
    [getUniqueKey("key")]: 'Matt',
    [getUniqueKey("key")]: 27,
    [getUniqueKey("key")]: 'Software engineer'
}

console.log(person3); // { key_0: 'Matt', key_1: 27, key_2: 'Software engineer' }