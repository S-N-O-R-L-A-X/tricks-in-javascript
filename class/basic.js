/**
 * class still uses the prototype chain
 * ES6 supports single inheritance and can inherit properties with [[Construct]] and prototype 
 */

class Vehicle { }
// 继承类
class Bus extends Vehicle { }
let b = new Bus();
console.log(b instanceof Bus); // true 
console.log(b instanceof Vehicle); // true 


function Person() { }

class Engineer extends Person { }// inherit common constructor
let e = new Engineer();
console.log(e instanceof Engineer); // true 
console.log(e instanceof Person); // true 