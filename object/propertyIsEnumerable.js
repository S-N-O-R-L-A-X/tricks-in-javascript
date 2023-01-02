Object.propertyIsEnumerable("x");
const arr = ["a", 1, true];
console.log(arr.propertyIsEnumerable("length")); //false

const obj = {
    property1: "a",
    property2: 1,
    property: true
};

console.log(obj.propertyIsEnumerable("property1")); //true
console.log(obj.propertyIsEnumerable("property2")); //true
console.log(obj.propertyIsEnumerable("property3")); //false