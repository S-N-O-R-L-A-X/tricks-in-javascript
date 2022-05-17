const arr1=[1,6,7,5,3];
const arr2=arr1;
const arr3=arr1.slice(0);
const arr4=[1,6,7,5,3];
console.log(arr1==arr2); //true
console.log(arr1===arr2); // true
console.log(arr1==arr3); // false
console.log(arr1===arr3); // false
console.log(arr1==arr4); // false
console.log(arr1===arr4); // false
console.log(arr2==arr3); // false
console.log(arr2===arr3); // false