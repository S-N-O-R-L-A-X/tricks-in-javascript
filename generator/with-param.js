function* func(param){
	const x=param * (yield);
	return x;
}
const generator=func(4);
console.log(generator.next()); // { value: undefined, done: false }
console.log(generator.next()); // { value: NaN, done: true }