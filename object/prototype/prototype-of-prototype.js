/** 
 * 正常的原型链都会终止于 Object 的原型对象
 * Object 原型的原型是 null 
 */

function Person() { }

console.log(Person.prototype.__proto__ === Object.prototype); // true 
console.log(Person.prototype.__proto__.constructor === Object); // true 
console.log(Person.prototype.__proto__.__proto__ === null); // true

console.log(Person.prototype.__proto__);
/*
nodejs:
[Object: null prototype] {}

chrome:
{ 
 constructor: f Object(), 
 hasOwnProperty: ... 
 isPrototypeOf: ... 
 ... 
}
*/