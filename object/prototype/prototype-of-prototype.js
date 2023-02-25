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

const person1 = new Person(), person2 = new Person();

console.log(person1 !== Person); // true 
console.log(person1 !== Person.prototype); // true 
console.log(Person.prototype !== Person); // true

/** 
 * 实例通过__proto__链接到原型对象，
 * 它实际上指向隐藏特性[[Prototype]] 
 * 
 * 构造函数通过 prototype 属性链接到原型对象
 * 
 * 实例与构造函数没有直接联系，与原型对象有直接联系
 */
console.log(person1.__proto__ === Person.prototype); // true 
conosle.log(person1.__proto__.constructor === Person); // true
