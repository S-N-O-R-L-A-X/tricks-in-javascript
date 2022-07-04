/**
 * when you need to visit an object frequently, you can use with. 
 * with is not recommended in production mode and is banned in strict mode
 */

const obj={
    name:"obj",
    age:10,
};

console.log(obj.name); // obj
console.log(obj.age); // 10

with(obj){
    console.log(name); // obj
    name="new obj"; 
    console.log(name); //new obj
}

console.log(obj.name); //new obj