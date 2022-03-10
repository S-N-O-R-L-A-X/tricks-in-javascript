var globe = 0;
function f1(){
	console.log(globe);
	let globe=1;
}

function f2() {
  console.log(globe);
	var globe = 2;
}

function f3() {
  console.log(globe);
}

f1(); // referenceError
f2(); // undefined
f3(); // 1
