/**
 * getUintX(num) read from byte num and read X bits as an unsigned number
 * getintX(num) read from byte num and read X bits as a signed number 
 * setUintX(num) write starting from byte num and write X bits as an unsigned number
 * setintX(num) write starting from byte num and write X bits as a signed number 
 */
const buffer1 = new ArrayBuffer(2);
const dataview1 = new DataView(buffer1);
console.log(dataview1.getUint8(0)); //0
console.log(dataview1.getUint8(1)); //0
try {
    console.log(dataview1.getUint16(1));
}
catch (err) {
    console.log(err); //RangeError: Offset is outside the bounds of the DataView
}
dataview1.setUint8(0, 255); // set all 1 from bit 0

console.log(dataview1.getUint8(0)); //255
console.log(dataview1.getInt8(0)); //-1
console.log(dataview1.getUint8(1)); // 0
console.log(dataview1.getInt8(1)); // 0
console.log(dataview1.getInt16(0)); // -256
console.log(dataview1.getUint16(0)); // 65280


const buffer2 = new ArrayBuffer(4);
const dataview2 = new DataView(buffer2);
dataview2.setUint8(1, 0xFF);
console.log(buffer2); // ArrayBuffer { [Uint8Contents]: <00 ff 00 00>, byteLength: 4 }
console.log(dataview2.getUint8(0)); //0
console.log(dataview2.getInt8(0)); //0
console.log(dataview2.getUint8(1)); // 255
console.log(dataview2.getInt8(1)); // -1
console.log(dataview2.getInt16(0)); // 255
console.log(dataview2.getUint16(0)); // 255


const buffer3 = new ArrayBuffer(4);
const dataview3 = new DataView(buffer3);
dataview3.setUint8(1, 0xF);
console.log(buffer3); // ArrayBuffer { [Uint8Contents]: <00 0f 00 00>, byteLength: 4 }
console.log(dataview3.getUint8(0)); //0
console.log(dataview3.getInt8(0)); //0
console.log(dataview3.getUint8(1)); // 15
console.log(dataview3.getInt8(1)); // 15
console.log(dataview3.getInt16(0)); // 15
console.log(dataview3.getUint16(0)); // 15
