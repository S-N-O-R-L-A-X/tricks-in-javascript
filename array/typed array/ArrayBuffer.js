/**
 * ArrayBuffer will throw an error when failing to assign.
 * The maximum memory js can use is less than Number.MAX_SAFE_INTEGER 2^53 -1 Byte.
 * ArrayBuffer will initialize the bit as 0.
 * js will execute garbage collection automatically.
 * The content in ArrayBuffer cannot be read or written directly. DataView should be used.
 */


const buffer1=new ArrayBuffer(16); //assign 16 byte in memory
console.log(buffer1);
/*
ArrayBuffer {
  [Uint8Contents]: <00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>,
  byteLength: 16
}
*/
console.log(buffer1.byteLength); //16

const  buffer2=buffer1.slice(4,12);
console.log(buffer2.byteLength); //8

const buffer3=buffer1.slice(4,8);
console.log(buffer3.byteLength); //4

const buffer4=buffer1.slice(4,18);
console.log(buffer4.byteLength); //12

const buffer5=buffer1.slice(0,20);
console.log(buffer5.byteLength); //16

try{
    const buffer6=new ArrayBuffer(Number.MAX_SAFE_INTEGER);
}
catch(err){
    console.warn(err); //RangeError: Array buffer allocation failed
}

