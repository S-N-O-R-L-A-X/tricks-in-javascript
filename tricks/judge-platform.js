/**
 * the latter one is better because it will not throw an error
 */

console.log(this === window ? "browser" : "node"); // [node] ReferenceError: window is not defined [browser] browser

console.log(typeof process !== "undefined" ? "node" : "browser"); // [node]node [browser] browser
