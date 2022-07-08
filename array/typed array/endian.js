/**
 * The default is big endian as false.
 * To use small endian, use true.
 */
const buffer1 = new ArrayBuffer(2);
const dataview1 = new DataView(buffer1);
dataview1.setUint16(0, 0x8001);
console.log(dataview1.buffer); // ArrayBuffer { [Uint8Contents]: <80 01>, byteLength: 2 }

console.log(dataview1.getUint16()); // 32769
console.log(dataview1.getUint16(0)); // 32769
console.log(dataview1.getInt16(0)); // -32767
console.log(dataview1.getUint16(0,true)); // 384 small endian read as 0x0180
console.log(dataview1.getUint16(0,false)); // 32769


const buffer2 = new ArrayBuffer(2);
const dataview2 = new DataView(buffer2);
dataview2.setUint16(0, 0x8001,true);
console.log(dataview2.buffer); // ArrayBuffer { [Uint8Contents]: <01 80>, byteLength: 2 }

console.log(dataview2.getUint16()); // 384
console.log(dataview2.getUint16(0)); // 384
console.log(dataview2.getInt16(0)); // 384
console.log(dataview2.getUint16(0,true)); // 32769
console.log(dataview2.getUint16(0,false)); // 384