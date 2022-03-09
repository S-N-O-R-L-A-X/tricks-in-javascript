
let x=1;
setTimeout(()=>{x++},1000);
console.log(x);//setTimeout会在延迟时间后执行函数，因此看不到x的变化

//可以通过传递一个回调函数来看到变化，但如果是嵌套异步回调，那将变得非常复杂，即回调地狱。
function double(value, callback) {
    setTimeout(() => callback(value++), 1000);
}

double(2, (value) => console.log(value))

