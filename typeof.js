//use Boolean Object
let falseObject = new Boolean(false);
let result = falseObject && true;
console.log(result); // true

//use Boolean
let falseValue = false;
result = falseValue && true;
console.log(result); // false

console.log(typeof falseObject); // object 
console.log(typeof falseValue); // boolean 
console.log(falseObject instanceof Boolean); // true 
console.log(falseValue instanceof Boolean); // false 

// 理解原始布尔值和 Boolean 对象之间的区别非常重要，强烈建议永远不要使用后者。 ——《深入理解javascript》

//Number has similar property
let numberObject = new Number(10);
let numberValue = 10;
console.log(typeof numberObject); // "object"
console.log(typeof numberValue); // "number"
console.log(numberObject instanceof Number); // true
console.log(numberValue instanceof Number); // false 