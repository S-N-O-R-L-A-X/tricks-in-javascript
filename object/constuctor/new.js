/**
 * when use new to create instance,
 * 1.create a new object in memory
 * 2.the [[property]] in new object will be assigned the prototype of the constructor
 * 3.this in the constructor will be assigned the new object(this pointers to new object)
 * 4.execute the code in the constructor
 * 5.if constructor returns an object, then return it or the newly-created object will be returned
 */

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        console.log(this.name);
    };
}

function Person2(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        console.log(this.name);
    };
    return { val: "return" }
}


const person1 = new Person("Nicholas", 29, "Software Engineer");
const person2 = new Person("Greg", 27, "Doctor");
const person3 = new Person2("AA", 40, "Student");

console.log(person1.constructor == Person); // true 
console.log(person2.constructor == Person); // true
console.log(person3.constructor == Person2); // false

/*
 Person {
  name: 'Nicholas',
  age: 29,
  job: 'Software Engineer',
  sayName: [Function (anonymous)]
}
*/
console.log(person1);
console.log(person2);
console.log(person3); // { val: 'return' }