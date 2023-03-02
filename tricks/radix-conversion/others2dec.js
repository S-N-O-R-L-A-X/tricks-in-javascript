function others2dec(num, radix) {
    return parseInt(num, radix);
}

console.log(others2dec("1010", 2)); // 10
console.log(others2dec("12", 8)); // 10
console.log(others2dec("a", 16)); // 10
console.log(others2dec("101", 3)); // 10

console.log(others2dec("1010.1010", 2)); // 10
console.log(others2dec("12.5", 8)); // 10
console.log(others2dec("a.a", 16)); // 10
console.log(others2dec("101.1212121212121212121212121212122", 3)); // 10
