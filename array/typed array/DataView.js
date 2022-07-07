/**
 * DataView can be used only when a ArrayBuffer is used.
 */

const buffer1=new ArrayBuffer(16);
const dataview1=new DataView(buffer1);
console.log(dataview1);
/*
DataView {
  byteLength: 16,
  byteOffset: 0,
  buffer: ArrayBuffer {
    [Uint8Contents]: <00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>,
    byteLength: 16
  }
}
*/

console.log(dataview1.byteLength); //16
console.log(dataview1.byteOffset); //0
console.log(dataview1.buffer); 
/*
ArrayBuffer {
  [Uint8Contents]: <00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>,
  byteLength: 16
}
*/
console.log(dataview1.buffer===buffer1); //true

const dataview2 = new DataView(buffer1, 0, 6);
console.log(dataview2.byteOffset); // 0
console.log(dataview2.byteLength); // 6
console.log(dataview2.buffer === buffer1); // true 