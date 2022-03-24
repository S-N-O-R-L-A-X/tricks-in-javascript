let arr1=[1,2,3];
console.log(arr1[-1]); //undefined
let arr2=[[1,2,3]];
console.log(arr2[-1]); //undefined

console.log(arr2[-1][2]) //TypeError: Cannot read property '2' of undefined

// you can use ?. to solve the problem
// console.log(arr2[-1]?.[1]); //undefined