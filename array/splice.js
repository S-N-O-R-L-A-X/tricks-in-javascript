/**
 * splice(start,deleteCount, ...items)
 */

const arr1=[1,2,3,4,5],arr2=[1,2,3,4,5],arr3=[1,2,3,4,5];



arr1.splice(2,0);
console.log(arr1); //[ 1, 2, 3, 4, 5 ]

arr1.splice(2,1);
console.log(arr1); //[ 1, 2, 4, 5]

arr2.splice(2,2,6,7);
console.log(arr2); //[ 1, 2, 6, 7, 5 ]

arr3.splice(2,2,[6,7]);
console.log(arr3); //[ 1, 2, [ 6, 7 ], 5 ]
