/**
 * Map uses sameValueZero() to compare key
 */
const m = new Map();
const objKey = {}, objVal = {}, arrKey = [], arrVal = [];
m.set(objKey, objVal);
m.set(arrKey, arrVal);
objKey.key = "objKey";
objVal.val = "objVal";
arrKey.push(1);
arrVal.push("1toVal");
console.log(m.get(objKey)); // { val: 'objVal' }
console.log(m.get(arrKey)); // [ '1toVal' ]
console.log(m.get({key:"objKey"})); // undefined
console.log(m.get([1])) //undefined

m.set([1,2],1);
console.log(m.get([1,2])); // undefined