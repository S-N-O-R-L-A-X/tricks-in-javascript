/**
 * split will return '' when the delimeters appear continuously.
 * use filter as a trick to solve this.
 * 
 * A function can be added to the prototype of String.
 * String.prototype.Split=function(s){
 *  return this.split(s).filter(item => item!=="");
 * }
 * 
 * 
 */

const str="This is an apple.An apple? a day keeps doctor away!"
const blank="                ";

console.log(str.split(/[?.!]/)); //[ 'This is an apple', 'An apple', ' a day keeps doctor away', '' ]
console.log(str.split(/[?.!]|\s/)); //['This','is','an','apple','An','apple','','a','day','keeps','doctor', 'away','']
console.log(str.split(/[?.! ]/)); //['This','is','an','apple','An','apple','','a','day','keeps','doctor', 'away','']

console.log(blank.split(" "));//['', '', '', '', '', '', '','', '', '', '', '', '', '','', '', '']

console.log(str.split(/[?.! ]/).filter((item)=>item!==""));// ['This','is','an','apple','An','apple','a','day','keeps', 'doctor','away']
console.log(str.split(/[?.! ]/).filter(Boolean));// ['This','is','an','apple','An','apple','a','day','keeps', 'doctor','away']
