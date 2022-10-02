/**
 * Object.assign(obj1, obj2, obj3?) will copy property from obj2,obj3,... to obj1
 */
// 或多个源对象作为参数，然后将每个源对象中可枚举（Object.propertyIsEnumerable()返回 true）
// 和自有（Object.hasOwnProperty()返回 true）属性复制到目标对象。以字符串和符号为键的属性
// 会被复制。对每个符合条件的属性，这个方法会使用源对象上的[[Get]]取得属性的值，然后使用目标对象上的[[Set]]设置属性的值。


const src = {
    property1: "value1"
}

const another = {
    property2: "value2"
}

Object.assign(src, another);
console.log(src); // { property1: 'value1', property2: 'value2' }
console.log(another); // { property2: 'value2' }