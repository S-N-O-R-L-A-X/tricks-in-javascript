/**
 * forEach is a helpful function
 * it will not modify the original array.
 */

const numbers=[1,2,3,4];

const numbers2=numbers.forEach((item,index)=>{ 
    item*=index;
    console.log(item); // 0 2 6 12
    return item;
});
console.log(numbers); //[1,2,3,4]
console.log(numbers2); //undefined


