function dec2others(num, radix) {
    return num.toString(radix);
}

console.log(dec2others(10, 2)); // 1010
console.log(dec2others(10, 8)); // 12
console.log(dec2others(10, 16)); // a
console.log(dec2others(10, 3)); // 101

console.log(dec2others(10.625, 2)); // 1010.101
console.log(dec2others(10.625, 8)); // 12.5
console.log(dec2others(10.625, 16)); // a.a
console.log(dec2others(10.625, 3)); // 101.1212121212121212121212121212122
