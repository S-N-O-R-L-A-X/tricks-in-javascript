/**
 * Map will record the sequence of insertion
 */
const m = new Map([
    ["key1", "val1"],
    ["key2", "val2"],
    ["key3", "val3"]
]);
console.log(m.entries === m[Symbol.iterator]); // true