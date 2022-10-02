/**
 * Object.assign(obj1, obj2, obj3?) will copy property from obj2,obj3,... to obj1
 */

const src = {
    property1: "value1"
}

const another = {
    property2: "value2"
}

Object.assign(src, another);
console.log(src); // { property1: 'value1', property2: 'value2' }
console.log(another); // { property2: 'value2' }