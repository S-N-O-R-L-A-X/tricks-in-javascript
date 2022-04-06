/**
 * concat will not modify the original array
 * 
 */


let frontend=["html","js","css"];
let frontend2=frontend.concat(["vue",["react","angular"]]);
let frontend3=frontend.concat("vue",["react","angular"]);
let frontend4=frontend.concat(...["vue",["react","angular"]]);
console.log(frontend); // [ 'html', 'js', 'css' ]
console.log(frontend2); // [ 'html', 'js', 'css', 'vue', [ 'react', 'angular' ] ]
console.log(frontend3); // [ 'html', 'js', 'css', 'vue', 'react', 'angular' ]
console.log(frontend4); // [ 'html', 'js', 'css', 'vue', 'react', 'angular' ]

let add=["vue",["react","angular"]];
let frontend5=frontend.concat(add);
console.log(frontend5); // [ 'html', 'js', 'css', 'vue', [ 'react', 'angular' ] ]