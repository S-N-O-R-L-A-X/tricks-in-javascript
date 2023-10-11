function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
  for (let i = start; i < end; i += step) {
    yield i;
  }
}

var a = makeRangeIterator(1, 10, 2);

console.log(a.next()); // {value: 1, done: false}
console.log(a.next()); // {value: 3, done: false}
console.log(a.next()); // {value: 5, done: false}
console.log(a.next()); // {value: 7, done: false}
console.log(a.next()); // {value: 9, done: false}
console.log(a.next()); // {value: undefined, done: true}