/**
 * Map.set() returns the instance so you can call it as a chain to add content
 */
const mp=new Map();
mp.set("a",1).set("b",2).set("c",3).set("d",4);

console.log(mp.size); // 4