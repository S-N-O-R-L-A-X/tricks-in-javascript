/**
 * the 5 arrays have subarray() and set()
 */

 const container = new Int16Array(8);

 container.set([1, 2, 3, 4]);
 console.log(container); // Int16Array(8) [1,2,3,4,0,0,0,0]

 container.set([5,6,7,8], 4); //set from index 4
 console.log(container); // Int16Array(8) [1,2,3,4,5,6,7,8]

 try{
    container.set([5,6,7,8], 7);
 }
 catch(err){
    console.log(err); // RangeError: offset is out of bounds
 }