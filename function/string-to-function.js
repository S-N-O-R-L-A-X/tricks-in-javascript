function foo() {
    return 1;
}

const str = foo.toString();

const fn = Function('return ' + str)();

console.log(fn);
console.log(typeof fn);
console.log(fn.toString());