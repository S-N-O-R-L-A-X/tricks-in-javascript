/**
 * some judges whether there exists an item in array conforms to the condition
 */

 const nums=[3,4,5,6,7,6,8,7,4,4,5,4];
 console.log(nums.some((item,index,array) => item>2)); //true
 console.log(nums.some((item,index,array) => {item>2})); //false
 console.log(nums.some((item,index,array) => item>3)); //true
 console.log(nums.some((item,index,array) => item>8)); //false
