const arr1=[1,2,3];
const arr2=[4,5,6];

const arr3=Array.from(arr1);
const arr4=Array.of(arr2);
console.log(arr3); // [ 1, 2, 3 ]
console.log(arr4); // [ [ 4, 5, 6 ] ]
arr1[1]=0;
arr2[1]=0;
console.log(arr3); // [ 1, 2, 3 ] 
console.log(arr4); // [ [ 4, 0, 6 ] ]