/**
 * javascript use lexicography as default
 * 
 * 
 */

let nums1 = [1, 2, 3, 10, 12, 13];
nums1.sort();
console.log(nums1); // [ 1, 10, 12, 13, 2, 3 ]

nums1.sort((a, b) => { return a - b; });
console.log(nums1); // [ 1, 2, 3, 10, 12, 13 ]



let nums2 = ["a", "banana", "app", "ap", "apply", "apple"];
nums2.sort((a, b) => { return a < b });
console.log(nums2); // [ 'a', 'banana', 'app', 'ap', 'apply', 'apple' ] 并没有变化

nums2.sort((a, b) => { return a - b });
console.log(nums2); // [ 'a', 'banana', 'app', 'ap', 'apply', 'apple' ] 并没有变化

nums2.sort();
console.log(nums2); // [ 'a', 'ap', 'app', 'apple', 'apply', 'banana' ]


let nums3 = ["a", "banana", "app", "ap", "apply", "apple"];
nums3.sort((a, b) => { 
    if(a<b){
        return -1;
    }
    else if(a>b){
        return 1;
    }
    return 0;
 });
 console.log(nums3);// [ 'a', 'ap', 'app', 'apple', 'apply', 'banana' ] 实现字典序，所以要实现字典序或字典序逆序，也可以通过这种方式

 let nums4 = ["a", "banana", "app", "ap", "apply", "apple"];
 nums4.sort((a, b) => { 
    return a.localeCompare(b);
 });
 console.log(nums4);// [ 'a', 'ap', 'app', 'apple', 'apply', 'banana' ] 实现字典序的另一种方式。注意这与环境有关，而且可能会有bug