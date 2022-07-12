/**
 * javascript has 5 kind of arrays, Int8Array, Int16Array, Int32Array, Float32Array, Float64Array
 * these arrays have the most of the array functions, but they
 * since the size is defined, you cannot add or remove elements from the array. so you cannot call functions such as concat(),push(),pop()
 * the array has the property of BYTES_PER_ELEMENT, which return the size of the element
 */

const buffer=new ArrayBuffer(4);
const ints1=new Int32Array(buffer);
console.log(ints1); // Int32Array(1) [ 0 ]
console.log(ints1.length); // 1.  every element in array takes 4 bytes
console.log(ints1.buffer.byteLength) // 4
console.log(ints1 instanceof Array); // false

const ints2 = new Int8Array(6);
console.log(ints2.buffer.byteLength); // 6 

const ints3 = new Int32Array([2, 4, 6, 8]);
console.log(ints3); // Int32Array(4) [ 2, 4, 6, 8 ]
console.log(ints3.length); // 4
console.log(ints3.buffer.byteLength); // 16
console.log(ints3[2]); // 6

const ints4 = new Int16Array(ints3);
console.log(ints4); // Int16Array(4) [ 2, 4, 6, 8 ]
console.log(ints4.length); // 4
console.log(ints4.buffer.byteLength); // 8
console.log(ints4[2]); // 6 

const ints5 = Int16Array.from([3, 5, 7, 9]); // create an Int16Array array from array
console.log(ints5.length); // 4
console.log(ints5.buffer.byteLength); // 8
console.log(ints5[2]); // 7
console.log(ints5.filter(item => item>5)); // [ 7, 9 ]

const floats1 = Float32Array.of(3.14, 2.718, 1.618); // create an Float32Array from array
console.log(floats1); // Float32Array(3) [3.140000104904175, 2.7179999351501465, 1.6180000305175781]
console.log(floats1.length); // 3
console.log(floats1.buffer.byteLength); // 12
console.log(floats1[2]); // 1.6180000305175781

console.log(Int16Array.BYTES_PER_ELEMENT); // 2
console.log(Int32Array.BYTES_PER_ELEMENT); // 4
console.log(Float32Array.BYTES_PER_ELEMENT); // 4
console.log(Float64Array.BYTES_PER_ELEMENT); // 8


const ints6=new Int16Array(floats1);
console.log(ints6); // [ 3, 2, 1 ]
const ints7=new Int32Array(floats1);
console.log(ints7); // [ 3, 2, 1 ]

const floats2=ints3.map(x => x-0.1);
console.log(floats2); // [1,3,5,7]
console.log(floats2 instanceof Array); // false
console.log(floats2 instanceof Float32Array); // false
console.log(floats2 instanceof Int32Array); // true
