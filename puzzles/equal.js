/**
 * There are four equality algorithms in JavaScript
 * 1.IsLooselyEqual (==)
 * 2.IsStrictlyEqual (===): used by Array.prototype.indexOf, Array.prototype.lastIndexOf, and case-matching
 * 3.SameValueZero: used by TypedArray and ArrayBuffer constructors, as well as Map and Set operations, and also String.prototype.includes and Array.prototype.includes since ES2016
 * 4.SameValue: used in all other places, you can call it by calling Object.is()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
 */

const num = 0;
const obj = new String('0');
const str = '0';

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true

console.log(Object.is(0, -0)); // false
console.log(Object.is(0, +0)); // true
console.log(Object.is(+0, -0)); // false
