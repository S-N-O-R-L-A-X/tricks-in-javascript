const buffer = new ArrayBuffer(1);
const dataview = new DataView(buffer);
dataview.setInt8(0, 1.5);
console.log(dataview.getInt8(0)); // 1
dataview.setInt8(0, [4]);
console.log(dataview.getInt8(0)); // 4
dataview.setInt8(0, 'f');
console.log(dataview.getInt8(0)); // 0
dataview.setInt8(0, true);
console.log(dataview.getInt8(0)); // 1
dataview.setInt8(0, 'a');
console.log(dataview.getInt8(0)); // 0
dataview.setInt8(0, "dataview");
console.log(dataview.getInt8(0)); // 0

try{
    dataview.setInt8(0, Symbol()); 
}
catch(err){
    console.log(err); //TypeError: Cannot convert a Symbol value to a number
}